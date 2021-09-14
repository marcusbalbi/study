import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";

const reader = new CsvFileReader("football.csv");
reader.read();

let manUnitedWons = 0;
for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWons++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWons++;
  }
}

console.log(`Man United won: ${manUnitedWons} games`);
