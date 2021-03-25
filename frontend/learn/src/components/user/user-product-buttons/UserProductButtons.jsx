import React, { useState } from "react"
import { Button } from "react-bootstrap"
import { ModalWindow } from "../../common/modal-window/ModalWindow"
import { AddProductContent } from "../modal-window-content/AddProductContent"

const addProductButton = "Добавить товар"
const manyDeleteProductButton = "Удалить товар"
const buttonsStyle = {
    marginTop: "10px",
    marginLeft: "250px",
}

export const UserProductButtons = () => {

    const [modalShow, setModalShow] = useState(false);
    const [content, setContent] = useState();
    const [modalName, setModalName] = useState();

    const onHide = (e) => {
        setModalShow(false)
    }

    const addProduct = () => {
        setModalShow(true)
        setModalName(addProductButton)
        setContent(<AddProductContent onHide={onHide} />)
    }

    const deleteProducts = () => {

    }

    return (
        <>
            <div style={buttonsStyle}>
                <ModalWindow
                    show={modalShow}
                    operationname={modalName}
                    onHide={onHide}
                    content={content}
                />
                <Button variant="info" onClick={addProduct}>{addProductButton}</Button>{" "}
                <Button variant="info" onClick={deleteProducts} >{manyDeleteProductButton}</Button>
            </div>
        </>)
}