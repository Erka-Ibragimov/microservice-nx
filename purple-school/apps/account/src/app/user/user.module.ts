import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './model/user.model';
import { UserRepository } from './repository/user.repository';
import { UserCommands } from './user.commands';
import { UserEventEmmiter } from './user.event-immiter';
import { UserQueries } from './user.queries';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UserRepository, UserEventEmmiter, UserService],
  exports: [UserRepository],
  controllers: [UserCommands, UserQueries],
})
export class UserModule {}
