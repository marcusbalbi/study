import request from 'supertest';
import app from '@/main/config/app';

describe('BOdyParser middleware', () => {
  test('should parse body as jon', async () => {
    app.post('/test_body_parser', (req, res) => {
      res.send(req.body);
    });
    await request(app)
      .post('/test_body_parser')
      .send({ name: 'Jhon doe' })
      .expect({ name: 'Jhon doe' });
  });
});
