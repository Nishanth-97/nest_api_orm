import { Injectable, Inject } from '@nestjs/common';

import { users } from './post.entity';
import { PostDto } from './dto/post.dto';
//import { User } from '../users/user.entity';
import { POST_REPOSITORY } from '../../core/constants';

@Injectable()
export class PostsService {
    constructor(@Inject(POST_REPOSITORY) private readonly postRepository: typeof users) { }

    async create(post: PostDto): Promise<users[]> {
        return await this.postRepository.bulkCreate<users>([ 
            {
                        id:13,
                        username: "arun",
                        firstname: "nishjks",
                        lastname: "anthskj",
                        email: "nish@gmskail.com",
                        mobile: "9876423425"
                 },
                 { id:14,
                        username: "kumar",
                        firstname: "nishjks",
                        lastname: "anthskj",
                        email: "nish@gmskail.com",
                        mobile: "9876423425" },
                        {
                            id:15,
                            username: "arun",
                            firstname: "nishjks",
                            lastname: "anthskj",
                            email: "nish@gmskail.com",
                            mobile: "9876423425"
                     },
                     { id:16,
                            username: "kumar",
                            firstname: "nishjks",
                            lastname: "anthskj",
                            email: "nish@gmskail.com",
                            mobile: "9876423425" },
                    
                    ]);
    }
    //  async  create(post: PostDto): Promise<users[]> {
    //     return await this.postRepository.bulkCreate([
    //      {
    //             id:7,
    //             username: "kavin",
    //             firstname: "nishjks",
    //             lastname: "anthskj",
    //             email: "nish@gmskail.com",
    //             mobile: "9876423425"
    //      },
    //      { id:8,
    //             username: "kavin",
    //             firstname: "nishjks",
    //             lastname: "anthskj",
    //             email: "nish@gmskail.com",
    //             mobile: "9876423425" },
    
    //     ]);
    // }

    // User.bulkCreate([
    //     { firstName: "Nathan" },
    //     { firstName: "Jack" },
    //     { firstName: "John" },
    //   ]).then(() => console.log("Users data have been saved"));

    async findAll(): Promise<users[]> {
  console.log("*******************************");
    console.log(users);
        return await this.postRepository.findAll<users>();
    }

    // async findAll(): Promise<users[]> {
    //     return await this.postRepository.findAll<users>({
    //         include: [{ model: User, attributes: { exclude: ['password'] } }],
    //     });
    // }

    async findOne(id): Promise<users> {
        return await this.postRepository.findOne({
            where: { id },
           // include: [{ model: User, attributes: { exclude: ['password'] } }],
        });
    }

    async delete(id) {
        return await this.postRepository.destroy({ where: { id} });
    }

    async update(id, data) {
        const [numberOfAffectedRows, [updatedPost]] = await this.postRepository.update({ ...data }, { where: { id }, returning: true });
        return { numberOfAffectedRows, updatedPost };
    }
}
