import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private service: UsersService) {}
  @Post('signup')
  createUser(@Body() body: CreateUserDto) {
    return this.service.create(body);
  }
}
