export default {
    cms_manual_init: true,
    backend: {
        name: 'github',
        repo: 'iampearceman/nextjs-blog',
        branch: 'main',
    },
    media_folder: 'public/images',
    public_folder: 'images',
    collections: [
        {
            name: 'posts',
            label: 'Post',
            folder: 'posts',
            create: true,
            slug: "{{slug}}",
            fields: [
                {
                    label: 'Title',
                    name: 'title',
                    widget: 'string',
                },
                {
                    label: 'MetaTitle',
                    name: 'metaTitle',
                    widget: 'string',
                },
                {
                    label: 'metaDesc',
                    name: 'metaDesc',
                    widget: 'string',
                },
                {
                    label: 'socialImage',
                    name: 'socialImage',
                    widget: 'image',
                    choose_url: true,
                    default: "/uploads/chocolate-dogecoin.jpg",
                    media_library: {
                        config: {
                            multiple: true,
                        }
                    }
                },
                {
                    label: 'Date',
                    name: 'date',
                    widget: 'date',
                    default: '',
                    format: 'YYYY-mm-dd',
                },
                {
                    label: "Tags",
                    name: "tags",
                    widget: "list",
                    add_to_top: true,

                },
                {
                    label: 'Body',
                    name: 'body',
                    widget: 'markdown',
                },
            ],
        },
    ],
};