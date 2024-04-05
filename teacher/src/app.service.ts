import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Teacher } from './teacher.model';
import { TeacherDto } from './teacher.dto';

@Injectable()
export class AppService {
  constructor(@InjectModel('teacher') private teacher: Model<Teacher>) {}
  getHello(): string {
    return 'Hello World!';
  }
  async createTeaher(teacherDto: TeacherDto) {
    const teacher = new this.teacher({
      name: teacherDto.name,
    });
    const result = await teacher.save();
    return result;
  }
  async getTeacherById(courseId: string) {
    // Implement logic to fetch course by ID from the database or other data source
    // For example:
    const course = await this.teacher.findById(courseId);
    console.log(course);
    return course;
  }
}
