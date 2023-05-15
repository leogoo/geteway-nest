import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Version,
  VERSION_NEUTRAL,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AddUserDto } from './user.dto';
import { ConfigService } from '@nestjs/config';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  @Post('/add')
  create(@Body() user: AddUserDto) {
    console.log(user);
    return this.userService.createOrSave(user);
  }

  @Get()
  @Version([VERSION_NEUTRAL, '1'])
  findAll() {
    throw new HttpException('11222', HttpStatus.CONFLICT);
    return this.userService.findAll();
  }

  @Get()
  @Version('3')
  findAll3() {
    return this.configService.get('TEST_VALUE');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
