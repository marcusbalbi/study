import fs from "fs";

export class CsvFileReader {
  private data: string[][] = [];

  constructor(private filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      });
  }
}
