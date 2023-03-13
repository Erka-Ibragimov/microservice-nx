import { IsEmail, IsOptional, IsString } from 'class-validator';
export namespace AccountRegistor {
  export const topic = 'account.registor.command';
  export class Request {
    @IsEmail()
    email: string;
    @IsString()
    password: string;
    @IsOptional()
    @IsString()
    displayName?: string;
  }
  export class Response {
    email: string;
  }
}
