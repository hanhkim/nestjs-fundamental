import { Module } from '@nestjs/common';
import { StoreService } from './store.service';

export interface StoreConfig {
  dirname: string;
  filename: string;
}

@Module({
  providers: [
    StoreService,
    {
      provide: 'STORE_CONFIG',
      useValue: {
        dirname: 'store',
        filename: 'hanhne1234.json',
      } as StoreConfig,
    },
  ],
  exports: [StoreService],
})
export class StoreModule {}
