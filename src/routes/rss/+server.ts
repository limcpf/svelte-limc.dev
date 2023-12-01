import type PostRssDto from "$lib/domain/Post/PostRss.dto";
import {Feed} from "feed";

/** @type {import('./$types').RequestHandler} */
export async function GET() {

const req = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/public/post`)
const posts = await req.json() as PostRssDto[];

const feed = new Feed({
    title: "Example Feed",
    description: "This is an example feed!",
    id: "https://limc.dev/",
    link: "https://limc.dev/",
    language: "kr", copyright: "ⓒ 2023",
    image: "https://limc.dev/favicon.ico",
    favicon: "https://limc.dev/favicon.ico",
});

posts.forEach(post => {
    const id = post.title.replaceAll(" ", "-");
    feed.addItem({
        title: post.title,
        id: id,
        link: `https://limc.dev/post/${id}`,
        description: post.summary,
        content: post.summary,
        author: [
            {
                name: "limc",
                email: "limcdevblog@gmail.com",
                link: "https://limc.dev/"
            }
        ],
        date: new Date(post.createdAt)
    });
});

feed.addCategory("Tech");

feed.addContributor({
    name: "limc",
    email: "limcdevblog@gmail.com",
    link: "http://limc.dev/"
});

    return new Response(feed.rss2(), {
        headers: {
            "content-type": "text/xml",
        },
    });
}