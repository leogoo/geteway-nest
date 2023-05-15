import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserProviders } from './user.provider';
import { DataSourceModule } from 'src/common/database/database.module';

@Module({
  imports: [DataSourceModule],
  controllers: [UserController],
  providers: [...UserProviders, UserService],
})
export class UserModule {}
