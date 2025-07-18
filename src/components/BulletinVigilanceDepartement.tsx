import Spinner from "./Spinner"

const BulletinVigilanceDepartement = ({
    selectedCommune, selectedDepartement, bulletinDepartement,
    isLoadingDepartement, errorMessageDepartement,
    errorMessageDPVigilance
}) => {

    return (
        <div className="w-4/5 border border-black rounded-t-xl rounded-b-md flex flex-col items-center bg-white">
            <div className="w-full p-2 flex flex-col items-center bg-meteofr-blue rounded-t-md text-white">
                <p className="text-xl md:text-2xl font-bold">Bulletin Départemental</p>
                {
                    (selectedCommune && selectedDepartement)
                    ? <p>{`${selectedCommune.nom} (${selectedDepartement.nom}, ${selectedDepartement.code})`}</p>
                    : <p className="text-gray-200 italic">Sélectionnez une commune</p>
                }
            </div>

            <div className="p-3">
                { selectedDepartement ? (
                    isLoadingDepartement ? (
                    <Spinner />
                    ) : errorMessageDepartement ? (
                    <p className='text-red-500'>{errorMessageDepartement}</p>
                    ) : errorMessageDPVigilance ? (
                    <p className='text-red-500'>{errorMessageDPVigilance}</p>
                    ) : (
                        <div>
                            {/* `<div>{bulletinDepartement ? bulletinDepartement.bloc_title : ''}</div>` */}

                            <ul className="flex flex-col items-start">
                                {bulletinDepartement?.bloc_items?.map((bloc_item) => (
                                    <li key={`${selectedDepartement.code}-${bloc_item.id}`}
                                        className="shadow-md rounded-md">
                                        <div>
                                            <h6 className="p-2 rounded-t-md bg-meteofr-blue text-white font-bold">{bloc_item.type_name}</h6>
                                            <ul className="flex flex-col items-start p-3">
                                                {bloc_item.text_items?.map((text_item) => (
                                                    <li key={`${selectedDepartement.code}-${bloc_item.id}-${text_item.type_code}`}
                                                        className="shadow-md rounded-md">
                                                        <div>
                                                            <h6 className="p-2 rounded-t-md bg-meteofr-blue text-white font-bold">{text_item.hazard_name}</h6>
                                                            <ul className="flex flex-col items-start p-3">
                                                                {text_item.term_items?.map((term_item) => (
                                                                    <li key={`${selectedDepartement.code}-${bloc_item.id}-${text_item.type_code}-${term_item.term_names}`}
                                                                        className="shadow-md rounded-md">
                                                                        <div>
                                                                            <div className="p-2 rounded-t-md bg-meteofr-blue text-white flex flex-wrap gap-3">
                                                                                <div className="font-bold">{`${term_item.term_names}`}</div>
                                                                                <div>●</div>
                                                                                <div className="flex flex-wrap gap-2 font-bold">
                                                                                    <div>{`(${term_item.start_time}`}</div>
                                                                                    <div>{'->'}</div>
                                                                                    <div>{`${term_item.end_time})`}</div>
                                                                                </div>
                                                                                <div>●</div>
                                                                                <div className="flex flex-nowrap gap-1">
                                                                                    {/* {term_item.risk_name == 'Vert' ? (
                                                                                        <div className="text-green-600">■</div>
                                                                                    ) : term_item.risk_name == 'Jaune' ? (
                                                                                        <div className="text-yellow-300">■</div>
                                                                                    ) : term_item.risk_name == 'Orange' ? (
                                                                                        <div className="text-orange-400">■</div>
                                                                                    ) : term_item.risk_name == 'Rouge' ? (
                                                                                        <div className="text-red-500">■</div>
                                                                                    ) : (
                                                                                        <div className="text-gray-500">■</div>
                                                                                    )} */}
                                                                                    {term_item.risk_name == 'Vert' ? (
                                                                                        <div className="text-green-600 font-bold">{`${term_item.risk_name}`}</div>
                                                                                    ) : term_item.risk_name == 'Jaune' ? (
                                                                                        <div className="text-yellow-300 font-bold">{`${term_item.risk_name}`}</div>
                                                                                    ) : term_item.risk_name == 'Orange' ? (
                                                                                        <div className="text-orange-400 font-bold">{`${term_item.risk_name}`}</div>
                                                                                    ) : term_item.risk_name == 'Rouge' ? (
                                                                                        <div className="text-red-500 font-bold">{`${term_item.risk_name}`}</div>
                                                                                    ) : (
                                                                                        <div className="text-gray-400 font-bold">Unknown risk name</div>
                                                                                    )}
                                                                                    {/* {['Vert', 'Jaune', 'Orange', 'Rouge'].includes(term_item.risk_name) ? (
                                                                                        <div className="text-orange-400 font-bold">{`${term_item.risk_name}`}</div>
                                                                                    ) : (
                                                                                        <div className="text-gray-500">Unknown risk name</div>
                                                                                    )} */}
                                                                                </div>
                                                                            </div>
                                                                            <ul className="flex flex-col items-start p-3">
                                                                                {term_item.subdivision_text?.map((subdivision_text, subdivision_text_index) => (
                                                                                    <li key={`${selectedDepartement.code}-${bloc_item.id}-${text_item.type_code}-${term_item.term_names}-${subdivision_text_index}`}>
                                                                                        <b>{subdivision_text.bold_text.substring(0, subdivision_text.bold_text.length-2)}</b>
                                                                                        <ul className="flex flex-col items-start">
                                                                                            {subdivision_text.text?.map((paragraph, paragraph_index) => (
                                                                                                paragraph && <li key={`${selectedDepartement.code}-${bloc_item.id}-${text_item.type_code}-${term_item.term_names}-${subdivision_text_index}-${paragraph_index}`}
                                                                                                    className="bg-gray-200 my-2 p-2">
                                                                                                    <p>{paragraph}</p>
                                                                                                </li>
                                                                                            ))}
                                                                                        </ul>
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </div>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                ) : (
                    <p>No data available</p>
                )}
            </div>
        </div>
    )
}

export default BulletinVigilanceDepartement
