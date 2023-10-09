<script lang="ts">
    export let footer:ListFooterProp[];
</script>

<div class="list-footer">
    {#each footer as item, idx}
        {#if item.href} <a class="href-icon" href={item.href}>{item.text}</a>
        {:else} <span>{item.text}</span>
        {/if}
        {#if idx !== footer.length - 1} <span class="footer-division">|</span>{/if}
    {/each}
</div>

<style>
    .list-footer {
        width: 100%;
        color: rgb(128, 128, 128);
        font-size: 0.7rem;
        font-weight: lighter;
    }
    .list-footer > span.footer-division{
        margin: 0 5px;
    }
</style>