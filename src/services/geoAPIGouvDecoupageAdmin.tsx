const DATA_GOUV_FR_DECOUPAGE_ADMINISTRATIF_API_BASE_URL = 'https://geo.api.gouv.fr';

const DATA_GOUV_FR_DECOUPAGE_ADMINISTRATIF_API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json'
  }
}

export const listCommunes = async (nomCommune: string): Promise<Response> => {

    const endpoint = `${DATA_GOUV_FR_DECOUPAGE_ADMINISTRATIF_API_BASE_URL}/communes?nom=${encodeURIComponent(nomCommune)}`;

    return await fetch(endpoint, DATA_GOUV_FR_DECOUPAGE_ADMINISTRATIF_API_OPTIONS);
}

export const getDepartement = async (codeDepartement: string): Promise<Response> => {

    const endpoint = `${DATA_GOUV_FR_DECOUPAGE_ADMINISTRATIF_API_BASE_URL}/departements/${encodeURIComponent(codeDepartement)}`;

    return await fetch(endpoint, DATA_GOUV_FR_DECOUPAGE_ADMINISTRATIF_API_OPTIONS);
}
