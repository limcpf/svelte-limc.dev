<script lang="ts">
    export let title: string;
    export let value: string;
    export let required: boolean = false;
    export let disabled: boolean = false;
    export let rows: number = 20;
</script>

<div class="add-form-input">
    <span>{title}</span>
    <textarea
            class="add-form-input-style"
            bind:value={value}
            required={required}
            disabled={disabled}
            rows={rows}
    />
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