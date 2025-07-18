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

export const TEST_DATA = `
    {
        "warning_type": "vigilance",
        "type_cdp": "cdp_textes",
        "version_vigilance": "V6",
        "version_cdp": "1.0.0",
        "domain_id": "FRA",
        "domain_name": "France",
        "update_time": "2025-07-06T08:00:23Z",
        "text_bloc_items": [
            {
            "domain_id": "FRA",
            "domain_name": "France",
            "bloc_title": "Bulletin de suivi national de la Vigilance",
            "bloc_id": "BULLETIN_NATIONAL",
            "bloc_items": [
                {
                "id": "NAT_SITUATION",
                "type_name": "Situation météorologique",
                "type_group": "SITUATION",
                "text_items": [
                    {
                    "type_code": "SITUATION_PAYS_SITUATION_MÉTÉOROLOGIQUE_NATIONAL",
                    "hazard_code": null,
                    "hazard_name": "tous aléas",
                    "term_items": [
                        {
                        "term_names": "J+J1",
                        "start_time": "2025-07-06T08:00:00Z",
                        "end_time": "2025-07-07T22:00:00Z",
                        "risk_name": "Orange",
                        "risk_code": "3",
                        "risk_color": "#f7a401",
                        "risk_level": 2,
                        "subdivision_text": [
                            {
                            "underline_text": "",
                            "bold_text": "Faits nouveaux :",
                            "text": [
                                "RAS"
                            ]
                            },
                            {
                            "underline_text": "",
                            "bold_text": "Situation générale :",
                            "text": [
                                "Seule la Corse conserve de fortes chaleurs."
                            ]
                            }
                        ]
                        }
                    ]
                    }
                ]
                },
                {
                "id": "NAT_SUIVI",
                "type_name": "Suivi par phénomène",
                "type_group": "SUIVI",
                "text_items": [
                    {
                    "type_code": "SUIVI_PAYS_SUIVI_PHENOMENE_NATIONAL_CA",
                    "hazard_code": "6",
                    "hazard_name": "Canicule",
                    "term_items": [
                        {
                        "term_names": "J+J1",
                        "start_time": "2025-07-06T08:00:00Z",
                        "end_time": "2025-07-07T22:00:00Z",
                        "risk_name": "Orange",
                        "risk_code": "3",
                        "risk_color": "#f7a401",
                        "risk_level": 2,
                        "subdivision_text": [
                            {
                            "underline_text": "",
                            "bold_text": "Qualification :",
                            "text": [
                                "Épisode caniculaire dont la durée, l'extension géographique et l'intensité nécessitent une vigilance particulière."
                            ]
                            },
                            {
                            "underline_text": "",
                            "bold_text": "Observations notables :",
                            "text": [
                                "Hier samedi, il a fait 35.5 °C à Perpignan (66), 35.8 °C à Narbonne (11), 37.1 °C à Béziers (34), 37.8 °C à Nîmes (30) , 37.5 °C à Istres (13), 35.2 °C à Hyeres (83), 31.3 °C à Cannes (06), 32.7 °C à Bastia (2B) et 37.1°C à Figari (2A)",
                                "Cette nuit de samedi à dimanche les départements méditerranéens ont eu des températures minimales encore chaudes comprises entre 22 et 25 °C."
                            ]
                            },
                            {
                            "underline_text": "",
                            "bold_text": "Évolution prévue :",
                            "text": [
                                "Baisse significative des températures atteignant enfin l'arc méditerranéen dimanche après-midi, gagnant la Corse lundi."
                            ]
                            }
                        ]
                        }
                    ]
                    }
                ]
                }
            ]
            },
            {
            "domain_id": "ZDF_PARIS",
            "domain_name": "Défense Paris",
            "bloc_title": "Bulletin de suivi zonal de la Vigilance",
            "bloc_id": "BULLETIN_ZONAL",
            "bloc_items": []
            },
            {
            "domain_id": "ZDF_NORD",
            "domain_name": "Défense Nord",
            "bloc_title": "Bulletin de suivi zonal de la Vigilance",
            "bloc_id": "BULLETIN_ZONAL",
            "bloc_items": []
            },
            {
            "domain_id": "ZDF_SUD_OUEST",
            "domain_name": "Défense Sud-Ouest",
            "bloc_title": "Bulletin de suivi zonal de la Vigilance",
            "bloc_id": "BULLETIN_ZONAL",
            "bloc_items": []
            },
            {
            "domain_id": "ZDF_SUD",
            "domain_name": "Défense Sud",
            "bloc_title": "Bulletin de suivi zonal de la Vigilance",
            "bloc_id": "BULLETIN_ZONAL",
            "bloc_items": [
                {
                "id": "ZON_SITUATION",
                "type_name": "Situation météorologique",
                "type_group": "SITUATION",
                "text_items": [
                    {
                    "type_code": "SITUATION_ZON_SITUATION_MÉTÉOROLOGIQUE",
                    "hazard_code": null,
                    "hazard_name": "tous aléas",
                    "term_items": [
                        {
                        "term_names": "J+J1",
                        "start_time": "2025-07-06T08:00:00Z",
                        "end_time": "2025-07-07T22:00:00Z",
                        "risk_name": "Orange",
                        "risk_code": "3",
                        "risk_color": "#f7a401",
                        "risk_level": 2,
                        "subdivision_text": [
                            {
                            "underline_text": "Arc méditerranéen et/ou Corse",
                            "bold_text": "",
                            "text": []
                            },
                            {
                            "underline_text": "",
                            "bold_text": "Faits nouveaux :",
                            "text": [
                                "Les départements des Pyrénées-Orientales, de l'Aude, de l'Hérault, du Gard et du Vaucluse sortent de la vigilance orange canicule et repassent en vigilance verte ce dimanche matin à 6h.",
                                "Les Bouches-du-Rhône sortent également de la vigilance orange canicule et repassent en viglance jaune ce dimanche matin à 6h.",
                                "",
                                "Sur ces départements, les températures minimales observées ce dimanche matin sont de l'ordre de 15 à 19°C dans l'intérieur, et de 21 à 25°C sur les zones littorales, proche-intrieur et vallée du Rhône. Après cette nuit de samedi à dimanche encore chaude, la baisse des températures attendue ce dimanche après-midi permet une baisse du niveau de vigilance sur ces départements."
                            ]
                            },
                            {
                            "underline_text": "",
                            "bold_text": "Situation générale :",
                            "text": [
                                "Les conditions anticycloniques régressent lentement vers le sud, et un changement de temps s'amorce aujourd'hui dimanche, avec l'arrivée d'une masse d'air progressivement plus frais. Ainsi, les températures s'orientent globalement à la baisse, mais restent toutefois encore chaudes sur le sud-est de la PACA, et surtout en Corse."
                            ]
                            }
                        ]
                        }
                    ]
                    }
                ]
                },
                {
                "id": "ZON_SUIVI",
                "type_name": "Suivi par phénomène",
                "type_group": "SUIVI",
                "text_items": [
                    {
                    "type_code": "SUIVI_DEP_SUIVI_PHÉNOMÈNE_CA",
                    "hazard_code": "6",
                    "hazard_name": "Canicule",
                    "term_items": [
                        {
                        "term_names": "J+J1",
                        "start_time": "2025-07-06T08:00:00Z",
                        "end_time": "2025-07-07T22:00:00Z",
                        "risk_name": "Orange",
                        "risk_code": "3",
                        "risk_color": "#f7a401",
                        "risk_level": 2,
                        "subdivision_text": [
                            {
                            "underline_text": "Arc méditerranéen et/ou Corse",
                            "bold_text": "",
                            "text": []
                            },
                            {
                            "underline_text": "",
                            "bold_text": "Qualification :",
                            "text": [
                                "Episode caniculaire dont la durée nécessite une vigilance particulière."
                            ]
                            }
                        ]
                        },
                        {
                        "term_names": "J+J1",
                        "start_time": "2025-07-06T08:00:00Z",
                        "end_time": "2025-07-07T22:00:00Z",
                        "risk_name": "Orange",
                        "risk_code": "3",
                        "risk_color": "#f7a401",
                        "risk_level": 2,
                        "subdivision_text": [
                            {
                            "underline_text": "",
                            "bold_text": "Départements en vigilance Orange Canicule :",
                            "text": [
                                "Corse-du-Sud (2A), Haute-Corse (2B)"
                            ]
                            },
                            {
                            "underline_text": "",
                            "bold_text": "Observations notables :",
                            "text": [
                                "Ce dimanche, les températures minimales sont le plus souvent voisines de 22 à 25°C sur le proche-littoral (23°C à Ajaccio et 25°C à Porto Vecchio), plus fraîches dans l'intérieur (15 à 19°C)."
                            ]
                            },
                            {
                            "underline_text": "",
                            "bold_text": "Évolution prévue :",
                            "text": [
                                "Les températures maximales attendues ce dimanche après-midi restent élevées, avec 31 à 35°C de manière généralisée, ponctuellement jusqu'à 36/37°C, notamment dans le Cortenais et sur le sud de la côte orientale.",
                                "",
                                "La nuit de dimanche à lundi reste assez chaude, avec encore 20 à 25°C sur le littoral notamment de la côte orientale, et des valeurs plus fraîches dans l'intérieur.",
                                "",
                                "Une baisse des températures est toutefois attendue pour la journée de demain lundi par l'ouest, permettant une baisse du niveau de vigilance sur la Corse du sud."
                            ]
                            }
                        ]
                        }
                    ]
                    }
                ]
                }
            ]
            },
            {
            "domain_id": "ZDF_OUEST",
            "domain_name": "Défense Ouest",
            "bloc_title": "Bulletin de suivi zonal de la Vigilance",
            "bloc_id": "BULLETIN_ZONAL",
            "bloc_items": []
            },
            {
            "domain_id": "ZDF_SUD_EST",
            "domain_name": "Défense Sud-Est",
            "bloc_title": "Bulletin de suivi zonal de la Vigilance",
            "bloc_id": "BULLETIN_ZONAL",
            "bloc_items": []
            },
            {
            "domain_id": "ZDF_EST",
            "domain_name": "Défense Est",
            "bloc_title": "Bulletin de suivi zonal de la Vigilance",
            "bloc_id": "BULLETIN_ZONAL",
            "bloc_items": []
            },
            {
            "domain_id": "10",
            "domain_name": "Aube",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Aube (10)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "11",
            "domain_name": "Aude",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Aude (11)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": [
                {
                "id": "DEP_SITUATION",
                "type_name": "Situation météorologique",
                "type_group": "SITUATION",
                "text_items": [
                    {
                    "type_code": "SITUATION_ZON_SITUATION_MÉTÉOROLOGIQUE",
                    "hazard_code": null,
                    "hazard_name": "tous aléas",
                    "term_items": [
                        {
                        "term_names": "J+J1",
                        "start_time": "2025-07-06T08:00:00Z",
                        "end_time": "2025-07-07T22:00:00Z",
                        "risk_name": "Orange",
                        "risk_code": "3",
                        "risk_color": "#f7a401",
                        "risk_level": 2,
                        "subdivision_text": [
                            {
                            "underline_text": "",
                            "bold_text": "Faits nouveaux :",
                            "text": [
                                "Les départements des Pyrénées-Orientales, de l'Aude, de l'Hérault, du Gard et du Vaucluse sortent de la vigilance orange canicule et repassent en vigilance verte ce dimanche matin à 6h.",
                                "Les Bouches-du-Rhône sortent également de la vigilance orange canicule et repassent en viglance jaune ce dimanche matin à 6h.",
                                "",
                                "Sur ces départements, les températures minimales observées ce dimanche matin sont de l'ordre de 15 à 19°C dans l'intérieur, et de 21 à 25°C sur les zones littorales, proche-intrieur et vallée du Rhône. Après cette nuit de samedi à dimanche encore chaude, la baisse des températures attendue ce dimanche après-midi permet une baisse du niveau de vigilance sur ces départements."
                            ]
                            },
                            {
                            "underline_text": "",
                            "bold_text": "Situation générale :",
                            "text": [
                                "Les conditions anticycloniques régressent lentement vers le sud, et un changement de temps s'amorce aujourd'hui dimanche, avec l'arrivée d'une masse d'air progressivement plus frais. Ainsi, les températures s'orientent globalement à la baisse, mais restent toutefois encore chaudes sur le sud-est de la PACA, et surtout en Corse."
                            ]
                            }
                        ]
                        }
                    ]
                    }
                ]
                }
            ]
            },
            {
            "domain_id": "12",
            "domain_name": "Aveyron",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Aveyron (12)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "13",
            "domain_name": "Bouches-du-Rhône",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Bouches-du-Rhône (13)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": [
                {
                "id": "DEP_SITUATION",
                "type_name": "Situation météorologique",
                "type_group": "SITUATION",
                "text_items": [
                    {
                    "type_code": "SITUATION_ZON_SITUATION_MÉTÉOROLOGIQUE",
                    "hazard_code": null,
                    "hazard_name": "tous aléas",
                    "term_items": [
                        {
                        "term_names": "J+J1",
                        "start_time": "2025-07-06T08:00:00Z",
                        "end_time": "2025-07-07T22:00:00Z",
                        "risk_name": "Orange",
                        "risk_code": "3",
                        "risk_color": "#f7a401",
                        "risk_level": 2,
                        "subdivision_text": [
                            {
                            "underline_text": "",
                            "bold_text": "Faits nouveaux :",
                            "text": [
                                "Les départements des Pyrénées-Orientales, de l'Aude, de l'Hérault, du Gard et du Vaucluse sortent de la vigilance orange canicule et repassent en vigilance verte ce dimanche matin à 6h.",
                                "Les Bouches-du-Rhône sortent également de la vigilance orange canicule et repassent en viglance jaune ce dimanche matin à 6h.",
                                "",
                                "Sur ces départements, les températures minimales observées ce dimanche matin sont de l'ordre de 15 à 19°C dans l'intérieur, et de 21 à 25°C sur les zones littorales, proche-intrieur et vallée du Rhône. Après cette nuit de samedi à dimanche encore chaude, la baisse des températures attendue ce dimanche après-midi permet une baisse du niveau de vigilance sur ces départements."
                            ]
                            },
                            {
                            "underline_text": "",
                            "bold_text": "Situation générale :",
                            "text": [
                                "Les conditions anticycloniques régressent lentement vers le sud, et un changement de temps s'amorce aujourd'hui dimanche, avec l'arrivée d'une masse d'air progressivement plus frais. Ainsi, les températures s'orientent globalement à la baisse, mais restent toutefois encore chaudes sur le sud-est de la PACA, et surtout en Corse."
                            ]
                            }
                        ]
                        }
                    ]
                    }
                ]
                }
            ]
            },
            {
            "domain_id": "14",
            "domain_name": "Calvados",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Calvados (14)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "15",
            "domain_name": "Cantal",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Cantal (15)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "16",
            "domain_name": "Charente",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Charente (16)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "17",
            "domain_name": "Charente-Maritime",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Charente-Maritime (17)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "18",
            "domain_name": "Cher",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Cher (18)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "19",
            "domain_name": "Corrèze",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Corrèze (19)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "21",
            "domain_name": "Côte-d'Or",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Côte-d'Or (21)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "22",
            "domain_name": "Côtes-d'Armor",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Côtes-d'Armor (22)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "23",
            "domain_name": "Creuse",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Creuse (23)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "24",
            "domain_name": "Dordogne",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Dordogne (24)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "25",
            "domain_name": "Doubs",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Doubs (25)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "26",
            "domain_name": "Drôme",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Drôme (26)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "27",
            "domain_name": "Eure",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Eure (27)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "28",
            "domain_name": "Eure-et-Loir",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Eure-et-Loir (28)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "29",
            "domain_name": "Finistère",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Finistère (29)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "30",
            "domain_name": "Gard",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Gard (30)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": [
                {
                "id": "DEP_SITUATION",
                "type_name": "Situation météorologique",
                "type_group": "SITUATION",
                "text_items": [
                    {
                    "type_code": "SITUATION_ZON_SITUATION_MÉTÉOROLOGIQUE",
                    "hazard_code": null,
                    "hazard_name": "tous aléas",
                    "term_items": [
                        {
                        "term_names": "J+J1",
                        "start_time": "2025-07-06T08:00:00Z",
                        "end_time": "2025-07-07T22:00:00Z",
                        "risk_name": "Orange",
                        "risk_code": "3",
                        "risk_color": "#f7a401",
                        "risk_level": 2,
                        "subdivision_text": [
                            {
                            "underline_text": "",
                            "bold_text": "Faits nouveaux :",
                            "text": [
                                "Les départements des Pyrénées-Orientales, de l'Aude, de l'Hérault, du Gard et du Vaucluse sortent de la vigilance orange canicule et repassent en vigilance verte ce dimanche matin à 6h.",
                                "Les Bouches-du-Rhône sortent également de la vigilance orange canicule et repassent en viglance jaune ce dimanche matin à 6h.",
                                "",
                                "Sur ces départements, les températures minimales observées ce dimanche matin sont de l'ordre de 15 à 19°C dans l'intérieur, et de 21 à 25°C sur les zones littorales, proche-intrieur et vallée du Rhône. Après cette nuit de samedi à dimanche encore chaude, la baisse des températures attendue ce dimanche après-midi permet une baisse du niveau de vigilance sur ces départements."
                            ]
                            },
                            {
                            "underline_text": "",
                            "bold_text": "Situation générale :",
                            "text": [
                                "Les conditions anticycloniques régressent lentement vers le sud, et un changement de temps s'amorce aujourd'hui dimanche, avec l'arrivée d'une masse d'air progressivement plus frais. Ainsi, les températures s'orientent globalement à la baisse, mais restent toutefois encore chaudes sur le sud-est de la PACA, et surtout en Corse."
                            ]
                            }
                        ]
                        }
                    ]
                    }
                ]
                }
            ]
            },
            {
            "domain_id": "31",
            "domain_name": "Haute-Garonne",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Haute-Garonne (31)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "32",
            "domain_name": "Gers",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Gers (32)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "33",
            "domain_name": "Gironde",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Gironde (33)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "34",
            "domain_name": "Hérault",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Hérault (34)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": [
                {
                "id": "DEP_SITUATION",
                "type_name": "Situation météorologique",
                "type_group": "SITUATION",
                "text_items": [
                    {
                    "type_code": "SITUATION_ZON_SITUATION_MÉTÉOROLOGIQUE",
                    "hazard_code": null,
                    "hazard_name": "tous aléas",
                    "term_items": [
                        {
                        "term_names": "J+J1",
                        "start_time": "2025-07-06T08:00:00Z",
                        "end_time": "2025-07-07T22:00:00Z",
                        "risk_name": "Orange",
                        "risk_code": "3",
                        "risk_color": "#f7a401",
                        "risk_level": 2,
                        "subdivision_text": [
                            {
                            "underline_text": "",
                            "bold_text": "Faits nouveaux :",
                            "text": [
                                "Les départements des Pyrénées-Orientales, de l'Aude, de l'Hérault, du Gard et du Vaucluse sortent de la vigilance orange canicule et repassent en vigilance verte ce dimanche matin à 6h.",
                                "Les Bouches-du-Rhône sortent également de la vigilance orange canicule et repassent en viglance jaune ce dimanche matin à 6h.",
                                "",
                                "Sur ces départements, les températures minimales observées ce dimanche matin sont de l'ordre de 15 à 19°C dans l'intérieur, et de 21 à 25°C sur les zones littorales, proche-intrieur et vallée du Rhône. Après cette nuit de samedi à dimanche encore chaude, la baisse des températures attendue ce dimanche après-midi permet une baisse du niveau de vigilance sur ces départements."
                            ]
                            },
                            {
                            "underline_text": "",
                            "bold_text": "Situation générale :",
                            "text": [
                                "Les conditions anticycloniques régressent lentement vers le sud, et un changement de temps s'amorce aujourd'hui dimanche, avec l'arrivée d'une masse d'air progressivement plus frais. Ainsi, les températures s'orientent globalement à la baisse, mais restent toutefois encore chaudes sur le sud-est de la PACA, et surtout en Corse."
                            ]
                            }
                        ]
                        }
                    ]
                    }
                ]
                }
            ]
            },
            {
            "domain_id": "35",
            "domain_name": "Ille-et-Vilaine",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Ille-et-Vilaine (35)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "36",
            "domain_name": "Indre",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Indre (36)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "37",
            "domain_name": "Indre-et-Loire",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Indre-et-Loire (37)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "38",
            "domain_name": "Isère",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Isère (38)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "39",
            "domain_name": "Jura",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Jura (39)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "40",
            "domain_name": "Landes",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Landes (40)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "41",
            "domain_name": "Loir-et-Cher",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Loir-et-Cher (41)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "42",
            "domain_name": "Loire",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Loire (42)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "43",
            "domain_name": "Haute-Loire",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Haute-Loire (43)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "44",
            "domain_name": "Loire-Atlantique",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Loire-Atlantique (44)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "45",
            "domain_name": "Loiret",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Loiret (45)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "46",
            "domain_name": "Lot",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Lot (46)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "47",
            "domain_name": "Lot-et-Garonne",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Lot-et-Garonne (47)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "48",
            "domain_name": "Lozère",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Lozère (48)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": [
                {
                "id": "DEP_SITUATION",
                "type_name": "Situation météorologique",
                "type_group": "SITUATION",
                "text_items": [
                    {
                    "type_code": "SITUATION_ZON_SITUATION_MÉTÉOROLOGIQUE",
                    "hazard_code": null,
                    "hazard_name": "tous aléas",
                    "term_items": [
                        {
                        "term_names": "J+J1",
                        "start_time": "2025-07-06T08:00:00Z",
                        "end_time": "2025-07-07T22:00:00Z",
                        "risk_name": "Orange",
                        "risk_code": "3",
                        "risk_color": "#f7a401",
                        "risk_level": 2,
                        "subdivision_text": [
                            {
                            "underline_text": "",
                            "bold_text": "Faits nouveaux :",
                            "text": [
                                "Les départements des Pyrénées-Orientales, de l'Aude, de l'Hérault, du Gard et du Vaucluse sortent de la vigilance orange canicule et repassent en vigilance verte ce dimanche matin à 6h.",
                                "Les Bouches-du-Rhône sortent également de la vigilance orange canicule et repassent en viglance jaune ce dimanche matin à 6h.",
                                "",
                                "Sur ces départements, les températures minimales observées ce dimanche matin sont de l'ordre de 15 à 19°C dans l'intérieur, et de 21 à 25°C sur les zones littorales, proche-intrieur et vallée du Rhône. Après cette nuit de samedi à dimanche encore chaude, la baisse des températures attendue ce dimanche après-midi permet une baisse du niveau de vigilance sur ces départements."
                            ]
                            },
                            {
                            "underline_text": "",
                            "bold_text": "Situation générale :",
                            "text": [
                                "Les conditions anticycloniques régressent lentement vers le sud, et un changement de temps s'amorce aujourd'hui dimanche, avec l'arrivée d'une masse d'air progressivement plus frais. Ainsi, les températures s'orientent globalement à la baisse, mais restent toutefois encore chaudes sur le sud-est de la PACA, et surtout en Corse."
                            ]
                            }
                        ]
                        }
                    ]
                    }
                ]
                }
            ]
            },
            {
            "domain_id": "49",
            "domain_name": "Maine-et-Loire",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Maine-et-Loire (49)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "50",
            "domain_name": "Manche",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Manche (50)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "51",
            "domain_name": "Marne",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Marne (51)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "52",
            "domain_name": "Haute-Marne",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Haute-Marne (52)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "53",
            "domain_name": "Mayenne",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Mayenne (53)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "54",
            "domain_name": "Meurthe-et-Moselle",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Meurthe-et-Moselle (54)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "55",
            "domain_name": "Meuse",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Meuse (55)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "56",
            "domain_name": "Morbihan",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Morbihan (56)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "57",
            "domain_name": "Moselle",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Moselle (57)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "58",
            "domain_name": "Nièvre",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Nièvre (58)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "59",
            "domain_name": "Nord",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Nord (59)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "60",
            "domain_name": "Oise",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Oise (60)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "61",
            "domain_name": "Orne",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Orne (61)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "62",
            "domain_name": "Pas-de-Calais",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Pas-de-Calais (62)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "63",
            "domain_name": "Puy-de-Dôme",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Puy-de-Dôme (63)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "64",
            "domain_name": "Pyrénées-Atlantiques",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Pyrénées-Atlantiques (64)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "65",
            "domain_name": "Hautes-Pyrénées",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Hautes-Pyrénées (65)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "66",
            "domain_name": "Pyrénées-Orientales",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Pyrénées-Orientales (66)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": [
                {
                "id": "DEP_SITUATION",
                "type_name": "Situation météorologique",
                "type_group": "SITUATION",
                "text_items": [
                    {
                    "type_code": "SITUATION_ZON_SITUATION_MÉTÉOROLOGIQUE",
                    "hazard_code": null,
                    "hazard_name": "tous aléas",
                    "term_items": [
                        {
                        "term_names": "J+J1",
                        "start_time": "2025-07-06T08:00:00Z",
                        "end_time": "2025-07-07T22:00:00Z",
                        "risk_name": "Orange",
                        "risk_code": "3",
                        "risk_color": "#f7a401",
                        "risk_level": 2,
                        "subdivision_text": [
                            {
                            "underline_text": "",
                            "bold_text": "Faits nouveaux :",
                            "text": [
                                "Les départements des Pyrénées-Orientales, de l'Aude, de l'Hérault, du Gard et du Vaucluse sortent de la vigilance orange canicule et repassent en vigilance verte ce dimanche matin à 6h.",
                                "Les Bouches-du-Rhône sortent également de la vigilance orange canicule et repassent en viglance jaune ce dimanche matin à 6h.",
                                "",
                                "Sur ces départements, les températures minimales observées ce dimanche matin sont de l'ordre de 15 à 19°C dans l'intérieur, et de 21 à 25°C sur les zones littorales, proche-intrieur et vallée du Rhône. Après cette nuit de samedi à dimanche encore chaude, la baisse des températures attendue ce dimanche après-midi permet une baisse du niveau de vigilance sur ces départements."
                            ]
                            },
                            {
                            "underline_text": "",
                            "bold_text": "Situation générale :",
                            "text": [
                                "Les conditions anticycloniques régressent lentement vers le sud, et un changement de temps s'amorce aujourd'hui dimanche, avec l'arrivée d'une masse d'air progressivement plus frais. Ainsi, les températures s'orientent globalement à la baisse, mais restent toutefois encore chaudes sur le sud-est de la PACA, et surtout en Corse."
                            ]
                            }
                        ]
                        }
                    ]
                    }
                ]
                }
            ]
            },
            {
            "domain_id": "67",
            "domain_name": "Bas-Rhin",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Bas-Rhin (67)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "68",
            "domain_name": "Haut-Rhin",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Haut-Rhin (68)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "69",
            "domain_name": "Rhône",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Rhône (69)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "70",
            "domain_name": "Haute-Saône",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Haute-Saône (70)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "71",
            "domain_name": "Saône-et-Loire",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Saône-et-Loire (71)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "72",
            "domain_name": "Sarthe",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Sarthe (72)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "73",
            "domain_name": "Savoie",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Savoie (73)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "74",
            "domain_name": "Haute-Savoie",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Haute-Savoie (74)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "02",
            "domain_name": "Aisne",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Aisne (02)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "03",
            "domain_name": "Allier",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Allier (03)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "04",
            "domain_name": "Alpes-de-Haute-Provence",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Alpes-de-Haute-Provence (04)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": [
                {
                "id": "DEP_SITUATION",
                "type_name": "Situation météorologique",
                "type_group": "SITUATION",
                "text_items": [
                    {
                    "type_code": "SITUATION_ZON_SITUATION_MÉTÉOROLOGIQUE",
                    "hazard_code": null,
                    "hazard_name": "tous aléas",
                    "term_items": [
                        {
                        "term_names": "J+J1",
                        "start_time": "2025-07-06T08:00:00Z",
                        "end_time": "2025-07-07T22:00:00Z",
                        "risk_name": "Orange",
                        "risk_code": "3",
                        "risk_color": "#f7a401",
                        "risk_level": 2,
                        "subdivision_text": [
                            {
                            "underline_text": "",
                            "bold_text": "Faits nouveaux :",
                            "text": [
                                "Les départements des Pyrénées-Orientales, de l'Aude, de l'Hérault, du Gard et du Vaucluse sortent de la vigilance orange canicule et repassent en vigilance verte ce dimanche matin à 6h.",
                                "Les Bouches-du-Rhône sortent également de la vigilance orange canicule et repassent en viglance jaune ce dimanche matin à 6h.",
                                "",
                                "Sur ces départements, les températures minimales observées ce dimanche matin sont de l'ordre de 15 à 19°C dans l'intérieur, et de 21 à 25°C sur les zones littorales, proche-intrieur et vallée du Rhône. Après cette nuit de samedi à dimanche encore chaude, la baisse des températures attendue ce dimanche après-midi permet une baisse du niveau de vigilance sur ces départements."
                            ]
                            },
                            {
                            "underline_text": "",
                            "bold_text": "Situation générale :",
                            "text": [
                                "Les conditions anticycloniques régressent lentement vers le sud, et un changement de temps s'amorce aujourd'hui dimanche, avec l'arrivée d'une masse d'air progressivement plus frais. Ainsi, les températures s'orientent globalement à la baisse, mais restent toutefois encore chaudes sur le sud-est de la PACA, et surtout en Corse."
                            ]
                            }
                        ]
                        }
                    ]
                    }
                ]
                }
            ]
            },
            {
            "domain_id": "75",
            "domain_name": "Paris",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Paris (75)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "76",
            "domain_name": "Seine-Maritime",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Seine-Maritime (76)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "77",
            "domain_name": "Seine-et-Marne",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Seine-et-Marne (77)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "78",
            "domain_name": "Yvelines",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Yvelines (78)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "79",
            "domain_name": "Deux-Sèvres",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Deux-Sèvres (79)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "80",
            "domain_name": "Somme",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Somme (80)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "81",
            "domain_name": "Tarn",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Tarn (81)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "82",
            "domain_name": "Tarn-et-Garonne",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Tarn-et-Garonne (82)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "83",
            "domain_name": "Var",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Var (83)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": [
                {
                "id": "DEP_SITUATION",
                "type_name": "Situation météorologique",
                "type_group": "SITUATION",
                "text_items": [
                    {
                    "type_code": "SITUATION_ZON_SITUATION_MÉTÉOROLOGIQUE",
                    "hazard_code": null,
                    "hazard_name": "tous aléas",
                    "term_items": [
                        {
                        "term_names": "J+J1",
                        "start_time": "2025-07-06T08:00:00Z",
                        "end_time": "2025-07-07T22:00:00Z",
                        "risk_name": "Orange",
                        "risk_code": "3",
                        "risk_color": "#f7a401",
                        "risk_level": 2,
                        "subdivision_text": [
                            {
                            "underline_text": "",
                            "bold_text": "Faits nouveaux :",
                            "text": [
                                "Les départements des Pyrénées-Orientales, de l'Aude, de l'Hérault, du Gard et du Vaucluse sortent de la vigilance orange canicule et repassent en vigilance verte ce dimanche matin à 6h.",
                                "Les Bouches-du-Rhône sortent également de la vigilance orange canicule et repassent en viglance jaune ce dimanche matin à 6h.",
                                "",
                                "Sur ces départements, les températures minimales observées ce dimanche matin sont de l'ordre de 15 à 19°C dans l'intérieur, et de 21 à 25°C sur les zones littorales, proche-intrieur et vallée du Rhône. Après cette nuit de samedi à dimanche encore chaude, la baisse des températures attendue ce dimanche après-midi permet une baisse du niveau de vigilance sur ces départements."
                            ]
                            },
                            {
                            "underline_text": "",
                            "bold_text": "Situation générale :",
                            "text": [
                                "Les conditions anticycloniques régressent lentement vers le sud, et un changement de temps s'amorce aujourd'hui dimanche, avec l'arrivée d'une masse d'air progressivement plus frais. Ainsi, les températures s'orientent globalement à la baisse, mais restent toutefois encore chaudes sur le sud-est de la PACA, et surtout en Corse."
                            ]
                            }
                        ]
                        }
                    ]
                    }
                ]
                }
            ]
            },
            {
            "domain_id": "84",
            "domain_name": "Vaucluse",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Vaucluse (84)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": [
                {
                "id": "DEP_SITUATION",
                "type_name": "Situation météorologique",
                "type_group": "SITUATION",
                "text_items": [
                    {
                    "type_code": "SITUATION_ZON_SITUATION_MÉTÉOROLOGIQUE",
                    "hazard_code": null,
                    "hazard_name": "tous aléas",
                    "term_items": [
                        {
                        "term_names": "J+J1",
                        "start_time": "2025-07-06T08:00:00Z",
                        "end_time": "2025-07-07T22:00:00Z",
                        "risk_name": "Orange",
                        "risk_code": "3",
                        "risk_color": "#f7a401",
                        "risk_level": 2,
                        "subdivision_text": [
                            {
                            "underline_text": "",
                            "bold_text": "Faits nouveaux :",
                            "text": [
                                "Les départements des Pyrénées-Orientales, de l'Aude, de l'Hérault, du Gard et du Vaucluse sortent de la vigilance orange canicule et repassent en vigilance verte ce dimanche matin à 6h.",
                                "Les Bouches-du-Rhône sortent également de la vigilance orange canicule et repassent en viglance jaune ce dimanche matin à 6h.",
                                "",
                                "Sur ces départements, les températures minimales observées ce dimanche matin sont de l'ordre de 15 à 19°C dans l'intérieur, et de 21 à 25°C sur les zones littorales, proche-intrieur et vallée du Rhône. Après cette nuit de samedi à dimanche encore chaude, la baisse des températures attendue ce dimanche après-midi permet une baisse du niveau de vigilance sur ces départements."
                            ]
                            },
                            {
                            "underline_text": "",
                            "bold_text": "Situation générale :",
                            "text": [
                                "Les conditions anticycloniques régressent lentement vers le sud, et un changement de temps s'amorce aujourd'hui dimanche, avec l'arrivée d'une masse d'air progressivement plus frais. Ainsi, les températures s'orientent globalement à la baisse, mais restent toutefois encore chaudes sur le sud-est de la PACA, et surtout en Corse."
                            ]
                            }
                        ]
                        }
                    ]
                    }
                ]
                }
            ]
            },
            {
            "domain_id": "85",
            "domain_name": "Vendée",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Vendée (85)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "86",
            "domain_name": "Vienne",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Vienne (86)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "87",
            "domain_name": "Haute-Vienne",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Haute-Vienne (87)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "88",
            "domain_name": "Vosges",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Vosges (88)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "89",
            "domain_name": "Yonne",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Yonne (89)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "90",
            "domain_name": "Territoire de Belfort",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Territoire de Belfort (90)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "91",
            "domain_name": "Essonne",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Essonne (91)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "05",
            "domain_name": "Hautes-Alpes",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Hautes-Alpes (05)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": [
                {
                "id": "DEP_SITUATION",
                "type_name": "Situation météorologique",
                "type_group": "SITUATION",
                "text_items": [
                    {
                    "type_code": "SITUATION_ZON_SITUATION_MÉTÉOROLOGIQUE",
                    "hazard_code": null,
                    "hazard_name": "tous aléas",
                    "term_items": [
                        {
                        "term_names": "J+J1",
                        "start_time": "2025-07-06T08:00:00Z",
                        "end_time": "2025-07-07T22:00:00Z",
                        "risk_name": "Orange",
                        "risk_code": "3",
                        "risk_color": "#f7a401",
                        "risk_level": 2,
                        "subdivision_text": [
                            {
                            "underline_text": "",
                            "bold_text": "Faits nouveaux :",
                            "text": [
                                "Les départements des Pyrénées-Orientales, de l'Aude, de l'Hérault, du Gard et du Vaucluse sortent de la vigilance orange canicule et repassent en vigilance verte ce dimanche matin à 6h.",
                                "Les Bouches-du-Rhône sortent également de la vigilance orange canicule et repassent en viglance jaune ce dimanche matin à 6h.",
                                "",
                                "Sur ces départements, les températures minimales observées ce dimanche matin sont de l'ordre de 15 à 19°C dans l'intérieur, et de 21 à 25°C sur les zones littorales, proche-intrieur et vallée du Rhône. Après cette nuit de samedi à dimanche encore chaude, la baisse des températures attendue ce dimanche après-midi permet une baisse du niveau de vigilance sur ces départements."
                            ]
                            },
                            {
                            "underline_text": "",
                            "bold_text": "Situation générale :",
                            "text": [
                                "Les conditions anticycloniques régressent lentement vers le sud, et un changement de temps s'amorce aujourd'hui dimanche, avec l'arrivée d'une masse d'air progressivement plus frais. Ainsi, les températures s'orientent globalement à la baisse, mais restent toutefois encore chaudes sur le sud-est de la PACA, et surtout en Corse."
                            ]
                            }
                        ]
                        }
                    ]
                    }
                ]
                }
            ]
            },
            {
            "domain_id": "06",
            "domain_name": "Alpes-Maritimes",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Alpes-Maritimes (06)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": [
                {
                "id": "DEP_SITUATION",
                "type_name": "Situation météorologique",
                "type_group": "SITUATION",
                "text_items": [
                    {
                    "type_code": "SITUATION_ZON_SITUATION_MÉTÉOROLOGIQUE",
                    "hazard_code": null,
                    "hazard_name": "tous aléas",
                    "term_items": [
                        {
                        "term_names": "J+J1",
                        "start_time": "2025-07-06T08:00:00Z",
                        "end_time": "2025-07-07T22:00:00Z",
                        "risk_name": "Orange",
                        "risk_code": "3",
                        "risk_color": "#f7a401",
                        "risk_level": 2,
                        "subdivision_text": [
                            {
                            "underline_text": "",
                            "bold_text": "Faits nouveaux :",
                            "text": [
                                "Les départements des Pyrénées-Orientales, de l'Aude, de l'Hérault, du Gard et du Vaucluse sortent de la vigilance orange canicule et repassent en vigilance verte ce dimanche matin à 6h.",
                                "Les Bouches-du-Rhône sortent également de la vigilance orange canicule et repassent en viglance jaune ce dimanche matin à 6h.",
                                "",
                                "Sur ces départements, les températures minimales observées ce dimanche matin sont de l'ordre de 15 à 19°C dans l'intérieur, et de 21 à 25°C sur les zones littorales, proche-intrieur et vallée du Rhône. Après cette nuit de samedi à dimanche encore chaude, la baisse des températures attendue ce dimanche après-midi permet une baisse du niveau de vigilance sur ces départements."
                            ]
                            },
                            {
                            "underline_text": "",
                            "bold_text": "Situation générale :",
                            "text": [
                                "Les conditions anticycloniques régressent lentement vers le sud, et un changement de temps s'amorce aujourd'hui dimanche, avec l'arrivée d'une masse d'air progressivement plus frais. Ainsi, les températures s'orientent globalement à la baisse, mais restent toutefois encore chaudes sur le sud-est de la PACA, et surtout en Corse."
                            ]
                            }
                        ]
                        }
                    ]
                    }
                ]
                }
            ]
            },
            {
            "domain_id": "07",
            "domain_name": "Ardèche",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Ardèche (07)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "08",
            "domain_name": "Ardennes",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Ardennes (08)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "09",
            "domain_name": "Ariège",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Ariège (09)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "2A",
            "domain_name": "Corse-du-Sud",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Corse-du-Sud (2A)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": [
                {
                "id": "DEP_SITUATION",
                "type_name": "Situation météorologique",
                "type_group": "SITUATION",
                "text_items": [
                    {
                    "type_code": "SITUATION_ZON_SITUATION_MÉTÉOROLOGIQUE",
                    "hazard_code": null,
                    "hazard_name": "tous aléas",
                    "term_items": [
                        {
                        "term_names": "J+J1",
                        "start_time": "2025-07-06T08:00:00Z",
                        "end_time": "2025-07-07T22:00:00Z",
                        "risk_name": "Orange",
                        "risk_code": "3",
                        "risk_color": "#f7a401",
                        "risk_level": 2,
                        "subdivision_text": [
                            {
                            "underline_text": "",
                            "bold_text": "Faits nouveaux :",
                            "text": [
                                "Les départements des Pyrénées-Orientales, de l'Aude, de l'Hérault, du Gard et du Vaucluse sortent de la vigilance orange canicule et repassent en vigilance verte ce dimanche matin à 6h.",
                                "Les Bouches-du-Rhône sortent également de la vigilance orange canicule et repassent en viglance jaune ce dimanche matin à 6h.",
                                "",
                                "Sur ces départements, les températures minimales observées ce dimanche matin sont de l'ordre de 15 à 19°C dans l'intérieur, et de 21 à 25°C sur les zones littorales, proche-intrieur et vallée du Rhône. Après cette nuit de samedi à dimanche encore chaude, la baisse des températures attendue ce dimanche après-midi permet une baisse du niveau de vigilance sur ces départements."
                            ]
                            },
                            {
                            "underline_text": "",
                            "bold_text": "Situation générale :",
                            "text": [
                                "Les conditions anticycloniques régressent lentement vers le sud, et un changement de temps s'amorce aujourd'hui dimanche, avec l'arrivée d'une masse d'air progressivement plus frais. Ainsi, les températures s'orientent globalement à la baisse, mais restent toutefois encore chaudes sur le sud-est de la PACA, et surtout en Corse."
                            ]
                            }
                        ]
                        }
                    ]
                    }
                ]
                },
                {
                "id": "DEP_SUIVI",
                "type_name": "Suivi par phénomène",
                "type_group": "SUIVI",
                "text_items": [
                    {
                    "type_code": "SUIVI_DEP_SUIVI_PHÉNOMÈNE_CA",
                    "hazard_code": "6",
                    "hazard_name": "Canicule",
                    "term_items": [
                        {
                        "term_names": "J+J1",
                        "start_time": "2025-07-06T08:00:00Z",
                        "end_time": "2025-07-07T22:00:00Z",
                        "risk_name": "Orange",
                        "risk_code": "3",
                        "risk_color": "#f7a401",
                        "risk_level": 2,
                        "subdivision_text": [
                            {
                            "underline_text": "",
                            "bold_text": "Qualification :",
                            "text": [
                                "Episode caniculaire dont la durée nécessite une vigilance particulière."
                            ]
                            }
                        ]
                        },
                        {
                        "term_names": "J+J1",
                        "start_time": "2025-07-06T08:00:00Z",
                        "end_time": "2025-07-07T22:00:00Z",
                        "risk_name": "Orange",
                        "risk_code": "3",
                        "risk_color": "#f7a401",
                        "risk_level": 2,
                        "subdivision_text": [
                            {
                            "underline_text": "",
                            "bold_text": "Observations notables :",
                            "text": [
                                "Ce dimanche, les températures minimales sont le plus souvent voisines de 22 à 25°C sur le proche-littoral (23°C à Ajaccio et 25°C à Porto Vecchio), plus fraîches dans l'intérieur (15 à 19°C)."
                            ]
                            },
                            {
                            "underline_text": "",
                            "bold_text": "Évolution prévue :",
                            "text": [
                                "Les températures maximales attendues ce dimanche après-midi restent élevées, avec 31 à 35°C de manière généralisée, ponctuellement jusqu'à 36/37°C, notamment dans le Cortenais et sur le sud de la côte orientale.",
                                "",
                                "La nuit de dimanche à lundi reste assez chaude, avec encore 20 à 25°C sur le littoral notamment de la côte orientale, et des valeurs plus fraîches dans l'intérieur.",
                                "",
                                "Une baisse des températures est toutefois attendue pour la journée de demain lundi par l'ouest, permettant une baisse du niveau de vigilance sur la Corse du sud."
                            ]
                            }
                        ]
                        }
                    ]
                    }
                ]
                }
            ]
            },
            {
            "domain_id": "2B",
            "domain_name": "Haute-Corse",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Haute-Corse (2B)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": [
                {
                "id": "DEP_SITUATION",
                "type_name": "Situation météorologique",
                "type_group": "SITUATION",
                "text_items": [
                    {
                    "type_code": "SITUATION_ZON_SITUATION_MÉTÉOROLOGIQUE",
                    "hazard_code": null,
                    "hazard_name": "tous aléas",
                    "term_items": [
                        {
                        "term_names": "J+J1",
                        "start_time": "2025-07-06T08:00:00Z",
                        "end_time": "2025-07-07T22:00:00Z",
                        "risk_name": "Orange",
                        "risk_code": "3",
                        "risk_color": "#f7a401",
                        "risk_level": 2,
                        "subdivision_text": [
                            {
                            "underline_text": "",
                            "bold_text": "Faits nouveaux :",
                            "text": [
                                "Les départements des Pyrénées-Orientales, de l'Aude, de l'Hérault, du Gard et du Vaucluse sortent de la vigilance orange canicule et repassent en vigilance verte ce dimanche matin à 6h.",
                                "Les Bouches-du-Rhône sortent également de la vigilance orange canicule et repassent en viglance jaune ce dimanche matin à 6h.",
                                "",
                                "Sur ces départements, les températures minimales observées ce dimanche matin sont de l'ordre de 15 à 19°C dans l'intérieur, et de 21 à 25°C sur les zones littorales, proche-intrieur et vallée du Rhône. Après cette nuit de samedi à dimanche encore chaude, la baisse des températures attendue ce dimanche après-midi permet une baisse du niveau de vigilance sur ces départements."
                            ]
                            },
                            {
                            "underline_text": "",
                            "bold_text": "Situation générale :",
                            "text": [
                                "Les conditions anticycloniques régressent lentement vers le sud, et un changement de temps s'amorce aujourd'hui dimanche, avec l'arrivée d'une masse d'air progressivement plus frais. Ainsi, les températures s'orientent globalement à la baisse, mais restent toutefois encore chaudes sur le sud-est de la PACA, et surtout en Corse."
                            ]
                            }
                        ]
                        }
                    ]
                    }
                ]
                },
                {
                "id": "DEP_SUIVI",
                "type_name": "Suivi par phénomène",
                "type_group": "SUIVI",
                "text_items": [
                    {
                    "type_code": "SUIVI_DEP_SUIVI_PHÉNOMÈNE_CA",
                    "hazard_code": "6",
                    "hazard_name": "Canicule",
                    "term_items": [
                        {
                        "term_names": "J+J1",
                        "start_time": "2025-07-06T08:00:00Z",
                        "end_time": "2025-07-07T22:00:00Z",
                        "risk_name": "Orange",
                        "risk_code": "3",
                        "risk_color": "#f7a401",
                        "risk_level": 2,
                        "subdivision_text": [
                            {
                            "underline_text": "",
                            "bold_text": "Qualification :",
                            "text": [
                                "Episode caniculaire dont la durée nécessite une vigilance particulière."
                            ]
                            }
                        ]
                        },
                        {
                        "term_names": "J+J1",
                        "start_time": "2025-07-06T08:00:00Z",
                        "end_time": "2025-07-07T22:00:00Z",
                        "risk_name": "Orange",
                        "risk_code": "3",
                        "risk_color": "#f7a401",
                        "risk_level": 2,
                        "subdivision_text": [
                            {
                            "underline_text": "",
                            "bold_text": "Observations notables :",
                            "text": [
                                "Ce dimanche, les températures minimales sont le plus souvent voisines de 22 à 25°C sur le proche-littoral (23°C à Ajaccio et 25°C à Porto Vecchio), plus fraîches dans l'intérieur (15 à 19°C)."
                            ]
                            },
                            {
                            "underline_text": "",
                            "bold_text": "Évolution prévue :",
                            "text": [
                                "Les températures maximales attendues ce dimanche après-midi restent élevées, avec 31 à 35°C de manière généralisée, ponctuellement jusqu'à 36/37°C, notamment dans le Cortenais et sur le sud de la côte orientale.",
                                "",
                                "La nuit de dimanche à lundi reste assez chaude, avec encore 20 à 25°C sur le littoral notamment de la côte orientale, et des valeurs plus fraîches dans l'intérieur.",
                                "",
                                "Une baisse des températures est toutefois attendue pour la journée de demain lundi par l'ouest, permettant une baisse du niveau de vigilance sur la Corse du sud."
                            ]
                            }
                        ]
                        }
                    ]
                    }
                ]
                }
            ]
            },
            {
            "domain_id": "92",
            "domain_name": "Hauts-de-Seine",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Hauts-de-Seine (92)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "93",
            "domain_name": "Seine-Saint-Denis",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Seine-Saint-Denis (93)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "94",
            "domain_name": "Val-de-Marne",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Val-de-Marne (94)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "95",
            "domain_name": "Val-d'Oise",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Val-d'Oise (95)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            },
            {
            "domain_id": "99",
            "domain_name": "Andorre",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Andorre (99)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": [
                {
                "id": "DEP_SITUATION",
                "type_name": "Situation météorologique",
                "type_group": "SITUATION",
                "text_items": [
                    {
                    "type_code": "SITUATION_ZON_SITUATION_MÉTÉOROLOGIQUE",
                    "hazard_code": null,
                    "hazard_name": "tous aléas",
                    "term_items": [
                        {
                        "term_names": "J+J1",
                        "start_time": "2025-07-06T08:00:00Z",
                        "end_time": "2025-07-07T22:00:00Z",
                        "risk_name": "Orange",
                        "risk_code": "3",
                        "risk_color": "#f7a401",
                        "risk_level": 2,
                        "subdivision_text": [
                            {
                            "underline_text": "",
                            "bold_text": "Faits nouveaux :",
                            "text": [
                                "Les départements des Pyrénées-Orientales, de l'Aude, de l'Hérault, du Gard et du Vaucluse sortent de la vigilance orange canicule et repassent en vigilance verte ce dimanche matin à 6h.",
                                "Les Bouches-du-Rhône sortent également de la vigilance orange canicule et repassent en viglance jaune ce dimanche matin à 6h.",
                                "",
                                "Sur ces départements, les températures minimales observées ce dimanche matin sont de l'ordre de 15 à 19°C dans l'intérieur, et de 21 à 25°C sur les zones littorales, proche-intrieur et vallée du Rhône. Après cette nuit de samedi à dimanche encore chaude, la baisse des températures attendue ce dimanche après-midi permet une baisse du niveau de vigilance sur ces départements."
                            ]
                            },
                            {
                            "underline_text": "",
                            "bold_text": "Situation générale :",
                            "text": [
                                "Les conditions anticycloniques régressent lentement vers le sud, et un changement de temps s'amorce aujourd'hui dimanche, avec l'arrivée d'une masse d'air progressivement plus frais. Ainsi, les températures s'orientent globalement à la baisse, mais restent toutefois encore chaudes sur le sud-est de la PACA, et surtout en Corse."
                            ]
                            }
                        ]
                        }
                    ]
                    }
                ]
                }
            ]
            },
            {
            "domain_id": "01",
            "domain_name": "Ain",
            "bloc_title": "Bulletin de suivi départemental de la Vigilance : Ain (01)",
            "bloc_id": "BULLETIN_DEPARTEMENTAL",
            "bloc_items": []
            }
        ]
    }
`;
