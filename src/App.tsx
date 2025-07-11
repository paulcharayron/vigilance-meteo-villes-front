import { useEffect, useState } from 'react'
import { useDebounce } from 'react-use';

import type { ICommune } from './models/ICommune';
import type { IDepartement } from './models/IDepartement';

import Search from './components/Search'
import Spinner from './components/Spinner';
import BulletinVigilanceDepartement from './components/BulletinVigilanceDepartement';

const PUBLIC_API_METEO_FRANCE_DPVIGILANCE_API_BASE_URL = 'https://public-api.meteofrance.fr/public/DPVigilance/v1';
const PUBLIC_API_METEO_FRANCE_DPVIGILANCE_OAUTH_TOKEN = import.meta.env.VITE_PUBLIC_API_METEO_FRANCE_DPVIGILANCE_OAUTH_TOKEN;
const PUBLIC_API_METEO_FRANCE_DPVIGILANCE_API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    authorization: `Bearer ${PUBLIC_API_METEO_FRANCE_DPVIGILANCE_OAUTH_TOKEN}`
  }
}

const DATA_GOUV_FR_DECOUPAGE_ADMINISTRATIF_API_BASE_URL = 'https://geo.api.gouv.fr';

const DATA_GOUV_FR_DECOUPAGE_ADMINISTRATIF_API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json'
  }
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [communesList, setCommunesList] = useState<ICommune[]>([]);
  const [errorMessageCommunes, setErrorMessageCommunes] = useState('');
  const [errorMessageDepartement, setErrorMessageDepartement] = useState('');
  const [errorMessageDPVigilance, setErrorMessageDPVigilance] = useState('');
  const [isLoadingCommunes, setIsLoadingCommunes] = useState(false);
  const [isLoadingDepartement, setIsLoadingDepartement] = useState(false);
  const [isLoadingDPVigilance, setIsLoadingDPVigilance] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [selectedCommune, setSelectedCommune] = useState<ICommune | null>(null);
  const [selectedDepartement, setSelectedDepartement] = useState<IDepartement | null>(null);
  const [bulletinDepartement, setBulletinDepartement] = useState(null);
  const [bulletinNational, setBulletinNational] = useState(null);

  const fetchCommunes = async (nom = '') => {
    // console.log(`Calling fetchCommunes with '${nom}'`)
    
    if(nom === '') {
      setCommunesList([]);
      return;
    }

    setIsLoadingCommunes(true);
    setErrorMessageCommunes('');

    try {
      const endpoint = `${DATA_GOUV_FR_DECOUPAGE_ADMINISTRATIF_API_BASE_URL}/communes?nom=${encodeURIComponent(nom)}`;

      const response = await fetch(endpoint, DATA_GOUV_FR_DECOUPAGE_ADMINISTRATIF_API_OPTIONS);

      if(!response.ok) {
        throw new Error('Failed to fetch communes');
      }

      const data = await response.json();
      
      if(data.Response === 'False') {
        setErrorMessageCommunes(data.error || 'Erreur de récupération des communces');
        setCommunesList([]);
        return;
      }

      setCommunesList(data || [])
    } catch (error) {
      console.error(`Error fetching communes: ${error}`);
      setErrorMessageCommunes('Une erreur est survenue lors de la récupération des communes. Veuillez réessayer plus tard.');
    } finally {
      setIsLoadingCommunes(false);
    }
  }

  const fetchDepartement = async (codeDepartement = '') => {
    // console.log(`Calling fetchDepartement with '${codeDepartement}'`)
    
    if(!codeDepartement) {
      setSelectedDepartement(null);
      return;
    }
    setIsLoadingDepartement(true);
    setErrorMessageDepartement('');

    try {
      const endpoint = `${DATA_GOUV_FR_DECOUPAGE_ADMINISTRATIF_API_BASE_URL}/departements/${encodeURIComponent(codeDepartement)}`;

      const response = await fetch(endpoint, DATA_GOUV_FR_DECOUPAGE_ADMINISTRATIF_API_OPTIONS);

      if(!response.ok) {
        throw new Error('Failed to fetch departement');
      }

      const data = await response.json();
      
      if(data.Response === 'False') {
        setErrorMessageDepartement(data.error || 'Erreur de récupération du département');
        setSelectedDepartement(null);
        return;
      }
      
      setSelectedDepartement(data || null)
    } catch (error) {
      console.error(`Error fetching departement: ${error}`);
      setErrorMessageDepartement('Une erreur est survenue lors de la récupération du département. Veuillez réessayer plus tard.');
    } finally {
      setIsLoadingDepartement(false);
    }
  }

  const fetchDPVigilance = async () => {
    // console.log(`Calling fetchDPVigilance`)

    setIsLoadingDPVigilance(true);
    setErrorMessageDPVigilance('');

    try {
      const endpoint = `${PUBLIC_API_METEO_FRANCE_DPVIGILANCE_API_BASE_URL}/textesvigilance/encours`;

      const response = await fetch(endpoint, PUBLIC_API_METEO_FRANCE_DPVIGILANCE_API_OPTIONS);

      if(!response.ok) {
        throw new Error('Failed to fetch données publiques vigilance');
      }

      const data = await response.json();
      
      if(data.Response === 'False') {
        setErrorMessageDPVigilance(data.error || 'Erreur de récupération des données publiques vigilance');
        setBulletinDepartement(null);
        setBulletinNational(null);
        return;
      }

      setBulletinNational(data.product.text_bloc_items.find((tbc) => tbc.domain_name == "France") || null)
      setBulletinDepartement(data.product.text_bloc_items.find((tbc) => tbc.domain_name == selectedDepartement?.nom) || null)
    } catch (error) {
      console.error(`Error fetching données publiques vigilance: ${error}`);
      setErrorMessageDPVigilance('Une erreur est survenue lors de la récupération des données publiques vigilance. Veuillez réessayer plus tard.');
    } finally {
      setIsLoadingDPVigilance(false);
    }
  }
  
  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm])

  useEffect(() => {
    fetchCommunes(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    fetchDepartement(selectedCommune?.codeDepartement);
  }, [selectedCommune]);

  useEffect(() => {
    fetchDPVigilance();
  }, [selectedDepartement])

  const handleCommuneSelection = (nomCommune: string) => {
    
    const selCommune = communesList.find((c) => c.nom == nomCommune);
    if(!selCommune) {
      return;
    }

    setSearchTerm('');
    setSelectedCommune(selCommune);
  }

  return (
    <main>
      <div className='pattern' />

      <div className='wrapper'>
        <h2>Vigilance Météo Villes</h2>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <section className='all-communes'>
          <h2 className='mt-[40px]'>Communes</h2>

          {isLoadingCommunes ? (
            <Spinner />
          ) : errorMessageCommunes ? (
            <p className='text-red-500'>{errorMessageCommunes}</p>
          ) : (
            <ul>
              {communesList?.map((commune: ICommune) => (
                <li key={`${commune.code}-${commune.siren || 'nosiren'}`}>
                  <div onClick={() => handleCommuneSelection(commune.nom)}>{commune.nom}</div>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className='bulletin-departement'>
          <h2 className='mt-[40px]'>Bulletin Département</h2>

          {selectedDepartement ? (
            isLoadingDepartement ? (
              <Spinner />
            ) : errorMessageDepartement ? (
              <p className='text-red-500'>{errorMessageDepartement}</p>
            ) : errorMessageDPVigilance ? (
              <p className='text-red-500'>{errorMessageDPVigilance}</p>
            ) : (
              <BulletinVigilanceDepartement selectedCommune={selectedCommune} selectedDepartement={selectedDepartement} bulletinDepartement={bulletinDepartement}/>
            )
          ) : (
            isLoadingDepartement ? (
              <Spinner />
            ) : (
              <div>
                <p>Sélectionnez une commune</p>
              </div>
            )
          )}
        </section>
      </div>
    </main>
  )
}

export default App
