import { Injectable } from '@nestjs/common';
import { initializeApp, cert, App } from 'firebase-admin/app';
import { getStorage } from 'firebase-admin/storage';

@Injectable()
export class GoogleStorageService {
  constructor() {
    const serviceAccount = require('../../service-key.json');

    initializeApp({
      credential: cert(serviceAccount),
      storageBucket: 'smartranking-824d3.appspot.com',
    });
  }

  public async uploadFile(file, id) {
    const bucket = getStorage().bucket();

    const ext = file.originalname.split('.')[1];
    const f = bucket.file(`${id}.${ext}`);
    f.save(file.buffer, { public: true });

    return f.publicUrl();
  }
}
