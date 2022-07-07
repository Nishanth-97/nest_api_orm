import { Users } from './post.entity';
import { PostDto } from './dto/post.dto';
export declare class PostsService {
    private readonly postRepository;
    constructor(postRepository: typeof Users);
    create(post: PostDto, userId: any): Promise<Users>;
    findAll(): Promise<Users[]>;
    findOne(id: any): Promise<Users>;
    delete(id: any, userId: any): Promise<number>;
    update(id: any, data: any, userId: any): Promise<{
        numberOfAffectedRows: number;
        updatedPost: Users;
    }>;
}
