import { MemberService } from './member.service';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get('/join')
  async join() {
    return this.memberService.join();
  }
}
