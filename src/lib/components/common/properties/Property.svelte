<script lang="ts">
    export let prop:PropertyProp;

    const {key, icon, href, value} = prop;
</script>

<div class="properties-row">
    <div class="properties-key">
        <svelte:component this={icon} />
        <span class="key-name">{key}</span>
    </div>
    <div class="properties-value">
        <div class="properties-topic">
            {#if href}
                <a class="href-icon" href={href}>{value}</a>
            {:else}
                <span>{value}</span>
            {/if}
        </div>
    </div>
</div>

<style>
    .properties-row {
        display: grid;
        padding: 3px;
        margin: 1px 0;
        grid-template-columns: repeat(12, 1fr);
        border-radius: 0.5em;
        border : 2px solid rgba(0,0,0,0);
    }

    .properties-row:hover{
        transition: 100ms ease-in-out;
        border: 2px solid lightgray;
    }

    .properties-key, .properties-value {
        padding: 0.2rem 0.7rem;
        font-size: 0.8rem;
    }

    .properties-key {
        display: flex;
        align-items: center;
        grid-column: 1/5;
        color: rgb(128, 128, 128);
        border-right: 0;
    }
    .properties-key > span.key-name {
        margin-left: 5px;
    }

    .properties-value {
        grid-column: 5/13;
    }

    @media (min-width: 640px) {
        .properties-key {
            grid-column: 1/3;
            border-right: 1px solid lightgrey;
        }
        .properties-value {
            grid-column: 3/13;
        }
        .properties-key, .properties-value {
            padding: 0.3rem 1rem;
            font-size: 0.9rem;
        }
    }
</style>