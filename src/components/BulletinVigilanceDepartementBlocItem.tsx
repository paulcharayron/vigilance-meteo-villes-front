import { useState } from "react"
import BulletinVigilanceDepartementTextItem from "./BulletinVigilanceDepartementTextItem";

const BulletinVigilanceDepartementBlocItem = ({
    selectedDepartement, blocItem
}) => {
    const [isBlocItemCollapsed, setIsBlocItemCollapsed] = useState<boolean>(false);

    return (
        <li className="w-full shadow-md rounded-md mb-3">
            <div className="p-2 rounded-t-md flex justify-start gap-3 bg-meteofr-blue text-white font-bold">
                <img
                    src="chevron-32.png"
                    alt="collapsing chevron"
                    className={`mt-1 ml-1 h-4 transition-transform duration-300 ease-in-out ${isBlocItemCollapsed ? '' : 'rotate-90'} cursor-pointer`}
                    onClick={(e) => {setIsBlocItemCollapsed(!isBlocItemCollapsed)}}
                />
                <div>{blocItem.type_name}</div>
            </div>
            {/* BLOC_ITEM collapsible part */}
            {!isBlocItemCollapsed && (<ul className="w-full flex flex-col items-start p-3">
                {blocItem.text_items?.map((textItem) => (
                    <BulletinVigilanceDepartementTextItem 
                        selectedDepartement={selectedDepartement} blocItem={blocItem} textItem={textItem}
                        key={`${selectedDepartement.code}-${blocItem.id}-${textItem.type_code}`}/>
                ))}
            </ul>)}
        </li>
    )
}

export default BulletinVigilanceDepartementBlocItem
