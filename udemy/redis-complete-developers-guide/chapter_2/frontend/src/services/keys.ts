export const pageCacheKey = (id: string) => {
  return `pagecache#${id}`
};

export const usersKey = (userId: string) => {
	return `users#${userId}`;
};

export const sessionsKey = (id: string) => {
	return `sessions#${id}`;
};

export const itemsKey = (id: string) => {
	return `items#${id}`;
};