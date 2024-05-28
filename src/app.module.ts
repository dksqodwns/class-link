import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Comment,
  Group,
  Matching,
  MatchingGroup,
  Message,
  Post,
  Profile,
  School,
  User,
} from './model';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import * as process from 'node:process';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: '',
      database: process.env.DATABASE,
      entities: [
        User,
        School,
        Profile,
        Post,
        Message,
        Matching,
        MatchingGroup,
        Group,
        Comment,
      ],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([
      User,
      School,
      Profile,
      Post,
      Message,
      Matching,
      MatchingGroup,
      Group,
      Comment,
    ]),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
