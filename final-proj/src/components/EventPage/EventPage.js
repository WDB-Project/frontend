import React from 'react';
import ReactDOM from 'react-dom';
import Header from "../NavBar/NavBar.js" 
import axios from 'axios'
import "./EventPage.css"

class EventPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isLoaded: false}
        
    }

    componentDidMount() {
        axios.post("http://ec2-3-86-143-220.compute-1.amazonaws.com:3000/events/get", {name : this.props.eventID})
            .then((result) => {
                if (!result.data) {
                    this.setState({isLoaded: false, error : "this event does not exist"})
                } else {
                this.setState({
                    isLoaded: true,
                    data : result.data
                })}},
                (err) => {
                    console.log(err)
                    this.setState({isLoaded: false, error : err})
                }
            )
    }


    render() { 
        if (!this.state.isLoaded) {
            console.log("Loading")
            return(<div></div>)
        }

        const volunteers = []
        for (const v of this.state.data.volunteers) {
            volunteers.push(<li class = "volunteer-list">{v}</li>)
        }
        return(
            <div className = 'wrapper'>
                <div className = 'nav-bar'>
                        <Header />
                </div>
                <div className = 'image'>
                    
                </div>
                <div className = 'content'>
                    <div className = 'name-signup'>
                        <div class = 'name-wrap'>
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