

HSET person:joe name "Joe"
HSET person:joe age 25

HGET person:joe name

HSET person:jane name "Jane" age 24

HVALS person:joe

HGETALL person:jane

HEXISTS person:jane company
HEXISTS person:jane age

HDEL person:jane age

HINCRBY person:joe age 2


HINCRBY person:joe salary 250


HSTRLEN person:joe name

HKEYS person:joe
