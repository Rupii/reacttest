import React, { Component } from 'react';
import axios from 'axios';

// import { Dropdown } from 'react-bootstrap';
import Select from 'react-select';


class SelectTrack extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount = () => {

        axios.get("/btrack").then(response => {
            this.setState({
                data: response.data.arr
            })
        });


    }

    render() {

        return (
            <div className="container">
                <br></br>

                <select class="browser-default custom-select" onChange={this.props.slectTrackChange}>
                    <option value="" disabled="disabled" selected="selected">Select a Track</option>

                    {
                        this.state.data.map((team, i) => {
                            return (
                                <option value={team}> {team}</option>
                            )
                        })
                    }
                </select>
            </div>


        )
    }
}
export default SelectTrack;