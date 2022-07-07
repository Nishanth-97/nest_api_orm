import { Sequelize } from 'sequelize-typescript';

import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
const databaseConfig = require('./database.config');
import { users } from '../../modules/posts/post.entity';

export const databaseProviders = [
    {
        provide: SEQUELIZE,
        useFactory: async () => {
            let config;
            switch (process.env.NODE_ENV) {
                case DEVELOPMENT:
                    config = databaseConfig.development;
                    break;
                case TEST:
                    config = databaseConfig.test;
                    break;
                case PRODUCTION:
                    config = databaseConfig.production;
                    break;
                default:
                    config = databaseConfig.development;
            }
            const sequelize = new Sequelize(config);
            sequelize.addModels([ users]);
            console.log("***************************************");
            try {
                sequelize.authenticate();
               console.log('Connection has been established successfully.');
             } catch (error) {
               console.error('Unable to connect to the database:', error);
             }
             console.log("***************************************");
            await sequelize.sync();
            return sequelize;
        },
    },
];