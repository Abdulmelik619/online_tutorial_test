import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { UserDto } from './user.dto';
import { User } from './user.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('create_user')
  async createUser(userDto: UserDto) {
    console.log('called');
    await this.appService.createUser(userDto);
  }

  @MessagePattern({cmd: 'get_user'})
  async getCourseById(userId: string): Promise<User> {
    return this.appService.getUserById(userId);
  }
}
