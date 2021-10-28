import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Auth (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('handles signup request', (done) => {
    const email = 'abcde@test.com';
    return request(app.getHttpServer())
      .post('/auth/signup')
      .send({ email, password: 'test123' })
      .expect(201)
      .then((res) => {
        const { id, emailCreated } = res.body;
        expect(id).toBeDefined();
        expect(emailCreated).toBe(email);
        done();
      });
  });
});
