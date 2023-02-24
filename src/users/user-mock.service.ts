import { UserDto } from './user.dto';

export class UserMockService {
  createUser(user: UserDto): UserDto {
    return {
      id: 1,
      username: 'mock username',
      password: 'mock password',
      createAt: new Date(),
      updateAt: new Date(),
    };
  }
}
