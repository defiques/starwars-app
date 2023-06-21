import React, {FC, useMemo} from 'react';
import ReactModal from "react-modal";
import {useNavigate, useParams} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";
import MaleIcon from "../../assets/male-gender.png";
import FemaleIcon from "../../assets/female-gender.png";
import HIcon from "../../assets/hp-gender.png";
import './Modal.scss';
import {PeopleListItemFacts} from "../../ui/PeopleListItemFacts";
import {FaTimes} from "react-icons/fa";

interface ModalProps {
    visible: boolean,
    handleCloseModal: () => void
}

ReactModal.setAppElement('#root');

const Modal:FC<ModalProps> = ({ visible, handleCloseModal }) => {

    const params = useParams();

    const navigate = useNavigate();
    const data = useAppSelector( (s) => {
        const elId = s.characterReducer.characters.findIndex(el => el.id === params.id)
        return s.characterReducer.characters[elId]
    });

    const badData = ['n/a', 'unknown', 'none'];

    const prepareIcon = (gender:string) => {

        let icon;

        switch (gender) {
            case "male":
                icon = MaleIcon;
                break
            case "female":
                icon = FemaleIcon;
                break;
            case "hermaphrodite":
                icon = HIcon;
                break;
            default:
                icon = HIcon;
        }

        return icon;
    }

    let genderIcon = useMemo( () => prepareIcon(data.gender), [data.gender]);

    return (
        <ReactModal
            isOpen={visible}
            className="modal"
            overlayClassName="overlay"
            preventScroll={true}
        >
            <div
                className="modal-icon"
                onClick={() => {
                    handleCloseModal();
                    navigate(`./..`)
                }
            }
            >
                <FaTimes style={{width: 32, height: 32}}/>
            </div>
            <div className="modal-info">
                <div className="modal-info-left">
                    <div className="modal-info-left-img">
                        <img src={genderIcon} alt="Gender Icon"/>
                    </div>
                    <div className="flex flex-row justify-end">
                        {!badData.includes(data.gender) && <PeopleListItemFacts gender={data.gender}>{data.gender}</PeopleListItemFacts>}
                        {!badData.includes(data.birth_year) && <PeopleListItemFacts age>{data.birth_year}</PeopleListItemFacts>}
                    </div>
                </div>
                <div className="modal-info-right">
                    <div className="modal-info-right__title">{data.name}</div>
                    <div className="modal-info-right__info">
                        {!badData.includes(data.hair_color) && <span className="modal-info-right__text">hair color: {data.hair_color}</span>}
                        {!badData.includes(data.skin_color) && <span className="modal-info-right__text">skin color: {data.skin_color}</span>}
                        {!badData.includes(data.eye_color) && <span className="modal-info-right__text">eye color: {data.eye_color}</span>}
                    </div>
                    <div className="modal-info-right__props">
                        {!badData.includes(data.height)
                            &&
                            <div className="modal-info-right__props__item">
                                <div className="modal-info-right__props__item__value">{data.height}</div>
                                <div className="modal-info-right__props__item__name">height</div>
                            </div>
                        }
                        {!badData.includes(data.mass)
                            &&
                            <div className="modal-info-right__props__item">
                                <div className="modal-info-right__props__item__value">{data.mass}</div>
                                <div className="modal-info-right__props__item__name">mass</div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </ReactModal>
    );
};

export default Modal;