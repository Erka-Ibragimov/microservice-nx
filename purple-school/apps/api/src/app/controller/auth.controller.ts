import { Body, Controller, Post } from '@nestjs/common';
import { AccountLogin, AccountRegistor } from '@purple-school/contracts';

@Controller('auth')
export class AuthController {
  constructor() {}

  @Post('register')
  async register(@Body() dto: AccountRegistor.Request) {}

  @Post('login')
  async login(@Body() { email, password }: AccountLogin.Request) {}
}
