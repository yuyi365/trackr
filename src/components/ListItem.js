import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const ListItem = ({name, id, setListId}) => {

    const style = {
        color:"#0A2342",
        position: "absolute",
        top: "40%",
        right: "25%"
    }

    return (
    <Card raised stackable className="list-card-item" as={Link} to={`/lists/${id}`} onClick={()=> setListId(id)} style={{display: "flex"}}>
        <Card.Content style={{color:"#0A2342"}}>
            <Card.Header style={style}>{name}</Card.Header>
        </Card.Content>
    </Card>
    )
}

export default ListItem
