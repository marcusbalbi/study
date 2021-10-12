import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  protected messagesService: MessagesService;

  constructor() {
    // DI in future
    this.messagesService = new MessagesService();
  }

  @Get('/')
  public listMessages() {
    return this.messagesService.findAll();
  }

  @Post('/')
  public createMessage(@Body() body: CreateMessageDto) {
    this.messagesService.create(body.content);
    return body;
  }

  @Get('/:id')
  public getMessage(@Param('id') id: string) {
    return this.messagesService.findOne(id);
  }
}
