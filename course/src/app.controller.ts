import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { CourseDto } from './courser.dto';
import { Course } from './course.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('create_course')
  async createCourse(courseDto: CourseDto) {
    await this.appService.createCourse(courseDto);
  }

  @MessagePattern({cmd: 'get_course'})
  async getCourseById(courseId: string): Promise<Course> {
    return this.appService.getCourseById(courseId);
  }

}
