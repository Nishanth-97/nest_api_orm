"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_entity_1 = require("./post.entity");
const constants_1 = require("../../core/constants");
exports.postsProviders = [
    {
        provide: constants_1.POST_REPOSITORY,
        useValue: post_entity_1.Users,
    },
];
//# sourceMappingURL=posts.providers.js.map