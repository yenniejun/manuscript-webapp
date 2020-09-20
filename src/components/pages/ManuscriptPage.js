import React, { Component } from 'react';
import EmptyManuscriptsPage from "../manuscript/emptyManuscriptsPage";
import FilledManuscriptsPage from "../manuscript/filledManuscriptsPage";

class ManuscriptPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
          manuscriptCap: 10,
          manuscripts: [],
        };
        // this.handleClick = this.handleClick.bind(this);
      }

    async getManuscripts() {
        // TO DO this needs to be /authors/authorid/manuscripts
        const response = await fetch(`http://localhost:3000/v1/manuscripts`);
    
        console.log("Get Manuscripts response code", response.status)
        if (response.status !== 200) {
          throw Error;
        }
        const body = await response.json();
        console.log("manuscripts", body)
        return body.manuscripts;
    };

    componentDidMount() {
        this.getManuscripts()
          .then(manuscripts => this.setState({manuscripts: manuscripts}))
    }

    render() {
        return(
            <div>
                <h1>My Manuscripts</h1>
                <div>
									{this.state.manuscripts.length === 6 ?
										<EmptyManuscriptsPage 
                    /> 
                    :
                    <FilledManuscriptsPage 
                      manuscripts={this.state.manuscripts}
                      manuscriptCap={this.state.manuscriptCap}
                    />
									}
								</div>
            </div>
        );
    }
}
export default ManuscriptPage;