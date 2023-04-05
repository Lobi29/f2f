import comment from "./comment";
import post from "./post";
import postedBy from "./postedBy";
import user from "./user";

export const schemaTypes = [comment, post, postedBy, user];

<!-- comment -->
import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        defineField({
            name: 'postedBy',
            title: 'PostedBy',
            type: 'postedBy',
        }),
        defineField({
            name: 'comment',
            title: 'Comment',
            type: 'string',
        }),
    ],
});

<!-- post -->
import { defineField, defineType } from "sanity";

export default defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        defineField({
            name: 'caption',
            title: 'Caption',
            type: 'string',
        }),
        defineField({
            name: 'video',
            title: 'Video',
            type: 'file',
            options: {
              hotspot: true,
            },
        }),
        defineField({
            name: 'userId',
            title: 'UserId',
            type: 'string',
        }),
        defineField({
            name: 'postedBy',
            title: 'PostedBy',
            type: 'postedBy',
        }),
        defineField({
            name: 'likes',
            title: 'Likes',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: [{ type: 'user' }],
              },
            ],
        }),
        defineField({
            name: 'comments',
            title: 'Comments',
            type: 'array',
            of: [{ type: 'comment' }],
        }),
        defineField({
            name: 'topic',
            title: 'Topic',
            type: 'string',
        }),
    ],
});

<!-- posted by -->
import { defineType } from "sanity";

export default defineType({
    name: 'postedBy',
    title: 'PostedBy',
    type: 'reference',
    to: [{ type: 'user' }],
});

<!-- user -->
import { defineField, defineType } from "sanity";

export default defineType({
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        defineField({
            name: 'userName',
            title: 'UserName',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'string',
        }),
    ],
});