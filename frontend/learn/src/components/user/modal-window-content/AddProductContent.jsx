import React, { useState } from "react"
import { Button } from "react-bootstrap"

const cardBody = {
    height: "500px",
    width: "250px",
    border: "1px solid black",
    borderRadius: "25px",
    marginLeft: "23%",
}

const imageBodyWrapper = {
    height: "150px",
    width: "200px",
    border: "1px solid black",
    marginLeft: "30px",
    marginTop: "10px",
}

const imageBody = {
    height: "148px",
    width: "198px",
}

const nameBody = {
    marginLeft: "30px",
}

const AddProductButton = "Добавить товар"
const productName = "Название товара: "
const imageUrl = "URL изображения: "
const productPrice = "Цена твара: "
const currencyName = "Название валюты: "

export const AddProductContent = (props) => {

    const [product, setProduct] = useState({
        name: "",
        imageUrl: "",
        price: "",
        currency: "",
        ownerId: ""
    })

    const onProductNameChange = (e) => {
        setProduct({ ...product, name: e.target.value })
    }

    const onImageURLChange = (e) => {
        setProduct({ ...product, imageUrl: e.target.value })
    }

    const onProductPriceChange = (e) => {
        setProduct({ ...product, price: e.target.value })
    }

    const onProductCurrencyChange = (e) => {
        setProduct({ ...product, currency: e.target.value })
    }

    const saveProduct = () => {
        props.onHide()
    }

    return (<>
        <div style={cardBody}>
            <div style={nameBody}><label>{productName}<input value={product.name} onChange={(e) => { onProductNameChange(e) }} /></label></div>
            <div style={nameBody}><label>{imageUrl}<input value={product.imageUrl} onChange={(e) => { onImageURLChange(e) }} /></label></div>
            <div style={imageBodyWrapper}>
                <img style={imageBody} src={product.imageUrl} alt="product img" />
            </div>
            <div style={nameBody}>
                <label>{productPrice}<input value={product.price} onChange={(e) => { onProductPriceChange(e) }} /></label>
                <label>{currencyName}<input value={product.currency} onChange={(e) => { onProductCurrencyChange(e) }} /></label>
            </div>
            <div style={nameBody}><Button variant="info" onClick={saveProduct}>{AddProductButton}</Button></div>
        </div>
    </>)
}