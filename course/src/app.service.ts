import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from './course.model';
import { CourseDto } from './courser.dto';

@Injectable()
export class AppService {
  constructor(@InjectModel('course') private course: Model<Course>) {}
  getHello(): string {
    return 'Hello World!';
  }
  async createCourse(courseDto: CourseDto) {
    const course = new this.course({
      name: courseDto.name,
      TeacherId: courseDto.TeacherId,
      Users: courseDto.Users,
    });
    const result = await course.save();
    console.log(`created ${result}`);
    return result;
  }

  async getCourseById(courseId: string) {
    // Implement logic to fetch course by ID from the database or other data source
    // For example:
    const course = await this.course.findById(courseId);
    console.log(course);
    return course;
  }
}
