import React from "react"
import { Modal } from "react-bootstrap"

export const ModalWindow = (props) => {
    return (
        <Modal
            {...props}
            size="auto"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.operationname}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.content}
            </Modal.Body>
        </Modal>
    );
}
