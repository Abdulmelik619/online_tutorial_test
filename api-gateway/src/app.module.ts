import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'course',
        transport: Transport.TCP,
        options: {
          port: 3001,
        },
      },
      {
        name: 'teacher',
        transport: Transport.TCP,
        options: {
          port: 3002,
        },
      },
      {
        name: 'user',
        transport: Transport.TCP,
        options: {
          port: 3003,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
