import type {PageLoad} from "../../../../.svelte-kit/types/src/routes/$types";

import type PostReadDto from "$lib/domain/Post/PostRead.dto";

/** @type {import('./$types').PageLoad} */
export const load:PageLoad = async ({  params }) => {
    const { id } = params as { id: string };

    if(id) {
        const req = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/public/post/${encodeURI(id)}`)
        const json = await req.json()
        return json as PostReadDto
    } else {
        throw new Error("id가 올바르지 않습니다.");
    }
}
