import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(protected messagesRepo: MessagesRepository) {}
  async findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  async findAll() {
    return this.messagesRepo.findAll();
  }
  async create(content: string) {
    return this.messagesRepo.create(content);
  }
}
