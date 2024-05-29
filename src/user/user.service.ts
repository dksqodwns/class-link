import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../model';
import { pipe, throwIf } from '@fxts/core';
import { JoinRequestDto } from './dto/request/join.request.dto';

@Injectable()
export class UserService {
  constructor(@Inject() private readonly userRepository: Repository<User>) {}

  async findUserByEmail(email: string) {
    return await this.userRepository.findOne({ where: { email } });
  }

  join(joinRequestDto: JoinRequestDto) {
    return pipe(
      this.findUserByEmail(joinRequestDto.email),
      throwIf(
        (user) => !!user,
        () =>
          new HttpException(
            '이미 존재하는 이메일 입니다.',
            HttpStatus.CONFLICT,
          ),
      ),
      async () => await this.userRepository.save(joinRequestDto),
    );
  }
}
