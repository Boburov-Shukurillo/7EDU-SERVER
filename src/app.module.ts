import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MailService } from './mail/mail.service';
import { CoursesModule } from './courses/courses.module';
import { UploadsModule } from './uploads/uploads.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, UserModule, AuthModule, CoursesModule, UploadsModule],
  controllers: [AppController],
  providers: [AppService, MailService],
})
export class AppModule { }
