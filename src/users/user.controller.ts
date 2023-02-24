import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
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
    // const userService = this.moduleRef.get('UserService');

    return this.userService.createUser(user);
  }
}
