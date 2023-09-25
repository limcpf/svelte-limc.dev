<div class="before-btn">
    <div></div>
    <div></div>
</div>

<style>
    .before-btn {
        display: flex;
    }
    .before-btn > div:first-child {
        width: 30px;
        height: 30px;
        background-color: rgba(0,0,0,0.1);
    }
    .before-btn > div:nth-child(2) {
        width: 0px;
        height: 0px;
        border-bottom: 15px solid transparent;
        border-top: 15px solid transparent;
        border-left: 15px solid rgba(0,0,0,0.1);
        border-right: 15px solid transparent;
    }
</style>