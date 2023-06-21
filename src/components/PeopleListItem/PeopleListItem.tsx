import React, {FC} from 'react';
import './PeopleListItem.scss';
import {ICharacters} from "../../types/models/ICharacters";
import {useNavigate} from "react-router-dom";
import {PeopleListItemFacts} from "../../ui/PeopleListItemFacts";

interface PeopleListItemProps {
    data: ICharacters,
    ref: React.Ref<HTMLDivElement>,
    handleOpenModal: () => void
}


const PeopleListItem:FC<PeopleListItemProps> = React.forwardRef(({data, handleOpenModal}, ref) => {

    const badData = ['n/a', 'unknown', 'none'];

    const navigate = useNavigate();

    const onItemClickHandler = (id:string | null) => {
        navigate(`./${id}`);
        handleOpenModal();
    }

    return (

        <div
            ref={ref}
            className="people-page-list-item"
            onClick={() => onItemClickHandler(data.id)}
        >
            <div className="people-page-list-item-name">
                {data.name}
            </div>
            <div className="flex flex-row mb-1">
                {!badData.includes(data.height)
                    &&
                    <div className="item-info">
                        <div className="item-info-value">
                            {data.height}
                        </div>
                        <div className="item-info-type">height</div>
                    </div>
                }
                {!badData.includes(data.mass)
                    &&
                    <div className="item-info">
                        <div className="item-info-value">
                            {data.mass}
                        </div>
                        <div className="item-info-type">mass</div>
                    </div>
                }
            </div>
            <div className="flex flex-row">
                {!badData.includes(data.gender) && <PeopleListItemFacts gender={data.gender}>{data.gender}</PeopleListItemFacts>}
                {!badData.includes(data.birth_year) && <PeopleListItemFacts age>{data.birth_year}</PeopleListItemFacts>}
            </div>
        </div>
    );
});

export default PeopleListItem;