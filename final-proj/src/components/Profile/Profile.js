import React from 'react';
import ReactDOM from 'react-dom';
import Header from "../NavBar/NavBar.js" 
import axios from 'axios'
import "./Profile.css"
import ErrorPage from "../ErrorPage/ErrorPage"
const url = `http://ec2-3-86-143-220.compute-1.amazonaws.com:3000`

class Profile extends React.Component {
    _isMounted = false;

    constructor(props) {
        super(props)
        this.state = {isLoaded: false}
        // this.updateProfile = this.updateProfile.bind(this)
        this.buttonRef = React.createRef()
        this.state.user = JSON.parse(localStorage.getItem('user'))
    }

    componentDidMount() {
        this._isMounted = true;
        try {
            // this.updateProfile();
        } catch(err) {
            console.log(err)
            this.setState({isLoaded: false})
        }
    }

    
    // updateProfile() {
    //     let config = {headers : {"Authorization" : "Bearer " + localStorage.getItem('token')}}
    //     axios.get(url + `/auth/get`, config)
    //         .then((result) => {
    //             if (!result.data || result.data.upcoming) {
    //                 this.setState({isLoaded: false, error : "this user does not exist"})
    //             } else {
    //                 console.log(result.data)
    //             this.setState({
    //                 isLoaded: true,
    //                 data : result.data[0]
    //             }) 
    //             callback()}
    //             },
    //             (err) => {
    //                 console.log(err)
    //                 this.setState({isLoaded: false, error : err})
    //             }
    //         )
    // }

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

    render() { 
        if (!this.state.user) {
            console.log("Loading")
            if (this.state.error) {
                return(<ErrorPage/>)
            } else {
                return(<div>Loading...</div>)
            }
        } else {
            return(
                <div className = 'wrapper'>
                    <div className = 'nav-bar'>
                            <Header />
                    </div>
                    <img className = "profile-pic" src="https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/m/mountain-gorilla_thumb.jpg" alt = ""/>
                    <div className = 'eventpage-content'>
                        <div className = 'realname'>
                            <div className = 'name-wrap'>
                                <h1 className = 'name'>{this.state.user.realname}</h1>
                            </div>
                        </div>
                        <div className = 'description'>
                            <div className = 'description-wrapper'>
                                <div className = "banner">
                                    <p className = 'banner-text'>All Events</p>
                                </div>
                                {/* <ListGroup>
                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                </ListGroup> */}
                                <p className = 'description-text'>
                                    {this.state.user.username}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        }
}



export default Profile;