import { Module } from '@nestjs/common';
import { StoreModule } from 'src/store/store.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [StoreModule],
})
export class UserModule {}
