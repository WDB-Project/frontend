import React from 'react';
import ReactDOM from 'react-dom';
import Header from "../NavBar/NavBar.js" 
import axios from 'axios'
import "./EventPage.css"
import ErrorPage from "../ErrorPage/ErrorPage"
const url = `http://ec2-3-86-143-220.compute-1.amazonaws.com:3000`

class EventPage extends React.Component {
    _isMounted = false;

    constructor(props) {
        super(props)
        this.state = {isLoaded: false}
        this.updateEvent = this.updateEvent.bind(this)
        this.buttonRef = React.createRef()
        this.state.user = JSON.parse(localStorage.getItem('user'))
    }

    componentDidMount() {
        this._isMounted = true;
        try {
            this.updateEvent(() => {
            var volunteers = []
            for (const [index, value] of this.state.data.volunteers.entries()) {
                volunteers.push(<li className = "volunteer-list" key = {index}>{JSON.parse(value).realname}</li>)
            }

            this.setState({volunteers: volunteers})
            if (this.state.data.volunteers.includes(JSON.stringify(this.state.user))) {
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
                if (!result.data || result.data.upcoming) {
                    this.setState({isLoaded: false, error : "this event does not exist"})
                } else {
                    console.log(result.data)
                this.setState({
                    isLoaded: true,
                    data : result.data[0]
                }) 
                callback()}
                },
                (err) => {
                    console.log(err)
                    this.setState({isLoaded: false, error : err})
                }
            )
    }

    addVolunteer = () => {
        this.state.data.volunteers.push(JSON.stringify(this.state.user))
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
        var index = this.state.data.volunteers.indexOf(JSON.stringify(this.state.user))
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
                this.state.data.volunteers.push(this.state.user)
            })
    }

    

    render() { 
        if (!this.state.isLoaded) {
            console.log("Loading")
            if (this.state.error) {
                return(<ErrorPage/>)
            } else {
                return(<div>Loading...</div>)
            }
        }

        
        
        return(
            <div className = 'wrapper'>
                <div className = 'nav-bar'>
                        <Header />
                </div>
                <div className = 'image'>
                    <img className = "title-image" src={this.state.data.image} alt = ""/>
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