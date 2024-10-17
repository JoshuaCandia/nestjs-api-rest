import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateMessageDto } from '../dtos/create-messages.dto';
import { MessagesService } from '../services/messages.services';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {
    // TODO: Dont do this. Use dependency injection
    //this.messagesService = new MessagesService();
  }
  @Get()
  listMessages() {
    try {
      const messages = this.messagesService.findAll();
      if (!messages) throw new Error('No messages found');
      return messages;
    } catch (error) {
      return { error: error.message };
    }
  }

  @Post()
  createMessage(@Body() { content }: CreateMessageDto) {
    try {
      const message = this.messagesService.create(content);
      if (!message) throw new Error('Message not created');
      return message;
    } catch (error) {
      return { error: error.message };
    }
  }
  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    try {
      const message = await this.messagesService.findOne(id);
      console.log(message, 'ID MESSAGE');
      if (!message) throw new NotFoundException('Message not found');
      return message;
    } catch (error) {
      return { error: error.message, status: error.status };
    }
  }
}
