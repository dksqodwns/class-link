import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemberController } from './member/member.controller';
import { MemberService } from './member/member.service';
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
} from './entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE,
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
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
      synchronize: false,
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
  ],
  controllers: [AppController, MemberController],
  providers: [AppService, MemberService],
})
export class AppModule {}
