import React from "react"
import { ProductCard } from "../components/product-card/ProductCard"
import { Container, Row, Col } from "react-bootstrap"
import { getProducts } from "../services/product-service/ProductService"


const pageBody = {
    marginLeft: "17%",
    marginTop: "10px",
    height: "auto",
}

export const MainProductPage = () => {

    const products = getProducts()
    let cards = []
    products.forEach(function (item, i, arr) {
        cards.push(
            <Row >
                <Col lg={"auto"}><ProductCard value={products[i]} /></Col>
            </Row>)
    })

    return (
        <>
            <div style={pageBody}>
                <Container>

                    <Row >
                        <Col lg={"auto"}><ProductCard value={products[0]} /></Col>
                    </Row>
                </Container>
            </div>
        </>)
}