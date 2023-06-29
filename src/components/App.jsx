import React, {Component} from "react";
import Section from "./Section/Section";
import Form from './Form/Form';
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
class App extends Component {

  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }

  search=(name)=>{
    let enc = 0;
    for (const contact of this.state.contacts) {
      if(contact.name === name.toUpperCase() ){
          enc = 1;
      }
    }
    return enc;
  }

  heandleSave=(e)=>{
    let enc;
    e.preventDefault();    
    const name = e.currentTarget.elements.name.value.toUpperCase();
    const number = e.currentTarget.elements.number.value;
    enc = this.search(name);
    if(enc === 1){
      alert(name + ' is already in contacts')
    }else{
      this.setState(prevState=>{
        return { contacts: [...prevState.contacts, {id: 'id'+(this.state.contacts.length+1), name: name, number:number}]}
      })
    }
    e.target.reset();   
  }

  heandleSevFilter=(e)=>{
    e.preventDefault();    
    const filter = e.target.value;
    this.setState(
      {filter: filter}
    )    
  }
  handleDeleteContact = (e)=>{
    e.preventDefault();
    const id = e.target.dataset.id;
    this.setState(prevState=>({
      contacts: prevState.contacts.filter(contact=>(contact.id !== id))
    }))
  }

  componentDidMount(){
    const listContact = JSON.parse(localStorage.getItem('contact'));
    if(listContact !== null){
      this.setState({
        contacts: listContact
      })
    }
  }

  componentDidUpdate(prevState){
    const {contacts} = this.state;
    if(prevState.contacts !== contacts){
      localStorage.setItem('contact', JSON.stringify(contacts))
    }
    if(contacts.length === 0){
      localStorage.removeItem('contact')
    }

  }

  render(){
    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
       <Section tittle="Phonebook">
          <Form onSave={this.heandleSave} />
       </Section>
        <h5>Contacts</h5>
        <Filter filter={this.heandleSevFilter}/>
        <ContactList listContact={this.state.contacts} filter={this.state.filter} onDelete={this.handleDeleteContact}/>           
       
      </div>
    );
  }  
};

export default App;