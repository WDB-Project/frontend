import React from 'react';
import ReactDOM from 'react-dom';
import Header from "../NavBar/NavBar.js" 
import axios from 'axios'
import "./EventPage.css"
const url = `http://ec2-3-86-143-220.compute-1.amazonaws.com:3000`

class EventPage extends React.Component {
    _isMounted = false;

    constructor(props) {
        super(props)
        this.state = {isLoaded: false}
        this.updateEvent = this.updateEvent.bind(this)
        this.getVolunteers = this.getVolunteers.bind(this)
        this.buttonRef = React.createRef()
    }

    componentDidMount() {
        this._isMounted = true;
        try {
            this.updateEvent(() => {
            console.log(this.state.data)
            this.getVolunteers()
            if (this.state.data.volunteers.includes(localStorage.getItem('userID'))) {
                this.setState({join: "Leave Event", update: this.deleteVolunteer})
            } else {
                this.setState({join: "Join This Event!", update: this.addVolunteer})
            }
            })    
        } catch(err) {
            console.log(err)
            this.setState({isLoaded: false})
        }
    }

    
    updateEvent(callback) {
        axios.get(url + `/events/get?_id=${this.props.eventID}`)
            .then((result) => {
                if (!result.data) {
                    this.setState({isLoaded: false, error : "this event does not exist"})
                    callback()
                } else {
                this.setState({
                    isLoaded: true,
                    data : result.data[0]
                })}
                callback()},
                (err) => {
                    console.log(err)
                    this.setState({isLoaded: false, error : err})
                }
            )
    }

    addVolunteer = () => {
        this.state.data.volunteers.push(localStorage.getItem('userID'))
        let config = {headers : {"Authorization" : "Bearer " + localStorage.getItem('token')}}
        let body = {id: this.state.data._id, volunteers: this.state.data.volunteers}
        axios.put(url + "/events/signup", body, config)
            .then((result) => {
                this.setState({join: "Leave Event", update: this.deleteVolunteer})
                this.componentDidMount()
            }, (err) => {
                console.log(err)
                alert("Volunteer addition failed")
                this.state.data.volunteers.pop()
            })
    }

    deleteVolunteer = () => {
        var index = this.state.data.volunteers.indexOf(localStorage.getItem('userID'))
        this.state.data.volunteers.splice(index, 1)
        let config = {headers : {"Authorization" : "Bearer " + localStorage.getItem('token')}}
        let body = {id: this.state.data._id, volunteers: this.state.data.volunteers}
        axios.put(url + "/events/signup", body, config)
            .then((result) => {
                this.setState({join: "Join This Event!", update: this.addVolunteer})
                this.componentDidMount()
            }, (err) => {
                console.log(err)
                alert("Volunteer deletion failed")
                this.state.data.volunteers.push(localStorage.getItem('userID'))
            })
    }

    getUser = (uid, callback) => {
        let config = {headers : {"Authorization" : "Bearer " + localStorage.getItem('token')}}
        var res;
        axios.get(url + "/profile/basic?uid=" + localStorage.getItem('userID'), config)
            .then((result) => {
                res = result.data.realname
                callback(res)
            }, (err) => {
                console.log(err)
                res = false
                callback(res)
            })
    }

    getVolunteers = () => {
        this._isMounted = true;
        var volunteers = []
        var vol;
        if (localStorage.getItem('token')) {
            for (const [index, value] of this.state.data.volunteers.entries()) {
                this.getUser(value, (res) => {
                    if (res) {
                        volunteers.push(<li className = "volunteer-list" key = {index}>{res}</li>)
                        this.setState({'volunteers': volunteers})
                    }
                })                
            }
        } else {
            volunteers.push("Sign in to view volunteers")
            this.setState({'volunteers': volunteers})
        }
        
    }

    render() { 
        if (!this.state.isLoaded) {
            console.log("Loading")
            return(<div>Loading...</div>)
        }

        
        
        return(
            <div className = 'wrapper'>
                <div className = 'nav-bar'>
                        <Header />
                </div>
                <div className = 'image'>
                    <img class = "title-image" src={this.state.data.image} alt = ""/>
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
                                    {this.state.volunteers}
                                </ol>
                            </div>
                            <div className = "add-vol">
                                <button className = "button-go" onClick = {this.state.update} ref = {this.buttonRef}>{this.state.join}</button>
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