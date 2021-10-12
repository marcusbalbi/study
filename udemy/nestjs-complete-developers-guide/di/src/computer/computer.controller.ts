import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private cpuService: CpuService,
    private diskService: DiskService,
  ) {}

  @Get('/')
  run() {
    const computeResult = this.cpuService.compute(2, 2);
    const diskResult = this.diskService.getData();

    return [computeResult, diskResult];
  }
}
