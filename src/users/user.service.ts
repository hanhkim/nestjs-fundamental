import { Injectable } from '@nestjs/common';
import { StoreService } from 'src/store/store.service';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    // private readonly userService: UserService,
    private storeService: StoreService,
  ) {}

  createUser(user: any): any {
    this.storeService.save(user);
    return UserDto.plainToClass(user);
  }
}
