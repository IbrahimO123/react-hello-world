import React, { useState } from 'react'

function Form() {
    const profile = {
        name : "Oliyide Ibrahim",
        email :"oliyideibrahim123@gmail.com",
        password : "Owolabi#854"
    }
    
    const[name, setState] = useState(profile.name)
    const[email,changeEmail] = useState(profile.email)

    const section = {
        backgroundColor:"grey",
        padding:"10px",
        display:"block",
        fontSize:14,
    }
    // function changeType(){
    //     let b = document.getElementById("password")
    //        if (b.type === "password") {
    //            b.type = "type"
    //        }
    //        else {
    //            b="passworrd"
    //         }
    // }
    return (
        <div className="form" style={section}>
        <p className="details" >Login Details</p>
        <p>
        <label className="form-label" htmlFor="name" >Name:</label>
        <input type="text" placeholder="Name" value={name} onChange={(e)=>{setState(e.target.value);console.log(e.target.value)}}  className="form-input" id="name"></input>
        </p>
        <p>
        <label className="form-label" htmlFor="email" >Email:</label>
        <input type="email" placeholder="Email" className="form-input" id="email" value={email} onChange={(mail)=>{changeEmail(mail.target.value)}}></input>
        </p>
        <p>
        <label className="form-label" htmlFor="password">Password:</label>
        <input type="password" placeholder="Password" className="form-input" id="password"></input>
        </p>
        <p className="box box-text" >
        <input type="checkbox" placeholder="Password" className="box box-check" id="shows"></input>
        Show Password
        </p>
        <button type="submit" id="submit" className="submit form-button">Log In</button>
        </div>
    )
}

export default Form
