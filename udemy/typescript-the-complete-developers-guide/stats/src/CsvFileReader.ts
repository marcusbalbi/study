import fs from "fs";
import { DataReader } from "./MatchReader";
export class CsvFileReader implements DataReader {
  public data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs.readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      });
  }
}
