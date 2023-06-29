import s from './Form.module.css'
const Form = props =>{    
    return(
        <form className={s.form} onSubmit={props.onSave}>
        <label htmlFor="name">Name</label>
        <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id="name"
            className={s.input}
        />
        <label htmlFor="number">Number</label>
        <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id='number'
            className={s.input}
        />
        <button type='submit'>Add Contact</button>
    </form>
    )   
}

export default Form;