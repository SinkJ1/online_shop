import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"

const registrationButtonName = "Регистрация"

export const RegistrationContent = () => {

    const [user, setUser] = useState({
        email: "",
        name: "",
        password: ""
    })

    const onEmailChange = (e) => {
        setUser({ ...user, email: e.target.value })
    }

    const onPasswordChange = (e) => {
        setUser({ ...user, password: e.target.value })
    }

    const onNameChange = (e) => {
        setUser({ ...user, name: e.target.value })
    }

    const inButtonHandler = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={user.email} onChange={onEmailChange} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={user.name} onChange={onNameChange} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={user.password} onChange={onPasswordChange} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={inButtonHandler}>
                    {registrationButtonName}
                </Button>
            </Form>
        </>
    )
}