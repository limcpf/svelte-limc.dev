export const load = async () => {
    const req = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/private/images`, {
        credentials: "include"
    });
    return { list : await req.json() as string[] };
}