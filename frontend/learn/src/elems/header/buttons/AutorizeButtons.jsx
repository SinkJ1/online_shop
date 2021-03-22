import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap"

export const AutorizeButtons = () => {


    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
              </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
              </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Войти</Button>
                </Modal.Footer>
            </Modal>
        );
    }
    const [modalShow, setModalShow] = useState(false);


    return (
        <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
            <Button variant="info" onClick={() => setModalShow(true)}>Вход</Button>{' '}
            <Button variant="info">Регистрация</Button>
        </>
    )

}