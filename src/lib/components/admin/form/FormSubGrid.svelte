<script lang="ts">
    export let columns:number = 1;
</script>

<div class="add-form-input-wrapper" style={`grid-template-columns: repeat(${columns}, 1fr);`}>
    <slot />
</div>

<style>
    .add-form-input-wrapper {
        width: 100%;
        display: grid;
        gap: 15px;
    }
</style>
