import type {RequestEvent} from "@sveltejs/kit";

/** @type {import('../../../../../../.svelte-kit/types/src/routes').RequestHandler} */
export async function GET(hello:RequestEvent) {
    const {  params } = hello;

    const id = params.id || ""

    const req = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/public/post/${id}`)

    return req;
}