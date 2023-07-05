import { sessionsKey } from '$services/keys';
import { client } from '$services/redis';
import type { Session } from '$services/types';

export const getSession = async (id: string) => {
  const key = sessionsKey(id);
  const session = await client.hGetAll(key);
  
  if (!session || Object.keys(session).length === 0) {
    return null;
  }

  return deserialize(id, session);
}; 

export const saveSession = async (session: Session) => {
  const key = sessionsKey(session.id);

  return client.hSet(key, serialize(session));
};

const deserialize = (id: string, session: { [key: string]: string }): Session => {
	return {
		userId: session.userId,
		username: session.username,
		id
	};
};

const serialize = (session: Session) => {
  return {
    userId: session.userId,
    username: session.username
  }
}