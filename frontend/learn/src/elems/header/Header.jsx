import React, { useState } from "react"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from "react-bootstrap/esm/Button"
import { Form } from 'react-bootstrap'
import { AutorizeButtons } from "./buttons/AutorizeButtons"

const marginTop = "5px"

const headerStyle = {
    width: "100%",
    height: "50px",
    backgroundColor: "#57ad9a",
}

const buttonGroup = {
    marginTop: marginTop,
    marginLeft: "100px",
}

const findGroup = {
    marginTop: marginTop,
}

export const Header = () => {

    const [text, setText] = useState()

    return (
        <div style={headerStyle}>
            <Container>
                <Row >
                    <Col xs>
                        <div style={findGroup}> Home </div>
                    </Col>
                    <Col xs={{ order: 12 }}>
                        <div style={buttonGroup}>
                            <AutorizeButtons/>
                        </div>
                    </Col>
                    <Col xs={{ order: 1 }}>
                        <div style={findGroup}>
                            <Form>
                                <Form.Row className="align-items-center">
                                    <Col xs="auto">
                                        <Form.Control
                                            className="mb-2"
                                            id="inlineFormInput"
                                            placeholder="Введите Название Товара"
                                            value={text}
                                            onChange={(e) => { setText(e.target.value) }}
                                        />
                                    </Col>

                                    <Col xs="auto">
                                        <Button className="mb-2" variant="info" onClick={() => console.log(text)}>
                                            Найти
                                        </Button>
                                    </Col>
                                </Form.Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}