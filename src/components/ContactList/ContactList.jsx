import s from './ContactList..module.css'
const ContactList = (props)=>{     
    
    return(
        <ul>
            {props.filter === '' ?(
                    props.listContact.map(contact=>(
                        <li key={contact.id}>{contact.name} {contact.number} <button className={s.button} data-id={contact.id} onClick={props.onDelete}>Delete</button></li>                    
                    ))
                ):(
                    props.listContact.filter(contact=>(contact.name.includes(props.filter.toUpperCase()))).map(contact=>(
                        <li key={contact.id}>{contact.name} {contact.number} <button data-id={contact.id} onClick={props.onDelete}>Delete</button></li>
                    ))
                )
            }
                     
        </ul>
    )
}
export default ContactList;