import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { handleError } from 'src/functions';
import { CreateMessageDto } from '../dtos/create-messages.dto';
import { MessagesService } from '../services/messages.services';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  listMessages() {
    try {
      const messages = this.messagesService.findAll();
      if (!messages) throw new Error('No messages found');
      return messages;
    } catch (error) {
      return handleError(error);
    }
  }

  @Post()
  async createMessage(@Body() { content }: CreateMessageDto) {
    try {
      const message = await this.messagesService.create(content);
      if (!message) throw new Error('Message not created');
      console.log(message);
      return message;
    } catch (error) {
      return handleError(error);
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
      return handleError(error);
    }
  }
}
