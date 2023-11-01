export const ssr = false;
import type PostReadDto from "$lib/domain/Post/PostRead.dto";

/** @type {import('./$types').PageLoad} */
export async function load() {
    const req = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/public/post/site/DEV/recent`)
    return await req.json() as PostReadDto;
}