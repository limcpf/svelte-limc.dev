import type PostDto from "$lib/domain/Post/Post.dto";

/** @type {import('./$types').PageLoad} */
export async function load() {
    const req = await fetch(`http://localhost:8080/public/post/4`)
    const json = await req.json()

    return json as PostDto
}