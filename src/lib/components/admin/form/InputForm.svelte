<script lang="ts">
    export let title: string;
    export let value: string;
    export let required: boolean = false;
    export let disabled: boolean = false;
    export let type: string = "text"
</script>

<div class="add-form-input">
    <span>{title}</span>
    {#if type === "password"}
        <input
                class="add-form-input-style"
                type="password"
                bind:value={value}
                required={required}
                disabled={disabled}
        />
        {:else}
        <input
                class="add-form-input-style"
                type="text"
                bind:value={value}
                required={required}
                disabled={disabled}
        />
        {/if}
</div>

<style>
    .add-form-input {
        width: 100%;
        text-align: left;
        display: flex;
        flex-direction: column;
        grid-column: span 1;
        margin-bottom: .3em;
    }
    .add-form-input > span {
        color: black;
        font-weight: lighter;
        font-size: 1.1em;
        margin-bottom: 5px;
    }
    .add-form-input > .add-form-input-style {
        border: 1px solid lightgray;
        padding: .8em;
        font-size: 1em;
    }
</style>