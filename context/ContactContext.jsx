import React, { createContext, useState } from 'react';


const ContactContext = createContext();


export const ContactProvider = ({ children }) => {
   const [contact,setContact]=useState(false);
   const toggleContact = ()=>{
    setContact(!contact)
  }

  return (
    <ContactContext.Provider value={{ contact, toggleContact }}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactContext;
