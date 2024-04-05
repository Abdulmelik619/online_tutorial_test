import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { TeacherDto } from './teacher.dto';
import { Teacher } from './teacher.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('create_teacher')
  async createTeacher(courseDto: TeacherDto) {
    await this.appService.createTeaher(courseDto);
  }

  @MessagePattern({cmd: 'get_teacher'})
  async getCourseById(TeacherId: string): Promise<Teacher> {
    return this.appService.getTeacherById(TeacherId);
  }
}
