import type {PageLoad} from "../../../../../../.svelte-kit/types/src/routes/post/[id]/$types";

// @ts-ignore
/** @type {import('./$types').PageLoad} */
export const load:PageLoad = async ({ params }) => {
    return {id : params.id}
}