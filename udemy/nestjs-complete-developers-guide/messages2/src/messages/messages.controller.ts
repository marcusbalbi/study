import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  protected messages: Array<string> = new Array<string>();

  @Get('/')
  public listMessages() {
    return this.messages;
  }

  @Post('/')
  public createMessage(@Body() body: CreateMessageDto) {
    this.messages.push(body.content);
    return body;
  }

  @Get('/:id')
  public getMessage(@Param('id') id: string) {
    return this.messages[id];
  }
}
