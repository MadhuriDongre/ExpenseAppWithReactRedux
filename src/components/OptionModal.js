import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props)=>{
    return (
        <Modal 
            className={"modal"}
            isOpen={!!props.selectedOption}
            contentLabel="Selected Option"
            onRequestClose={props.handleClearOption}
            ariaHideApp={false}
            closeTimeoutMS={150}
        >
            <h3 className="modal__title"> Selected Option </h3>
            {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
            <button className="button" onClick={props.handleClearOption}>Okay</button>
        </Modal>
    )
};

export default OptionModal;