import type {PageLoad} from "../../../../.svelte-kit/types/src/routes/post/[id]/$types";
import type SeriesDetailDto from "$lib/domain/Series/SeriesDetail.dto";

// @ts-ignore
/** @type {import('./$types').PageLoad} */
export const load:PageLoad = async ({ params }) => {
    if(params?.id) {
        const req = await fetch(`http://localhost:8080/public/topic/${params.id}`)
        const json = await req.json()
        return json as SeriesDetailDto;
    } else {
        throw new Error("id가 올바르지 않습니다.");
    }
}