import { WinsAnalyzer } from "./analyzers/WinsAnalyzer";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";
import { ConsoleReport } from "./reporters/ConsoleReport";
import { Summary } from "./Summary";

const reader = new MatchReader(new CsvFileReader("football.csv"));
reader.load();

const summary = new Summary(new WinsAnalyzer("Wolves"), new ConsoleReport());

summary.buildAndPrintReport(reader.matches);
