import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
//  connect MongoDB
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  //  connect MongoDB
  imports: [MongooseModule.forRoot(
    'mongodb://localhost:27017/nestJsApp'
  ), BlogModule],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
