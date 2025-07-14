import Spinner from "./Spinner"

const BulletinVigilanceDepartement = ({
    selectedCommune, selectedDepartement, bulletinDepartement,
    isLoadingDepartement, errorMessageDepartement,
    errorMessageDPVigilance
}) => {

    return (
        <div>
            <h2>Bulletin Départemental</h2>
            <h4>
                {
                    `${
                        (selectedCommune && selectedDepartement)
                        ? `${selectedCommune.nom} (${selectedDepartement.nom}, ${selectedDepartement.code})`
                        : 'Sélectionnez une commune'
                    }`
                }
            </h4>

            { selectedDepartement && (
                isLoadingDepartement ? (
                <Spinner />
                ) : errorMessageDepartement ? (
                <p className='text-red-500'>{errorMessageDepartement}</p>
                ) : errorMessageDPVigilance ? (
                <p className='text-red-500'>{errorMessageDPVigilance}</p>
                ) : (
                    <div>
                        {/* `<div>{bulletinDepartement ? bulletinDepartement.bloc_title : ''}</div>` */}

                        <ul>
                            {bulletinDepartement?.bloc_items?.map((bloc_item) => (
                                <li key={`${selectedDepartement.code}-${bloc_item.id}`}>
                                    <div>
                                        <p>{bloc_item.type_name}</p>
                                        <ul>
                                            {bloc_item.text_items?.map((text_item) => (
                                                <li key={`${selectedDepartement.code}-${bloc_item.id}-${text_item.type_code}`}>
                                                    <div>
                                                        <p>{text_item.hazard_name}</p>
                                                        <ul>
                                                            {text_item.term_items?.map((term_item) => (
                                                                <li key={`${selectedDepartement.code}-${bloc_item.id}-${text_item.type_code}-${term_item.term_names}`}>
                                                                    <div>
                                                                        <p>{`${term_item.term_names} (${term_item.start_time} -> ${term_item.end_time}) - ${term_item.risk_name}`}</p>
                                                                        <ul>
                                                                            {term_item.subdivision_text?.map((subdivision_text, subdivision_text_index) => (
                                                                                <li key={`${selectedDepartement.code}-${bloc_item.id}-${text_item.type_code}-${term_item.term_names}-${subdivision_text_index}`}>
                                                                                    <ul>
                                                                                        {subdivision_text.text?.map((paragraph, paragraph_index) => (
                                                                                            <li key={`${selectedDepartement.code}-${bloc_item.id}-${text_item.type_code}-${term_item.term_names}-${subdivision_text_index}-${paragraph_index}`}>
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
            )}
        </div>
    )
}

export default BulletinVigilanceDepartement
