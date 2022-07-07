"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const constants_1 = require("../constants");
const databaseConfig = require('./database.config');
const user_entity_1 = require("../../modules/users/user.entity");
const post_entity_1 = require("../../modules/posts/post.entity");
exports.databaseProviders = [
    {
        provide: constants_1.SEQUELIZE,
        useFactory: async () => {
            let config;
            switch (process.env.NODE_ENV) {
                case constants_1.DEVELOPMENT:
                    config = databaseConfig.development;
                    break;
                case constants_1.TEST:
                    config = databaseConfig.test;
                    break;
                case constants_1.PRODUCTION:
                    config = databaseConfig.production;
                    break;
                default:
                    config = databaseConfig.development;
            }
            const sequelize = new sequelize_typescript_1.Sequelize(config);
            sequelize.addModels([user_entity_1.User, post_entity_1.Users]);
            console.log("***************************************");
            try {
                sequelize.authenticate();
                console.log('Connection has been established successfully.');
            }
            catch (error) {
                console.error('Unable to connect to the database:', error);
            }
            console.log("***************************************");
            await sequelize.sync();
            return sequelize;
        },
    },
];
//# sourceMappingURL=database.providers.js.map