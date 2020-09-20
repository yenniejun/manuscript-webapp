import React, { Component } from 'react';
import ManuscriptData from './manuscriptData';
import AddManuscriptButton from './addManuscriptButton';
import './manuscript.css';

class FilledManuscriptsPage extends Component {
    render() {
        return (
            <div>
                {this.props.manuscripts.map((man, index) => (
                    <ManuscriptData
                        key={index}
                        manuscript={man}
                    />
                ))}
                {this.props.manuscripts.length < this.props.manuscriptCap &&
                    <AddManuscriptButton />
                }
            </div>
        );
    }
}
export default FilledManuscriptsPage;