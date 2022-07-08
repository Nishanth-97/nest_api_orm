import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { PostsService } from './modules/posts/posts.service';
import { PostsController } from './modules/posts/posts.controller';
import { postsProviders } from './modules/posts/posts.providers';
import { FilesModule } from './modules/files/files.module';
import { FilesController } from './modules/files/files.controller';


@Module({
  imports: [
    DatabaseModule,
  //  PostsModule,
 //   FilesModule
  ],
  controllers: [AppController,PostsController,FilesController],
  providers: [AppService,PostsService, ...postsProviders, FilesModule],
})
export class AppModule {}
