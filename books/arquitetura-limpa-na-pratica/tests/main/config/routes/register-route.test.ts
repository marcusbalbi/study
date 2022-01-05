import request from 'supertest';
import app from '@/main/config/app';
import { MongoHelper } from '@/external/repositories/mondogb/helper';

describe('Register route', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  beforeEach(async () => {
    await MongoHelper.clearCollection('users');
  });
  test('should return an account on success', async () => {
    app.post('/test_cors', (req, res) => {
      res.send();
    });

    await request(app)
      .post('/api/register')
      .send({
        name: 'Jhon Doe',
        email: 'jhondoe@mail.com',
      })
      .expect(201);
  });
});
