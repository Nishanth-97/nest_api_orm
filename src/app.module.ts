import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { PostsService } from './modules/posts/posts.service';
import { PostsController } from './modules/posts/posts.controller';
import { postsProviders } from './modules/posts/posts.providers';


@Module({
  imports: [
    DatabaseModule,,
  ],
  controllers: [AppController,PostsController],
  providers: [AppService,PostsService, ...postsProviders],
})
export class AppModule {}
