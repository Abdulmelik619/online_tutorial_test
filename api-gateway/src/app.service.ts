import { Inject, Injectable } from '@nestjs/common';
import { CourseDto } from './courser.dto';
import { ClientProxy } from '@nestjs/microservices';
import { TeacherDto } from './teacher.dto';
import { UserDto } from './user.dto';
import { from, map } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('course') private readonly courseService: ClientProxy,
    @Inject('teacher') private readonly teacherService: ClientProxy,
    @Inject('user') private readonly userService: ClientProxy,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  async getCourseById(courseDto: CourseDto) {
    const courseObservable = this.courseService.send(
      { cmd: 'get_course' },
      courseDto.id,
    );

    // Convert Observable to Promise
    let teacherId;
    const coursePromise = await  from(courseObservable)
      .pipe(
        map((course) => {
          console.log(course);
          console.log(course.TeacherId);
          teacherId = course.TeacherId;
          return course;
        }),
      )
      .toPromise();
      const teacher = this.teacherService.send({ cmd: 'get_teacher' }, teacherId);

      const teacherPromise = await  from(teacher)
      .pipe(
        map((course) => {
          console.log(course);
          console.log(course.TeacherId);
          teacherId = course.TeacherId;
          return course;
        }),
      )
      .toPromise();

    return  [coursePromise, teacherPromise];
  }
  async createCourse(courseDto: CourseDto) {
    this.courseService.emit('create_course', courseDto);
  }
  async createTeacher(teacherDto: TeacherDto) {
    this.teacherService.emit('create_teacher', teacherDto);
  }
  async cerateUser(userDto: UserDto) {
    this.userService.emit('create_user', userDto);
  }
}
