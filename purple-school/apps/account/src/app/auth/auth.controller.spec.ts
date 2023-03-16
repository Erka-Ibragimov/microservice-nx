import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { RMQModule } from 'nestjs-rmq';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { AuthModule } from './auth.module';
import { getMongoConfig } from '../config/mongo.config';
import { INestApplication } from '@nestjs/common';

describe('AuthController', () => {
  let controller: AuthController;
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: 'envs/.account.env',
        }),
        RMQModule.forTest({}),
        UserModule,
        AuthModule,
        MongooseModule.forRootAsync(getMongoConfig()),
      ],
      controllers: [AuthController],
    }).compile();

    app = module.createNestApplication();
    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
