import type PostDto from "$lib/domain/Post/Post.dto";

/** @type {import('./$types').PageLoad} */
export async function load() {
    const req = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/public/post/site/DEV/recent`)
    return await req.json() as PostDto;
}