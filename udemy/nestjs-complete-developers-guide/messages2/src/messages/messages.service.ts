import { MessagesRepository } from './messages.repository';

export class MessagesService {
  protected messagesRepo: MessagesRepository;

  constructor() {
    // DI in future
    this.messagesRepo = new MessagesRepository();
  }
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
