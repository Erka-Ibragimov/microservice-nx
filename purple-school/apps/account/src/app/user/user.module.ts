import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './model/user.model';
import { UserRepository } from './repository/user.repository';
import { UserCommands } from './user.commands';
import { UserQueries } from './user.queries';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UserRepository],
  exports: [UserRepository],
  controllers: [UserCommands, UserQueries],
})
export class UserModule {}
