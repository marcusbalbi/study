import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  protected messages: Array<string> = new Array<string>();

  @Get('/')
  public listMessages() {
    return this.messages;
  }

  @Post('/')
  public createMessage(@Body() body: any) {
    this.messages.push(body);
    return body;
  }

  @Get('/:id')
  public getMessage(@Param('id') id: string) {
    return this.messages[id];
  }
}
