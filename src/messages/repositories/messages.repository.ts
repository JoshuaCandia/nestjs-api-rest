import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import { handleError } from 'src/functions';

@Injectable()
export class MessagesRepository {
  async getContents() {
    const contents = await readFile('messages.json', 'utf-8');
    return contents;
  }

  async findAll() {
    try {
      const contents = await this.getContents();
      const messages = JSON.parse(contents);

      return messages;
    } catch (error) {
      return handleError(error);
    }
  }

  async findOne(id: string) {
    try {
      const contents = await this.getContents();
      const messages = JSON.parse(contents);

      return messages[id];
    } catch (error) {
      return handleError(error);
    }
  }

  async create(content: string) {
    try {
      const contents = await this.getContents();

      const messages = JSON.parse(contents);

      const id = Math.floor(Math.random() * 999);
      messages[id] = { id, content };
      await writeFile('messages.json', JSON.stringify(messages));
      return messages[id];
    } catch (error) {
      return handleError(error);
    }
  }
}
