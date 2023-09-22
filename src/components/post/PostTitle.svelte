<script lang="ts">
    import type PostDto from "$lib/domain/Post/Post.dto";
    import {getVisibleDateTime} from "$lib/util/time.util";

    export let post:PostDto

    const { id, title, createdAt, updatedAt} = post

    const postDate = getVisibleDateTime(createdAt, updatedAt);
</script>

<div>
    {id} <br />
    {title} <br />
    {postDate}
</div>

<style>

</style>