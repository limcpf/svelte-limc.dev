<script lang="ts">
    export let title: string;
    export let value: string;
    export let options: {key:string, value:string}[] = [];
    export let required: boolean = false;
</script>

<div class="add-form-input">
    <span>{title}</span>
    <select
            class="add-form-input-style"
            bind:value={value}
            required={required}
    >
        {#if options.length > 0}
            <option selected value="">
                데이터를 선택해주세요.
            </option>
            {#each options as t}
                <option value={`${t.value}`}>{t.key}</option>
            {/each}
        {:else}
            <option selected value="">
                선행 데이터를 입력해주세요.
            </option>
        {/if}
    </select>
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
    .add-form-input > select.add-form-input-style {
        border-radius: .5em;
    }
</style>