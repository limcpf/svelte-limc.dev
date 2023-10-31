import type PostReadDto from "$lib/domain/Post/PostRead.dto";

// @ts-ignore
/** @type {import('./$types').PageServerLoad} */
// @ts-ignore
export const load:PageLoad = async ({ params }) => {
    if(params?.id) {
        const req = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/public/post/${encodeURI(params.id)}`)
        const json = await req.json()
        return json as PostReadDto
    } else {
        throw new Error("id가 올바르지 않습니다.");
    }
}