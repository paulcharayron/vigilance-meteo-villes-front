import { useState } from "react";

const BulletinVigilanceDepartementTermItem = ({
    selectedDepartement, blocItem, textItem, termItem, termItemIndex
}) => {
    const [isTermItemCollapsed, setIsTermItemCollapsed] = useState<boolean>(false);

    return (
        <li className="w-full shadow-md rounded-md mb-3">
            <div className="p-2 rounded-t-md flex justify-start gap-3 bg-meteofr-blue text-white font-bold">
                <img
                    src="chevron-32.png"
                    alt="collapsing chevron"
                    className={`mt-1 ml-1 h-4 transition-transform duration-300 ease-in-out ${isTermItemCollapsed ? '' : 'rotate-90'} cursor-pointer`}
                    onClick={(e) => {setIsTermItemCollapsed(!isTermItemCollapsed)}}
                />
                <div className="flex flex-wrap gap-3">
                    <div className="font-bold">{`${termItem.term_names}`}</div>
                    <div>●</div>
                    <div className="flex flex-wrap gap-2 font-bold">
                        <div>{`(${termItem.start_time}`}</div>
                        <div>{'->'}</div>
                        <div>{`${termItem.end_time})`}</div>
                    </div>
                    <div>●</div>
                    <div className="flex flex-nowrap gap-1">
                        {termItem.risk_name == 'Vert' ? (
                            <div className="text-green-600 font-bold">{`${termItem.risk_name}`}</div>
                        ) : termItem.risk_name == 'Jaune' ? (
                            <div className="text-yellow-300 font-bold">{`${termItem.risk_name}`}</div>
                        ) : termItem.risk_name == 'Orange' ? (
                            <div className="text-orange-400 font-bold">{`${termItem.risk_name}`}</div>
                        ) : termItem.risk_name == 'Rouge' ? (
                            <div className="text-red-500 font-bold">{`${termItem.risk_name}`}</div>
                        ) : (
                            <div className="text-gray-400 font-bold">Risque Inconnu</div>
                        )}
                    </div>
                </div>
            </div>
            
            {/* TERM_ITEM : collapsible part */}
            {!isTermItemCollapsed && (
                <ul className="flex flex-col items-start p-3">
                    {termItem.subdivision_text?.map((subdivisionText, subdivisionTextIndex) => (
                        <li key={`${selectedDepartement.code}-${blocItem.id}-${textItem.type_code}-${termItem.term_names}-${subdivisionTextIndex}`}
                            className="">
                            <b>{subdivisionText.bold_text.substring(0, subdivisionText.bold_text.length-2)}</b>
                            <ul className="flex flex-col items-start">
                                {subdivisionText.text?.map((paragraph, paragraphIndex) => (
                                    paragraph && <li key={`${selectedDepartement.code}-${blocItem.id}-${textItem.type_code}-${termItem.term_names}-${subdivisionTextIndex}-${paragraphIndex}`}
                                        className="bg-gray-200 my-2 p-2 rounded-sm">
                                        <p>{paragraph}</p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    )
}

export default BulletinVigilanceDepartementTermItem
