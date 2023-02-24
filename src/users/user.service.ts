import { Injectable, Module } from '@nestjs/common';
import { UserMockService } from './user-mock.service';
import { UserController } from './user.controller';
import { UserDto } from './user.dto';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: UserService,
      useClass: UserMockService,
    },
  ],
})
export class UserService {
  constructor(private readonly userService: UserService) {}
  createUser(user: any): any {
    user.id = 1;
    user.createAt = new Date();
    user.updateAt = new Date();
    return UserDto.plainToClass(user);
  }
}
