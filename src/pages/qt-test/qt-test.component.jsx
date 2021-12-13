import React from 'react';
import { useState } from 'react';
import AddHomeButton from './add-home.component';
import AddTaskButton from './add-task.component';
import AddTripButton from './add-trip.component';

class App1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navigateBtn: 'start'
        }
    }
    home = () => {
        this.setState({
            navigateBtn: 'start'
        })
    }
    trip = () => {
        this.setState({
            navigateBtn: 'trip'
        })
    }
    task = () => {
        this.setState({
            navigateBtn: 'task'
        })
    }
    render() {  
        return (
            <div>
                <div class="row">
                    <div class="col-12">    
                        <div class='row p-5 m-5 d-flex justify-content-center align-items-center'>
                            <div class="col-3 bg-primary text-light text-center p-5">
                                <button onClick={this.home}>clear all</button>
                                <button onClick={this.trip}>add trip</button>
                                <button onClick={this.task}>add task</button>
                            </div>
                            <div class="col-7 bg-success text-light p-3 mx-3">
                                <div class="row">
                                    {this.state.navigateBtn === 'start' && 
                                    <AddHomeButton 
                                        
                                    
                                    />}
                                    {this.state.navigateBtn === 'trip' && <AddTripButton />}
                                    {this.state.navigateBtn === 'task' && <AddTaskButton />}
                                </div>
                            </div>        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

  export default App1