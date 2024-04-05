import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { courseSchema } from './course.model';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/testMicroService'),
    MongooseModule.forFeature([
      {
        name: 'course',
        schema: courseSchema,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
