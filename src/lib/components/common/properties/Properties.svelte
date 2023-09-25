<script lang="ts">
    import Property from "$lib/components/common/properties/Property.svelte";

    export let title:string;
    export let properties: PropertyProp[];
    let showProperties = true;

</script>

<div class="properties">
    <div class="properties-title">
        <span>{title}</span>
        <div on:click={() => {showProperties = !showProperties}} class="properties-toggle-btn">
            {showProperties ? "접기" : "펼치기"}
        </div>
    </div>
    {#if showProperties}
        {#each properties as property}
            <Property prop={property} />
        {/each}
    {/if}
</div>

<style>
    .properties {
        width: 100%;
        max-width: 640px;
    }
    .properties-toggle-btn:hover {
        cursor: pointer;
        text-decoration: underline;
    }
    .properties-title {
        display: flex;
        justify-content: space-between;
        padding: 0.5em 5px;
        margin-bottom: 0.3em;
        border-bottom: 1px solid lightgray;
    }
    .properties-title > span{
        font-weight: bold;
    }
    @media (min-width: 640px) {
        .properties {
            max-width: 1024px;
        }
        .properties-toggle-btn {
            font-size: 0.9em;
        }
    }
</style>
