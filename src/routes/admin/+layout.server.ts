import type {LayoutServerLoad} from "../../../.svelte-kit/types/src/routes/admin/$types";

// @ts-ignore
/** @type {import('./$types').LayoutServerLoad} */
export const load:LayoutServerLoad = async ({ cookies }) => {

    return { authorization : cookies.get('Authorization') }
}