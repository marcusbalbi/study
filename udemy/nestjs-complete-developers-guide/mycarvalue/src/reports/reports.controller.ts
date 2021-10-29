import { Body, Controller, Post } from '@nestjs/common';

@Controller('reports')
export class ReportsController {

  @Post()
  createReport(@Body() body: CreateReportDto) {
    
  }
}
