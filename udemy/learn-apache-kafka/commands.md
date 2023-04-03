kafka-topics --list --bootstrap-server=127.0.0.1:9092
kafka-console-producer --topic=balbi --bootstrap-server=127.0.0.1:9092
kafka-console-consumer --topic=balbi --bootstrap-server=127.0.0.1:9092
kafka-console-consumer --topic=balbi --bootstrap-server=127.0.0.1:9092 --from-beginning
kafka-topics --bootstrap-server=localhost:9092 --describe balbi
kafka-console-consumer --topic=balbi --bootstrap-server=127.0.0.1:9092 --group=bbb
