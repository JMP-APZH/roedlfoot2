import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useState } from 'react';

import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
} from "@redwoodjs/forms";


import { toast, Toaster } from "@redwoodjs/web/toast";
import axios from "axios"


const HomePage = () => {

  const [username, setUsername] = useState("")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [passwort, setPasswort] = useState("")

  const onSubmit = async () => {
    const payload = {
      username: username,
      fullName:fullName,
      email: email,
      password: password,
      tournamentId: tournamentId,
      salt: salt
    };
    const response = axios.post("/...", payload)
    console.log(response.data)
  }
    // console.log("Data from onSubmit:", response)

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.jsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
      <Form onSubmit={onSubmit}>
      <Label
        name="roedlEMail"
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        Roedl E-Mail
      </Label>
      <TextField
        name="roedlEMail"
        className="rw-input"
        errorClassName="rw-input rw-input-error"
        // ref={roedlEMailRef}
        validation={{
          required: {
            value: true,
            message: "Roedl E-Mail is required",
          },
        }}
        onChange={e => setEmail(e.target.value)}
      />

      <Label
        name="passwort"
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        Passwort
      </Label>
      <TextField
        name="passwort"
        className="rw-input"
        errorClassName="rw-input rw-input-error"
        // ref={roedlEMailRef}
        validation={{
          required: {
            value: true,
            message: "Passwort nötig",
          },
        }}
        onChange={e => setPasswort(e.target.value)}
      />
      </Form>
    </>
  )
}

export default HomePage
