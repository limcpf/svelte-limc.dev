<script lang="ts">
    import InputForm from "$lib/components/admin/form/InputForm.svelte";

    let id = "";
    let pw = "";

    async function login(e: SubmitEvent) {
        e.preventDefault();

        const url = `${import.meta.env.VITE_API_SERVER_URL}/public/login`;
        const body = {
            name: id,
            password: pw
        };

        const req = await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body),
            credentials: "include"
        });

        if(req.ok) {
            const loginDto = await req.json()
            if(loginDto.accessToken) location.reload();
            return;
        }

        console.log(e);
        alert(e.message || "로그인 실패!");
    }
</script>

<div class="login-wrapper">
    <form on:submit={login}>
        <InputForm title="아이디" bind:value={id} />
        <InputForm title="비밀번호" bind:value={pw} type="password"/>

        <button class="login-btn" type="submit">로그인</button>
    </form>
</div>


<style>
    form {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
    }
    .login-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .login-btn {
        width: 100%;
        padding: 1em;
        margin-top: 1em;
    }
</style>