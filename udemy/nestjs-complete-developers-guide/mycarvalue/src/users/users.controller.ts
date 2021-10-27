import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(
    private service: UsersService,
    private authService: AuthService,
  ) {}
  @Post('signup')
  createUser(@Body() body: CreateUserDto) {
    return this.authService.signUp(body.email, body.password);
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
