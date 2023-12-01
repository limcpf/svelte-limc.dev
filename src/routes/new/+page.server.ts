import type PostReadDto from "$lib/domain/Post/PostRead.dto";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const req = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/public/post/site/DEV/recent`)
    const postReadDto = await req.json() as PostReadDto;

    return {
        props: {
            postReadDto : postReadDto
        }
    };
}