<script lang="ts">
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

<input type="text" id="id" bind:value={id} />
<input type="password" id="pw" bind:value={pw} />

<button on:click={() => {login()}}>dd</button>