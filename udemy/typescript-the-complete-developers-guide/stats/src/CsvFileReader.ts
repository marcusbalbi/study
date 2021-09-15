import fs from "fs";
export abstract class CsvFileReader<T> {
  public data: T[] = [];

  abstract mapRow(row: string[]): T;

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.mapRow);
  }
}
