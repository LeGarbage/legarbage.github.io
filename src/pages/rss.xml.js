import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';

export async function GET(context) {
    const posts = await getCollection("blog");
    return rss({
        title: 'LeBlog',
        description: ':(){ :|:& };:',
        site: context.site,
        items: posts.map(post => ({
            ...post.data,
            link: `blog/posts/${post.id}`
        })),
        customData: `<language>en-us</language>`,
    });
}
