import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsServices } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsServices],
})
export class CatsModule {}
