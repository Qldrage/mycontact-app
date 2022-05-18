import React from 'react'
import Form from './Form'
 import List from './List'
 import {useState} from "react"
function Contacts () {
  const [contacts,setContacts] = useState([]);
  return (
  
    <div>
        <List/>
        <Form setContacts={setContacts} /> 
    </div>
  );
};

export default Contacts  