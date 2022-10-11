import classes from './UsersList.module.css'
import Card from '../UI/Card';
const UsersList = (props) => {
    return ( 
        <Card className={classes.users}>
            <ul>
                {props.users.map(item=>(
                    <li key={item.id} style={{display:"flex", justifyContent:"space-evenly"}}>
                     <b>Name:</b> {item.name} <b>Age:</b> {item.age} <b>Designation:</b> {item.designation}
                    </li>
                ))}
            </ul>
        </Card>
     );
}
 
export default UsersList;