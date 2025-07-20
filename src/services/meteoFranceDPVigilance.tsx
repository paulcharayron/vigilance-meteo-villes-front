export const getTextesDPVigilance = async (): Promise<Response> => {

    const http_options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        }
    };

    const endpoint = `${import.meta.env.VITE_DPVIGILANCE_API_BASE_URL}/textes-vigilance-encours`;

    return await fetch(endpoint, http_options);
}
