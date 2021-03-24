import React from "react"
import { ProductCard } from "../components/product-card/ProductCard"
import { Container, Row, Col } from "react-bootstrap"

const pageBody = {
    marginLeft: "17%",
    height: "auto",
}

const rowStyle = {
    marginTop: "10px",
}

export const MainProductPage = (props) => {

    const products = props.value
    let columns = []
    let rows = []
    let buffer = []

    products.forEach(function (item, i) {
        columns.push(
            <Col lg={"auto"} key={i}><ProductCard key={i} value={item} /></Col>
        )
    })


    columns.forEach(function (item, i) {
        if (i % 3 === 0 && i !== 0) {
            rows.push(<Row key={i} style={rowStyle} >{buffer}</Row>)
            buffer = []
        }
        buffer.push(item)
        if (i === columns.length - 1) {
            rows.push(<Row key={i} style={rowStyle} >{buffer}</Row>)
        }
    })

    return (
        <>
            <div style={pageBody}>
                <Container>
                    {rows}
                </Container>
            </div>
        </>)
}