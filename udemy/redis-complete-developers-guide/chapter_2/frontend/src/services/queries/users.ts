import { usernamesUniqueKey, usersKey } from '$services/keys';
import { client } from '$services/redis';
import type { CreateUserAttrs } from '$services/types';
import { genId } from '$services/utils';

export const getUserByUsername = async (username: string) => {};

export const getUserById = async (id: string) => {
  const key = usersKey(id);
  const user = await client.hGetAll(key);
  return deserialize(id, user);
};

export const createUser = async (attrs: CreateUserAttrs) => {
  const id = genId();
  const key = usersKey(id);
  const usernameKey = usernamesUniqueKey();

  const exists = await client.sIsMember(usernameKey, attrs.username);

  if(exists) {
    throw new Error("Username exists");
  }

  await Promise.all([client.hSet(key, serialize(attrs)),
    client.sAdd(usernameKey, attrs.username)])
  return id;
};

const deserialize = (id: string, user: {[key: string]: string}): CreateUserAttrs & { id: string } => {
	return {
		username: user.username,
		password: user.password,
    id
	};
};

const serialize = (user: CreateUserAttrs) => {
  return {
    username: user.username,
    password: user.password
  }
}
