import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CourseDto } from './courser.dto';
import { TeacherDto } from './teacher.dto';
import { UserDto } from './user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('get-course')
  async getCourse(@Body() courseDto: CourseDto) {
    const course = this.appService.getCourseById(courseDto);
    return course;
  }

  @Post('create-course')
  async createCourse(@Body() courseDto: CourseDto) {
    this.appService.createCourse(courseDto);
  }
  @Post('create-teacher')
  async createTeacher(@Body() teacherDto: TeacherDto) {
    this.appService.createTeacher(teacherDto);
  }
  @Post('create-user')
  async createUser(@Body() userDto: UserDto) {
    this.appService.cerateUser(userDto);
  }
}
