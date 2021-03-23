import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { signIn } from "../../../../store/reducers/user/UserReducer"


const signInButtonName = "Войти"
const passwordLable = "Password"
const eMailLable = "Email address"

export const SignInContent = (props) => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const dispatch = useDispatch()

    const onEmailChange = (e) => {
        setUser({ ...user, email: e.target.value })
    }

    const onPasswordChange = (e) => {
        setUser({ ...user, password: e.target.value })
    }

    const signInButtonHandler = (e) => {
        const payload = {
            user
        }

        dispatch(signIn(payload))

        props.onHide()
        e.preventDefault()
    }

    return (
        <>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>{eMailLable}</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={user.email} onChange={onEmailChange} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>{passwordLable}</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={user.password} onChange={onPasswordChange} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={signInButtonHandler}>
                    {signInButtonName}
                </Button>
            </Form>
        </>)
}