import React, { Component } from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap'
import TablePagination from '@material-ui/core/TablePagination';
import { MDBDataTable } from 'mdbreact';

class TrackerDetails extends Component {
    
    constructor() {
        super();
        this.state = {
            data: [],
            newdata: [],
            tempdata: [],
            updated: false,
            headCount: 0,
            prensentCount: 0,
            absentCount: 0
        }
    }

    componentDidMount = () => {

        axios.post("/btrackee", { track: this.props.track, subtrack: this.props.subtrack, startDate: this.props.startDate }).then(response => {
            for (var i in response.data.rest) {
                console.log(i)
            }
            console.log(typeof (response.data.rest))
            this.setState({
                data: response.data.rest,
                newdata: response.data.rest,
                tempdata: response.data.rest
            });

            this.setState({
                headCount: this.state.newdata.length
            })
            const att = {
                "Full working day": 1,
                "Comp-off": 1,
                "Sick": 0,
                "PTO": 0,
                "Holiday": 0,
                "On-Duty": 0.5,
                "Half working day": 0.5
            }
            this.state.newdata.forEach((v, i) => {
                var x = v.attendence.trim()

                this.setState({
                    prensentCount: this.state.prensentCount + att[x]
                })
            })
            this.setState({
                absentCount: this.state.headCount - this.state.prensentCount
            })

        }
        );


    }

    atchange = (event) => {
        let attend = event.target.value
        let stat = event.target.name
        console.log(event.target)
        this.setState({
            tempdata: {
                ...this.state.tempdata,
                [stat]: {

                    ...this.state.tempdata[stat],
                    attendence: attend

                }

            }
        })


    }
    inchange = (event) => {
        let activi = event.target.value
        let stat = event.target.name

        this.setState({
            tempdata: {
                ...this.state.tempdata,
                [stat]: {

                    ...this.state.tempdata[stat],
                    activities: activi

                }

            }
        })
        console.log(this.state.tempdata)
    }
    submithandler = e => {
        e.preventDefault()
        const val = this.state.tempdata;
        const checks = []
        var checkboxes = document.getElementsByName('member');

        for (var checkbox of checkboxes) {
            if (checkbox.checked) {

                checks.push(checkbox.id)
                this.enabling({
                    target: {
                        id: checkbox.id,
                        checked: false
                    }
                });
            }
        }

        console.log(checks)
        axios.post("/bupdate", { track: val, list: checks, startDate: this.props.startDate }).then(response => {
            this.setState({
                updated: true
            })

        }
        );
    }


