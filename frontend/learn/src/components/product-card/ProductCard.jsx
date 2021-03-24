import React from "react"
import { Button } from "react-bootstrap"

const addInBasketButtonName = "Добавить в корзину"

const cardBody = {
    height: "250px",
    width: "250px",
    border: "1px solid black",
    borderRadius: "25px",
}

const imageBodyWrapper = {
    height: "150px",
    width: "200px",
    border: "1px solid black",
    marginLeft: "24px",
    marginTop: "10px",
}

const imageBody = {
    height: "148px",
    width: "198px",
}

const priceBody = {
    marginLeft: "5px",
    marginTop: "15px",
}

const nameBody = {
    marginLeft: "99px",
}

export const ProductCard = (props) => {

    const { name, imageUrl, price, currency } = props.value

    return (<>
        <div style={cardBody}>
            <div style={nameBody}>{name}</div>
            <div style={imageBodyWrapper}>
                <img style={imageBody} src={imageUrl} alt="product img"/>
            </div>
            <div style={priceBody}>
                {price} {currency} <Button variant="info">{addInBasketButtonName}</Button>
            </div>
        </div>
    </>)
}