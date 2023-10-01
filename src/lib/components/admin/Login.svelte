<script lang="ts">
    import InputForm from "$lib/components/admin/form/InputForm.svelte";

    let id = "";
    let pw = "";

    function login() {
        fetch(`${import.meta.env.VITE_API_SERVER_URL}/public/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: id,
                password: pw
            }),
            credentials: "include"
        })
        .then((result) => result.json())
        .then((json) => {
            console.log(json);
            location.reload();
        })
        .catch((e: any) => {
            console.log(e);
            alert(e.message || "로그인 실패!")
        })
    }
</script>

<div class="login-wrapper">
    <InputForm title="아이디" bind:value={id} />
    <InputForm title="비밀번호" bind:value={pw} type="password"/>
    <button on:click={() => {login()}}>로그인</button>
</div>


<style>
    .login-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>