import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Form =()=>{

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleClick =(e)=>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/customer/create`,{
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password
        })
        .then(res => console.log('Posting data', res)).catch(err => console.log(err))
        alert('You have successfully created an account!')
        window.location = "http://localhost:3000"
    }

    return(
        <>
        <main className='form-main container'>
            <h1 className='form-title'>Create an account:</h1>
            <p className='form-page-text'>Create your GameOn account here to start playing games today!</p>

            <form className='' action='#'>           

                <div className='row'>
                    <div className='col-md-6'>
                        <label htmlFor="firstName" className='form-label email-label form-label-text'>First Name:</label>
                        <input type="firstName" className='email form-input-edits' id="firstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required />
                    </div>
                    <div className='col-md-6'>
                        <label htmlFor="lastName" className='form-label email-label form-label-text'>Last Name:</label>
                        <input type="lastName" className='email form-input-edits' id="lastName" value={lastName} onChange={(e)=>setLastName(e.target.value)} required />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-12'>
                        <label htmlFor="email" className='form-label email-label form-label-text'>Email:</label>
                        <input type="email" className='email form-input-edits' id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                    </div>
                </div>
                
                <div className='row'>
                    <div className='col-md-12'>
                        <label htmlFor="password" className='form-label password-label form-label-text'>Password:</label>
                        <input type="password" className='password form-input-edits' id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-12'>
                        <label htmlFor="dob" className='form-label dob-label form-label-text'>Born:</label>
                    </div>
                        <input type="date" className='dob' id="dob" required />
                </div>

                <div className='row '>
                    <div className='col checkbox-div'>
                        <input type="checkbox" className="form-check-input" id="checkbox" />
                        <label className="form-check-label checkbox-text" htmlFor="checkbox">Click to Accept our Privacy Policies</label>
                    </div>
                    <button type="submit" className="btn btn-primary submit-btn" onClick={handleClick}>Submit</button>
                    
                </div>

            </form>
        </main>
        </>
    )
}

export default Form