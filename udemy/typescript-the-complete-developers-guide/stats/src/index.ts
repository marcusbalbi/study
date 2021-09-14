import { CsvFileReader } from "./CsvFileReader";

const reader = new CsvFileReader("football.csv");
reader.read();

enum MatchResults {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

let manUnitedWons = 0;
for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResults.HomeWin) {
    manUnitedWons++;
  } else if (match[2] === "Man United" && match[5] === MatchResults.AwayWin) {
    manUnitedWons++;
  }
}

console.log(`Man United won: ${manUnitedWons} games`);