    searchChange = () => {
        let filter = document.getElementById('myInput').value.trim().toUpperCase();
        let myTable = document.getElementById('myTable');
        let tr = myTable.getElementsByTagName('tr');
        for (var i = 0; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName('td')[1];
            if (td != undefined) {
                let textValue = td.textContent || td.innerHTML;
                if (textValue.trim().toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";

                }
                else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    loding = () => {
        var checkboxes = document.getElementsByName('member');
        var selectcheck = document.getElementById('select-all').checked

        for (var checkbox of checkboxes) {
            if (selectcheck) {
                checkbox.checked = true
                this.enabling({
                    target: {
                        id: checkbox.id,
                        checked: true
                    }
                });
            } else {
                checkbox.checked = false;
                this.enabling({
                    target: {
                        id: checkbox.id,
                        checked: false
                    }
                });
            }

        }

    }
    enabling = (e) => {
        if (e.target.checked) {
            document.getElementById('select' + e.target.id).disabled = false;
            document.getElementById('input' + e.target.id).disabled = false;

        }
        else if (!e.target.checked) {
            document.getElementById('select' + e.target.id).disabled = true;
            document.getElementById('input' + e.target.id).disabled = true;
        }
    }
    // sortBy =()=>{
    //     console.log("Sorting By")
    //     this.setState({
    //         data: this.state.data.sort()
    //     })
    // }

    render() {
        const data = {
            columns: [
              {
                label: 'Name',
                input: 'checkbox',
                field: 'name',
                sort: 'asc',
                width: 150
              }
            ],
            rows: [
                {
                  name: 'Tiger Nixon',
                  position: 'System Architect',
                  office: 'Edinburgh',
                  age: '61',
                  date: '2011/04/25',
                  salary: '$320'
                },
                {
                  name: 'Garrett Winters',
                  position: 'Accountant',
                  office: 'Tokyo',
                  age: '63',
                  date: '2011/07/25',
                  salary: '$170'
                },
                {
                  name: 'Ashton Cox',
                  position: 'Junior Technical Author',
                  office: 'San Francisco',
                  age: '66',
                  date: '2009/01/12',
                  salary: '$86'
                },
                {
                  name: 'Cedric Kelly',
                  position: 'Senior Javascript Developer',
                  office: 'Edinburgh',
                  age: '22',
                  date: '2012/03/29',
                  salary: '$433'
                },
                {
                  name: 'Airi Satou',
                  position: 'Accountant',
                  office: 'Tokyo',
                  age: '33',
                  date: '2008/11/28',
                  salary: '$162'
                },{
                    name: 'Airi Satou',
                    position: 'Accountant',
                    office: 'Tokyo',
                    age: '33',
                    date: '2008/11/28',
                    salary: '$162'
                  },{
                    name: 'Airi Satou',
                    position: 'Accountant',
                    office: 'Tokyo',
                    age: '33',
                    date: '2008/11/28',
                    salary: '$162'
                  },{
                    name: 'Airi Satou',
                    position: 'Accountant',
                    office: 'Tokyo',
                    age: '33',
                    date: '2008/11/28',
                    salary: '$162'
                  },{
                    name: 'Airi Satou',
                    position: 'Accountant',
                    office: 'Tokyo',
                    age: '33',
                    date: '2008/11/28',
                    salary: '$162'
                  },{
                    name: 'Airi Satou',
                    position: 'Accountant',
                    office: 'Tokyo',
                    age: '33',
                    date: '2008/11/28',
                    salary: '$162'
                  },
                {
                  name: 'Brielle Williamson',
                  position: 'Integration Specialist',
                  office: 'New York',
                  age: '61',
                  date: '2012/12/02',
                  salary: '$372'
                }]};
        
        return (
            <div>

                <form onSubmit={this.submithandler}>
                    <div class="container">
                        <br></br>
                        {this.state.updated
                            ? <div class="alert alert-success">
                                <strong><a href="/">Success!</a></strong> updated
                          </div>
                            : <p></p>

                        }
                        
                        <input type="text" class="form-control" style={{ width: 350 }} id="myInput" placeholder="Search Name" onKeyUp={this.searchChange} />
                        <br></br>
                        {/* style={{width : 350} } */}
                        
                        <table class="searchable sortable table table-faded table-striped" id="myTable">

                            <thead>
                                <tr>
                                    <th><input type="checkbox" id="select-all" onChange={this.loding} /></th>
                                    <th>
                                        {/* <button onClick={this.sortBy}> */}
                                        Name
                                        {/* </button> */}
                                    </th>

                                    <th>Location </th>
                                    <th>Attendence</th>
                                    <th>Key Activities</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    this.state.data.map((team, i) => {
                                
                                        return (
                                            <tr >
                                                <td><input id={i} type="checkbox" name="member" onChangeCapture={this.enabling} /> </td>
                                                <td >
                                                    {team.name}
                                                </td>

                                                <td>Off Shore </td>
                                                <td>
                                                    <select class="browser-default custom-select" disabled name={i} id={"select" + i} selected={team.attendence} onChange={this.atchange}>
                                                        <option value="" disabled="disabled" selected="selected">{team.attendence}</option>
                                                        <option value="Full working day"  >Full working day</option>
                                                        <option value="Comp-off" >Comp-off</option>
                                                        <option value="Sick">Sick</option>
                                                        <option value="PTO">PTO</option>
                                                        <option value="Holiday" >Holiday</option>
                                                        <option value="On-Duty" >On-Duty</option>
                                                        <option value="Half working day" >Half working day</option>
                                                    </select>

                                                </td>
                                                <td><input disabled name={i} class="form-control" size={45} value={this.state.tempdata[i].activities} id={"input" + i} onChange={this.inchange} /></td>
                                            </tr>

                                        )
                                    })
                                }

                            </tbody>
                            
                        </table>
                        <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={20}
                        rowsPerPage={5}
                       
                        />
                        {/* <MDBDataTable
      striped
      bordered
      small
      data={data}
    /> */}
                    </div>

                    <Button type="submit" variant="flat">Submit</Button>

                </form>
                


            </div>
        )
    }
}
export default TrackerDetails; 