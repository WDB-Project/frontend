import React from 'react';
import ReactDOM from 'react-dom';
import Header from "../NavBar/NavBar.js" 
import axios from 'axios'
import "./EventPage.css"

class EventPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isLoaded: false}
        this.updateEvent = this.updateEvent.bind(this)
    }

    componentDidMount() {
        this.updateEvent()
    }

    
    updateEvent() {
        axios.get(`http://ec2-3-86-143-220.compute-1.amazonaws.com:3000/events/get?_id=${this.props.eventID}`)
            .then((result) => {
                if (!result.data) {
                    this.setState({isLoaded: false, error : "this event does not exist"})
                } else {
                this.setState({
                    isLoaded: true,
                    data : result.data[0]
                })}},
                (err) => {
                    console.log(err)
                    this.setState({isLoaded: false, error : err})
                }
            )
    }

    addVolunteer = () => {
        const node = ReactDOM.findDOMNode(this)
        const input = node.querySelector('#name-input')
        const newVolunteer = input.value
        input.value = ""
        const newVolunteerArr = this.state.data.volunteers
        newVolunteerArr.push(newVolunteer)
        axios.put("http://ec2-3-86-143-220.compute-1.amazonaws.com:3000/events/add_volunteer", {id: this.state.data._id, volunteers: newVolunteerArr})
            .then((result) => {
                
            }, (err) => {
                console.log(err)
                alert("Volunteer addition failed")
            })
        this.state.data.volunteers = newVolunteerArr
        this.forceUpdate()
    }

    render() { 
        if (!this.state.isLoaded) {
            console.log("Loading")
            return(<div>Loading...</div>)
        }

        const volunteers = []
        for (const [index, value] of this.state.data.volunteers.entries()) {
            volunteers.push(<li className = "volunteer-list" key = {index}>{value}</li>)
        }

        return(
            <div className = 'wrapper'>
                <div className = 'nav-bar'>
                        <Header />
                </div>
                <div className = 'image'>
                    
                </div>
                <div className = 'eventpage-content'>
                    <div className = 'name-signup'>
                        <div className = 'name-wrap'>
                            <h1 className = 'name'>{this.state.data.name}</h1>
                        </div>
                        <div className = 'signup'>
                            <div className = 'banner'>
                                <p className = 'banner-text'>Sign Up</p>
                            </div>
                            <div className = 'signup-cont'>
                                <ol className = "vol-wrapper">
                                    {volunteers}
                                </ol>
                            </div>
                            <div className = "add-vol">
                                <div className = 'name-input-wrap'>
                                    <input className = 'name-input' type = 'text' placeholder = "Enter your name!" id = 'name-input'></input>
                                    <button className = "button-go" onClick = {this.addVolunteer}>Go!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = 'description'>
                        <div className = 'description-wrapper'>
                            <div className = "banner">
                                <p className = 'banner-text'>Description</p>
                            </div>
                            <p className = 'description-text'>
                                {this.state.data.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )}
}



export default EventPage;