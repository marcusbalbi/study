import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('./messages.json', 'utf-8');
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll() {
    const contents = await readFile('./messages.json', 'utf-8');
    const messages = JSON.parse(contents);

    return messages;
  }
  async create(content: string) {
    const contents = await readFile('./messages.json', 'utf-8');
    const messages = JSON.parse(contents);

    const lastId = Math.max(
      ...Object.keys(messages).map((messageId) => parseInt(messageId)),
      0,
    );
    const id = lastId + 1;

    messages[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(messages));
  }
}
