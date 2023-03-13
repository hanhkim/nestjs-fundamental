import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
// import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [UserModule],
  controllers: [],
})
export class AppModule {}
