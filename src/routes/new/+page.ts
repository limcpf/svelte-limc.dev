import type PostReadDto from "$lib/domain/Post/PostRead.dto";

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }: any) {
    const req = await fetch(`/api/public/post/${encodeURI("CloudFlare-Workers와-Backblaze-B2를-이용하여-무료-개인-이미지-저장소-만들기")}`)

    const postReadDto = await req.json() as PostReadDto;

    return {
        props: {
            postReadDto : postReadDto
        }
    };
}