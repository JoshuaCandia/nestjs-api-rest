import { Injectable } from '@nestjs/common';
import { MessagesRepository } from '../repositories/messages.repository';

@Injectable()
export class MessagesService {
  constructor(private messagesRepo: MessagesRepository) {}
  async findOne(id: string) {
    try {
      const message = await this.messagesRepo.findOne(id);
      return message;
    } catch (error) {
      return;
    }
  }
  async findAll() {
    try {
      const messages = await this.messagesRepo.findAll();
      return messages;
    } catch (error) {
      return;
    }
  }
  async create(content: string) {
    try {
      const message = await this.messagesRepo.create(content);
      return message;
    } catch (error) {
      return error;
    }
  }
}
