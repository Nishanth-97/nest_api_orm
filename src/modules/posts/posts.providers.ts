import { users } from './post.entity';
import { POST_REPOSITORY } from '../../core/constants';

export const postsProviders = [
    {
        provide: POST_REPOSITORY,
        useValue: users,
    },
];
