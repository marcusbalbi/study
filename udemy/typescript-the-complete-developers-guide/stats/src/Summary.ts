import { MatchData } from "./MatchData";

export interface Analyser {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyser: Analyser, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matchdata: MatchData[]): void {
    const report = this.analyser.run(matchdata);
    this.outputTarget.print(report);
  }
}
