// import * as jose from 'jose';

// const APP_ID = import.meta.env.VITE_PUBLIC_API_METEO_FRANCE_DPVIGILANCE_APP_ID;
// const METEOFRANCE_API_GENERATE_OAUTH_TOKEN_URL = 'https://portail-api.meteofrance.fr/token';
// const DPVIGILANCE_API_BASE_URL = 'https://public-api.meteofrance.fr/public/DPVigilance/v1';
const DPVIGILANCE_API_BASE_URL = 'http://localhost:8000/api/v1/meteofr/dpvigilance';

// let oAuthToken: string = '';

// const generateOAuthToken = async () => {
//     const http_options = {
//         method: 'POST',
//         headers: {
//             accept: '*/*',
//             authorization: `Basic ${APP_ID}`
//         },
//         body: JSON.stringify({grant_type: 'client_credentials'})
//     };
//     const response = await fetch(METEOFRANCE_API_GENERATE_OAUTH_TOKEN_URL, http_options);
    
//     if (!response.ok) {
//         console.error(`OAuth token re-generation failed!`);
//         return;
//     }

//     const data = response.json();
//     oAuthToken = data.access_token;
// }

// const isTokenExpired = (token: string): boolean => {
//     try {
//         const { exp } = jose.decodeJwt(token) as {
//             exp: number;
//         };
//         const expirationDatetimeInSeconds = exp * 1000;

//         return Date.now() >= expirationDatetimeInSeconds;
//     } catch {
//         return true;
//     }
// };

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
