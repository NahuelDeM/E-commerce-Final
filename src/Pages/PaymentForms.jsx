import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import "./Estilos.css"
import Gracias from './Gracias'
import { withRouter } from 'react-router-dom';


const PaymentForms = () => {

    const [state, setState] = useState({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        focus: ""
    })

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const handleFocusChange = (e) => {
        setState({
            ...state,
            focus : e.target.name
        })
    }

    const processPayment = () => {
        console.log("number => ", state.number)
        console.log("name => ", state.name)
        console.log("expiry => ", state.expiry)
        console.log("cvc => ", state.cvc)
        console.log(JSON.stringify(state))
    }

    return (
        <div className="card">
            <div className="card-body">

                <Cards
                    number={state.number}
                    name={state.name}
                    expiry={state.expiry}
                    cvc={state.cvc}
                    focused={state.focus}
                />
                <form>
                    <div className="form-group">
                        <label htmlFor="number">Número de la tarjeta</label><br/>
                        <input
                            type="text"
                            name="number"
                            id="number"
                            maxLength="16"
                            className="form-control"
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label><br />
                        <input
                            type="text"
                            name="name"
                            id="name"
                            maxLength="30"
                            className="form-control"
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="expiry">Fecha de expiración</label><br />
                            <input
                                type="text"
                                name="expiry"
                                id="expiry"
                                maxLength="4"
                                className="form-control"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="cvc">CVC</label><br />
                            <input
                                type="text"
                                name="cvc"
                                id="cvc"
                                maxLength="4"
                                className="form-control"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                            />
                        </div>
                    </div>

                    <a href="/Gracias" className='btnpagar'>Comprar</a>
                </form>
            </div>
        </div>
    )
}

export default PaymentForms