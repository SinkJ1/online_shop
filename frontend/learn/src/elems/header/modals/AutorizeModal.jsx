import React from "react"
import { Modal } from "react-bootstrap"

export const AutorizeModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
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
