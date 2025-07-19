const DPVIGILANCE_API_BASE_URL = 'http://localhost:8000/api/v1/meteofr/dpvigilance';

export const getTextesDPVigilance = async (): Promise<Response> => {

    const http_options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        }
    };

    const endpoint = `${DPVIGILANCE_API_BASE_URL}/textes-vigilance-encours`;

    return await fetch(endpoint, http_options);
}
