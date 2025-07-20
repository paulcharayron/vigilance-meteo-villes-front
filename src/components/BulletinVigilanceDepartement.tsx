import BulletinVigilanceDepartementBlocItem from "./BulletinVigilanceDepartementBlocItem"
import Spinner from "./Spinner"

const BulletinVigilanceDepartement = ({
    selectedCommune, selectedDepartement, bulletinDepartement,
    isLoadingDepartement, errorMessageDepartement,
    isLoadingDPVigilance, errorMessageDPVigilance
}) => {
    const DEPARTEMENT_FLAG_BASE_URL = import.meta.env.VITE_DEPARTEMENT_FLAG_BASE_URL;

    return (
        <div className="w-4/5 rounded-t-xl rounded-b-md flex flex-col items-center bg-white">
            <div className="w-full p-2 flex flex-col items-center bg-meteofr-blue rounded-t-md text-white">
                <p className="text-xl md:text-2xl font-bold">Bulletin Départemental</p>
                {
                    (selectedCommune && selectedDepartement)
                    ? (
                        <div className="w-full flex flex-col items-center">
                            <p>{`${selectedCommune.nom} (${selectedDepartement.nom}, ${selectedDepartement.code})`}</p>
                            <a href={encodeURI(`https://fr.wikipedia.org/wiki/${selectedDepartement.nom}_(département)`)} target="_blank"><img
                                src={`${DEPARTEMENT_FLAG_BASE_URL}/${selectedDepartement.code}`}
                                alt="drapeau departement"
                                className="mt-1 h-8"
                            /></a>
                        </div>
                    )
                    : <p className="text-gray-200 italic">Sélectionnez une commune</p>
                }
            </div>

            <div className="w-full p-3 flex flex-col items-center">
                { selectedDepartement ? (
                    isLoadingDepartement || isLoadingDPVigilance ? (
                    <Spinner />
                    ) : errorMessageDepartement ? (
                    <p className='text-sm text-red-500 italic'>{errorMessageDepartement}</p>
                    ) : errorMessageDPVigilance ? (
                    <p className='text-sm text-red-500 italic'>{errorMessageDPVigilance}</p>
                    ) : bulletinDepartement?.bloc_items.length > 0 ? (
                        <div className="w-full flex flex-col items-center">
                            <ul className="w-full flex flex-col items-center">
                                {bulletinDepartement?.bloc_items?.map((blocItem) => (
                                    <BulletinVigilanceDepartementBlocItem 
                                        selectedDepartement={selectedDepartement} blocItem={blocItem}
                                        key={`${selectedDepartement.code}-${blocItem.id}`}/>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <p className="text-sm">Pas de vigilance particulière en cours pour le département sélectionné.</p>
                    )
                ) : (
                    <p className="text-sm text-gray-500 italic">Sélectionnez une commune pour obtenir les données de vigilance du département correspondant.</p>
                )}
            </div>
        </div>
    )
}

export default BulletinVigilanceDepartement
