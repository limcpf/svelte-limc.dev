<script>
   const goTop = () => {
       window.scrollTo({ top: 0, behavior: "smooth" });
   }
</script>

<div class="ball" on:click={goTop} >⬆</div>

<style>
    .ball {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 15px;
        left: 15px;
        width: 50px;
        height: 50px;
        background-color: rgba(0,0,0,0.1);
        color: rgba(0,0,0,0.3);
        font-size: 1.5em;
        border-radius: 3em;
    }
</style>