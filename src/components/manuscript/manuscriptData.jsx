import React from 'react';
import classNames from 'classnames';
import './manuscript.css'

function renderManuscriptData(props) {
    const { manuscript } = props;
    return (
        <>
            <tr key="title">
                <td>TITLE</td>
                <td>{manuscript.title}</td>
            </tr>
            <tr key="genre">
                <td>GENRE</td>
                <td>{manuscript.genre}</td>
            </tr>
            <tr key="form">
                <td>FORM</td>
                <td>{manuscript.form}</td>
            </tr>
            <tr key="wordcount">
                <td>WORD COUNT</td>
                <td>{manuscript.wordcount}</td>
            </tr>
            <tr key="blurb">
                <td>Blurb</td>
                <td>{manuscript.blurb}</td>
            </tr>
        </>
    )
}

function ManuscriptData(props) {
	return (
        <div className="manuscript-data-box">
            <table className={classNames("manuscript-view")}>
                <tbody>
                    {renderManuscriptData(props)}
                </tbody>
            </table>
        </div>
    )


}

export default ManuscriptData;