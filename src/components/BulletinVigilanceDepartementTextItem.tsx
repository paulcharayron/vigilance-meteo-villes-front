import { useState } from "react";
import BulletinVigilanceDepartementTermItem from "./BulletinVigilanceDepartementTermItem";

const BulletinVigilanceDepartementTextItem = ({
    selectedDepartement, blocItem, textItem
}) => {
    const [isTextItemCollapsed, setIsTextItemCollapsed] = useState<boolean>(false);

    return (
        <li className="w-full shadow-md rounded-md mb-3">
            <div className="p-2 rounded-t-md flex justify-start gap-3 bg-meteofr-blue text-white font-bold">
                <img
                    src="chevron-32.png"
                    alt="collapsing chevron"
                    className={`mt-1 ml-1 h-4 transition-transform duration-300 ease-in-out ${isTextItemCollapsed ? '' : 'rotate-90'} cursor-pointer`}
                    onClick={(e) => {setIsTextItemCollapsed(!isTextItemCollapsed)}}
                />
                <div>{textItem.hazard_name ? textItem.hazard_name.charAt(0).toUpperCase() + textItem.hazard_name.slice(1) : ''}</div>
            </div>
            {/* TEXT_ITEM : collapsible part */}
            {!isTextItemCollapsed && (
                <ul className="w-full flex flex-col items-start p-3">
                    {textItem.term_items?.map((termItem, termItemIndex) => (
                        <BulletinVigilanceDepartementTermItem 
                            selectedDepartement={selectedDepartement} blocItem={blocItem} textItem={textItem} termItem={termItem} termItemIndex={termItemIndex}
                            key={`${selectedDepartement.code}-${blocItem.id}-${textItem.type_code}-${termItem.term_names}-${termItemIndex}`}/>
                    ))}
                </ul>
            )}
        </li>
    )
}

export default BulletinVigilanceDepartementTextItem
