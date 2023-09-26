import type PostDto from "$lib/domain/Post/Post.dto";
import type {PageLoad} from "../../../../.svelte-kit/types/src/routes/post/[id]/$types";

// @ts-ignore
/** @type {import('./$types').PageLoad} */
export const load:PageLoad = async ({ params }) => {
    if(params?.id) {
        const req = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/public/post/${params.id}`)
        const json = await req.json()
        return json as PostDto
    } else {
        throw new Error("id가 올바르지 않습니다.");
    }
}