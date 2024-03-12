import React, { useState } from 'react'
import {useFormik} from 'formik'
import CustomButton from './CustomButton';
import PhoneInput from 'react-phone-number-input'


const Contact = ({contact,toggle}) => {
    const [phone,setPhone]=useState()
    const formik = useFormik({
    initialValues: {
      prenom:'',
      email: '',
      phoneNumber: '',
      type:'',
      msg:'',
      
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.prenom) {
        errors.prenom = 'Name required';
      }
      if (!values.phoneNumber) {
        errors.phoneNumber = 'Phone number is required';
      }
      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    },
});
console.log("phone:",phone,'formik phone:',formik.values.phoneNumber)

  
  return (
    
    <div className={contact? "sidebar-active":"sidebar-container"}>  
        <div className={contact? "contact-form active":"contact-form"}>
            <div className="d-flex aic archivo">
                <button className="close-btn" onClick={toggle}>&#129064;</button>
                <h1 className="archivo f24">Contact</h1>
            </div>          
            <form className="container p-md-3 formik" onSubmit={formik.handleSubmit}>
                <div className="row d-flex flex-md-row flex-sm-column my-5">
                    <div className="col-md-6 d-flex flex-column">
                        <label htmlFor="prenom" className='manrope f14 text-noir mb-2'>Nom et Prénom</label>
                        <input className='manrope fw-500' type="text" name="prenom" id="" placeholder='Nom & Prénom' onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.prenom} />
                        
                        
                    </div>
                    <div className="col-md-6 d-flex flex-column">
                        <label htmlFor="email" className='manrope f14 text-noir fw-medium mb-2'>Email</label>
                        <input className='manrope fw-500' type="email" name="email" id="" placeholder='Email' onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}/>
                        
                    </div>
                </div>
                <div className="row d-flex flex-md-row flex-sm-column my-5">
                    <div className="col-md-6 d-flex flex-column">
                        <label htmlFor="phone" className='manrope f14 text-noir fw-medium mb-2'>Téléphone</label>
                        {/* <input className='manrope fw-500' type="tel" name="phone" id="" placeholder='Numéro de téléphone'onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}/> */}
                        <PhoneInput
                        defaultCountry="FR"
                        placeholder="Enter phone number"
                        value={formik.values.phoneNumber}
                        onChange={(value) => formik.setFieldValue('phoneNumber', value)}/>
                    </div>
                    <div className="col-md-6 d-flex flex-column">
                        <label htmlFor="prestation" className='manrope f14 text-noirfw-medium mb-2'>Type de demande</label>
                        <select className='manrope fw-500' placeholder='Choose a type' name="type" id="" onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.type}>   
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                    </select>
                    </div>
                </div>
                <div className="row my-5 px-2  d-flex jcc">
                    <label htmlFor="msg fw-500" className='manrope f14 text-noir fw-medium px-0 mb-2'>Message</label>
                    <textarea className='text-area' name="msg" id="" cols="30" rows="10" placeholder='Décrivez votre demande'onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.msg}></textarea> 
                </div>
                
                <div className='d-flex justify-content-end my-5'>
                    <CustomButton text="envoyer mon message" style ='bg-yellow text-uppercase border-0 p-3 ' link="#"/>
                </div>
            </form>
            
        </div>
    </div> 
       
    
  )
}

export default Contact


{/* <div>
                    <div className='row'>
                        <div className="half">
                            <label htmlFor="prenom">Nom et Prénom</label>
                            <input type="text" name="prenom" id="" placeholder='Nom & Prénom' onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.prenom} />
                        </div>
                        <div className="half">
                            <label htmlFor="nom">Nom</label>
                            <input type="text" name="nom" id="" placeholder='Nom' onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.nom}/>
                        </div>       
                    </div>
                </div>
                <div >
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder='Email' onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}/>
                </div>
                <div >
                    <label htmlFor="phone">Téléphone</label>
                    <input type="number" name="phone" id="" placeholder='Numéro de téléphone'onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}/>
                </div>
                < div >
                    <div className="row">
                        <div className="half">
                            <label htmlFor="participants">Participants</label>
                            <input type="text" name="participants" id="" placeholder='Participant'onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.participants}/>
                        </div>
                        <div className="half">
                            <label htmlFor="date">Date</label>
                            <input type="date" name="date" id="" onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.date} />
                        </div>
                          
                    </div>
                </div>
                <div>
                    <label htmlFor="msg">Message</label>
                    <textarea name="msg" id="" cols="30" rows="10" placeholder='Décrivez votre demande'onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.msg}></textarea>
                </div> */}