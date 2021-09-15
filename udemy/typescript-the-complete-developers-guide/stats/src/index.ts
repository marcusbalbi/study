import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

const reader = new MatchReader(new CsvFileReader("football.csv"));
reader.load();
let manUnitedWons = 0;
for (let match of reader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWons++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWons++;
  }
}

console.log(`Man United won: ${manUnitedWons} games`);
