import {useParams} from "react-router-dom"
import EventPage from "./EventPage"

function EPage() {
    let {id} = useParams()
    return (
        <EventPage eventID = {id}/>
    )
}

export default EPage