import { useEffect, useState } from 'react'
import { useDebounce } from 'react-use';

import type { ICommune } from './models/ICommune';
import type { IDepartement } from './models/IDepartement';

import { getTextesDPVigilance, TEST_DATA } from './services/meteoFranceDPVigilance';

import BulletinVigilanceDepartement from './components/BulletinVigilanceDepartement';
import SearchCommune from './components/SearchCommune';

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
      const response = await getTextesDPVigilance();

      if(!response.ok) {
        throw new Error('Failed to fetch données publiques vigilance');
      }

      const data = await response.json();
      // const data = JSON.parse(TEST_DATA);
      console.log(data)
      
      if(data.Response === 'False') {
        setErrorMessageDPVigilance(data.error || 'Erreur de récupération des données publiques vigilance');
        setBulletinDepartement(null);
        setBulletinNational(null);
        return;
      }

      setBulletinNational(data.data.product.text_bloc_items.find((tbc) => tbc.domain_name == "France") || null)
      setBulletinDepartement(data.data.product.text_bloc_items.find((tbc) => tbc.domain_name == selectedDepartement?.nom) || null)
      // setBulletinNational(data.text_bloc_items.find((tbc) => tbc.domain_name == "France") || null)
      // setBulletinDepartement(data.text_bloc_items.find((tbc) => tbc.domain_name == selectedDepartement?.nom) || null)
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
  }, [selectedDepartement]);

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
      <div className="pattern"/>

      <div className="wrapper">
        <header className="flex flex-col items-center">
          <h1 className="text-center text-white text-4xl font-bold w-1/2">Les <span className="text-gradient">données de vigilance météo</span> de <span className="text-gradient">votre commune</span> en un clic</h1>

          <SearchCommune
            searchTerm={searchTerm} setSearchTerm={setSearchTerm}
            isLoadingResults={isLoadingCommunes} errorMessageResults={errorMessageCommunes} resultsList={communesList} handleResultSelection={handleCommuneSelection}
          />
        </header>

        <section className="mt-18 flex flex-col items-center">
          <BulletinVigilanceDepartement 
            selectedCommune={selectedCommune} selectedDepartement={selectedDepartement} bulletinDepartement={bulletinDepartement}
            isLoadingDepartement={isLoadingDepartement} errorMessageDepartement={errorMessageDepartement}
            errorMessageDPVigilance={errorMessageDPVigilance}
          />
        </section>
      </div>
    </main>
  )
}

export default App
