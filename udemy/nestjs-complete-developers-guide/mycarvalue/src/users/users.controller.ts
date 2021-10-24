import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query
} from '@nestjs/common';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';
import { UserDto } from "src/users/dtos/user.dto";

@Serialize(UserDto)
@Controller('auth')
export class UsersController {
  constructor(private service: UsersService) {}
  @Post('signup')
  createUser(@Body() body: CreateUserDto) {
    return this.service.create(body);
  }

  @Get('/:id')
  findUser(@Param('id') id: string) {
    return this.service.findOne(parseInt(id));
  }

  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.service.find(email);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.service.remove(parseInt(id));
  }

  @Patch('/:id')
  updateUpser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.service.update(parseInt(id), body);
  }
}
