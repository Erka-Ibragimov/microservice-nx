import { Body, Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AccountLogin, AccountRegistor } from '@purple-school/contracts';
import { RMQRoute, RMQValidate } from 'nestjs-rmq';
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @RMQValidate()
  @RMQRoute(AccountRegistor.topic)
  async register(
    @Body() dto: AccountRegistor.Request
  ): Promise<AccountRegistor.Response> {
    return this.authService.register(dto);
  }

  @RMQValidate()
  @RMQRoute(AccountLogin.topic)
  async login(
    @Body() { email, password }: AccountLogin.Request
  ): Promise<AccountLogin.Response> {
    const { id } = await this.authService.validateUser(email, password);
    return await this.authService.login(id);
  }
}
