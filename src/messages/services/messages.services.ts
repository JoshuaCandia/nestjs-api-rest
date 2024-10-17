import { MessagesRepository } from '../repositories/messages.repository';

export class MessagesService {
  constructor(private messagesRepo: MessagesRepository) {
    // TODO: Dont do this. Use dependency injection
    // this.messagesRepo = new MessagesRepository();
  }
  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }
  findAll() {
    return this.messagesRepo.findAll();
  }
  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
