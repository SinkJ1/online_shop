import React from "react"
import { Button } from "react-bootstrap"


const myProductsNameButton = "Мои Товары"
const baskedButtonName = "Корзина"

const circleProductCountStyle = {
    zIndex:10,
    position:"absolute",
    top:"4px",
    marginLeft:"60px",
    fontSize: "13px",
    height:"15px",
    width:"15px",
    borderRadius: "50%",
    backgroundColor:"red",
}

const textStyle = {
    marginTop:"-3px",
}

const productCountInBasked = 0

export const LoggedUserButton = () => {

    return (
        <>
            <Button variant="info">{myProductsNameButton}</Button>{" "}
            <Button variant="info">
                {baskedButtonName}
                <div style={circleProductCountStyle}>
                    <div style={textStyle}>
                        {productCountInBasked}
                    </div>
                </div>
            </Button>
        </>)

}