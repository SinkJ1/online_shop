import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"

const signInButtonName = "Войти"

export const SignInContent = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const onEmailChange = (e) => {
        setUser({ ...user, email: e.target.value })
    }

    const onPasswordChange = (e) => {
        setUser({ ...user, password: e.target.value })
    }

    const signInButtonHandler = (e) => {
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
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={user.password} onChange={onPasswordChange} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={signInButtonHandler}>
                    {signInButtonName}
                </Button>
            </Form>
        </>)
}