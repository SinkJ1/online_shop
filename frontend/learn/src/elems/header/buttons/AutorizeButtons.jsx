import React, { useState } from "react"
import { Button } from "react-bootstrap"
import { AutorizeModal } from "../modals/AutorizeModal";
import { SignInContent } from "../modals/content/SignInContent";
import { RegistrationContent } from "../modals/content/RegistrationContent";

const signInButtonName = "Вход"
const registrationButtonName = "Регистрация"

export const AutorizeButtons = () => {

    const [modalShow, setModalShow] = useState(false);
    const [content, setContent] = useState();
    const [modalName, setModalName] = useState();

    const signInHandler = () => {
        setModalShow(true)
        setModalName(signInButtonName)
        setContent(<SignInContent />)
    }

    const registrationHandler = () => {
        setModalShow(true)
        setModalName(registrationButtonName)
        setContent(<RegistrationContent />)
    }

    return (
        <>
            <AutorizeModal
                show={modalShow}
                operationname={modalName}
                onHide={() => setModalShow(false)}
                content={content}
            />
            <Button variant="info" onClick={signInHandler}>{signInButtonName}</Button>{' '}
            <Button variant="info" onClick={registrationHandler}>{registrationButtonName}</Button>
        </>
    )
}