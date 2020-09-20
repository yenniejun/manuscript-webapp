import React, { Component } from 'react';
import AddManuscriptButton from './addManuscriptButton';
import './manuscript.css';

class EmptyManuscriptsPage extends Component {
    render() {
        return(
            <div>
                <p style={{marginTop: '3rem'}}>You currently have no manuscripts</p>
                <AddManuscriptButton />
            </div>
        );
    }
}
export default EmptyManuscriptsPage;