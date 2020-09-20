import React, { Component } from 'react';
import AddButton from "./icons/addManuscript.svg"
import AddManuscriptModal from "./addManuscriptModal"
import useModal from './useModal';
import "./manuscript.css"

const AddManuscriptButton = () => {

    const {isShowing, toggle} = useModal();

    return(
        <div >
            <img src={AddButton} onClick={toggle}/>
            <p>Add New Manuscript</p>
            <div className="add-margin"></div>
            <AddManuscriptModal
                isShowing={isShowing}
                hide={toggle}
            />
        </div>
    );
}
export default AddManuscriptButton;