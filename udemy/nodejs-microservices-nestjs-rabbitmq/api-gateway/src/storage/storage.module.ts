import { Module } from '@nestjs/common';
import { GoogleStorageService } from './google-storage.service';

@Module({
  exports: [GoogleStorageService],
  providers: [GoogleStorageService],
})
export class StorageModule {}
