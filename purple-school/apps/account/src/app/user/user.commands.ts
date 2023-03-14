import { Body, Controller } from '@nestjs/common';
import { AccountChangeProfile } from '@purple-school/contracts';
import { RMQRoute, RMQValidate } from 'nestjs-rmq';
import { UserEntity } from './entity/user.entity';
import { UserRepository } from './repository/user.repository';

@Controller()
export class UserCommands {
  constructor(private readonly userRepository: UserRepository) {}

  @RMQValidate()
  @RMQRoute(AccountChangeProfile.topic)
  async changeProfile(
    @Body() { user, id }: AccountChangeProfile.Request
  ): Promise<AccountChangeProfile.Response> {
    const existedUser = await this.userRepository.findUserById(id);
    if (!existedUser) {
      throw new Error('Такого пользователя не сущесвтвует!');
    }
    const userEntity = new UserEntity(existedUser).updateProfile(
      user.displayName
    );
    await this.userRepository.updateUser(userEntity);
    return { updated: true };
  }
}
