import React, { useState } from "react"
import { Button } from "react-bootstrap"
import { ModalWindow } from "../../common/modal-window/ModalWindow"
import { SignInContent } from "../modal-window-content/SignInContent"
import { RegistrationContent } from "../modal-window-content/RegistrationContent"

const signInButtonName = "Вход"
const registrationButtonName = "Регистрация"

export const AutorizeButtons = () => {

    const [modalShow, setModalShow] = useState(false);
    const [content, setContent] = useState();
    const [modalName, setModalName] = useState();

    const onHide = (e) => {
        setModalShow(false)
    }

    const signInHandler = () => {
        setModalShow(true)
        setModalName(signInButtonName)
        setContent(<SignInContent onHide={onHide} />)
    }

    const registrationHandler = () => {
        setModalShow(true)
        setModalName(registrationButtonName)
        setContent(<RegistrationContent onHide={onHide} />)
    }

    return (
        <>
            <ModalWindow
                show={modalShow}
                operationname={modalName}
                onHide={onHide}
                content={content}
            />
            <Button variant="info" onClick={signInHandler}>{signInButtonName}</Button>{' '}
            <Button variant="info" onClick={registrationHandler}>{registrationButtonName}</Button>
        </>
    )
}