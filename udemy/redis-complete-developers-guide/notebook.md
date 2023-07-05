SET message "hi there"
GET message

<https://redis.io/commands/>

* SET message2 "Hi there2" EX 20 XX
 ** XX only sets if key exists, NX -> only sets if do not key exists
 ** EX expire time in seconds

SETNX message4 "AA"

MSET message1 ABCD message2 EFG
MSETNX message1 ABCD message2 EFG

MGET message1 message2

DEL message1

APPEND message " - Hello there"

GETRANGE message 0 5
SUBSTR message 1 4
SETRANGE message 5 "AAA"

To Store more data we could encode the value

* Numbers

SET count 0
INCR count
INCRBY count 10
DECR count
DECRBY count 5

INCRBYFLOAT count2 12.2


SADD colors red green blue
SADD colors2 purple blue yellow
SADD colors3 red yellow blue

SUNION colors colors2 colors3
SDIFF colors colors2 colors3
SINTER colors colors2 colors3

SINTERSTORE colors:result colors colors2 colors3
SUNIONSTORE colors:result colors colors2 colors3
SDIFFSTORE colors:result colors colors2 colors3

SISMEMBER colors red

SCARD colors

SREM colors2 blue

SSCAN colors 0 COUNT 2
