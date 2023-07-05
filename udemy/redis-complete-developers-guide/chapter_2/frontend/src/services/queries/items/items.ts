import { itemsKey } from '$services/keys';
import { client } from '$services/redis';
import type { CreateItemAttrs } from '$services/types';
import { genId } from '$services/utils';
import { deserialize } from './deserialize';
import { serialize } from './serialize';

export const getItem = async (id: string) => {
  const item = await client.hGetAll(itemsKey(id));

  if(Object.keys(item).length === 0) {
    return null;
  }
  return deserialize(id, item);
};

export const getItems = async (ids: string[]) => {
  const commands = ids.map((id) => {
    return client.hGetAll(itemsKey(id))
  });
  const results = await Promise.all(commands);

  return results
		.filter((item) => Object.keys(item).length > 0)
		.map((item, i) => {
			return deserialize(ids[i], item);
		});
};

export const createItem = async (attrs: CreateItemAttrs, userId: string) => {
  const id = genId();
  const key = itemsKey(id)
  await client.hSet(key, serialize(attrs))
  return id;
};
