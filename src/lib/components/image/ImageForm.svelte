<script lang="ts" >
    import InputForm from "$lib/components/admin/form/InputForm.svelte";

    let path: string = "";
    let files: any;
    async function submit(e:SubmitEvent) {
        e.preventDefault();
        const file  = new FormData();
        for(const f of files) {
            file.append('file', f);
        }
        try {
            const req = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/private/images${path ? "?path=" + path : ""}`, {
                method: "POST",
                body: file,
                credentials: "include"
            });

            if(req.ok) {
                const { successCnt, successImages, failCnt, failImages } = await req.json() as {
                    successCnt: number;
                    failCnt: number;
                    successImages: string[];
                    failImages: string[];
                }

                alert(`
                    성공 개수 : ${successCnt}
                    성공 파일들 : ${successImages}
                    실패 개수 : ${failCnt}
                    실패 파일들 : ${failImages}
                `);
            } else {
                throw new Error("이미지 업로드중 오류!")
            }
        }catch (e) {
            console.error(e);
            alert(e instanceof Error ? e.message : "알 수 없는 오류로 이미지 업로드가 실패하였습니다.");
        }



    }
</script>

<div class="add-form">
    <h2>이미지 업로드</h2>
    <form on:submit={submit} enctype="multipart/form-data">
        <InputForm title="경로" bind:value={path} required />
        <input type="file" name="file" id="file" accept="image/png" multiple bind:files>
        <button type="submit">업로드</button>
    </form>

</div>

<style>
    .add-form {
        width: 100%;
        max-width: 1024px;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding: 0 5em;
    }


    button {
        width: 100%;
        padding: 0.5em;
        margin-top: 1em;
        margin-bottom: .5em;
    }
</style>