import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers() {
    return [
      {
        name: 'Hanh',
        age: 26,
      },
      {
        name: 'Hao',
        age: 29,
      },
    ];
  }

  // @UsePipes(new ValidationPipe())
  @Post()
  createUser(@Body() user: UserDto): UserDto {
    return this.userService.createUser(user);
  }
}
