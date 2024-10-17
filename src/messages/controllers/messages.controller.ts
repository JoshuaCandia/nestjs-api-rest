import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from '../messages.interfaces';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'GET /messages';
  }

  @Post()
  createMessage(@Body() { content }: CreateMessageDto) {
    console.log(content);
  }
  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
