import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';
import { UserDto } from './user.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('user') private user: Model<User>,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  async createUser(userDto: UserDto) {
    const user = new this.user({
      name: userDto.name,
    });
    const result = await user.save();
    return result;
  }

  async getUserById(courseId: string) {
    // Implement logic to fetch course by ID from the database or other data source
    // For example:
    const course = await this.user.findById(courseId);
    console.log(course);
    return course;
  }
}
