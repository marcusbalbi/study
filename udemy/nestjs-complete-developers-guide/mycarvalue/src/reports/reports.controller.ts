import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AdminGuard } from 'src/guards/admin.guard';
import { AuthGuard } from 'src/guards/auth.guard';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import { User } from 'src/users/user.entity';
import { ApproveReportDto } from './dtos/approve-report.dto';
import { CreateReportDto } from './dtos/create-report.dto';
import { getEstimatesDto } from './dtos/get-estimates.dto';
import { ReportDto } from './dtos/report.dto';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private service: ReportsService) {}

  @Post()
  @UseGuards(AuthGuard)
  @Serialize(ReportDto)
  createReport(@Body() body: CreateReportDto, @CurrentUser() user: User) {
    return this.service.create(body, user);
  }

  @Patch('/:id')
  @UseGuards(AdminGuard)
  approvedRpeort(@Param() id: string, @Body() body: ApproveReportDto) {
    return this.service.changeApproval(id, body.approved);
  }

  @Get()
  getEstimate(@Query() query: getEstimatesDto) {
    return this.service.createEstimate(query);
  }
}
