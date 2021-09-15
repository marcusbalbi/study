import { WinsAnalyzer } from "./analyzers/WinsAnalyzer";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";
import { ConsoleReport } from "./reporters/ConsoleReport";
import { HtmlReport } from "./reporters/HtmlReport";
import { Summary } from "./Summary";

const reader = new MatchReader(new CsvFileReader("football.csv"));
reader.load();

const summary = new Summary(new WinsAnalyzer("Wolves"), new ConsoleReport());
// const summary = new Summary(
//   new WinsAnalyzer("Wolves"),
//   new HtmlReport("Wolves.wons")
// );

summary.buildAndPrintReport(reader.matches);
