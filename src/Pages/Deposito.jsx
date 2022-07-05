import React from "react";
import "./Estilos.css";
import "../imagenes/abitab.jpg"

const Deposito = () => {
    return (
    <div className="Wos">
        <h1>Para comprar comprar tu entrada debes depositar en los siguientes locales y cargar una foto de tu comprobante:</h1>
        <ul>
            <li><a href="https://www.abitab.com.uy/abitabinter/web2.0/login.jsp?site=1&idback=13134" className="abitab"><img src="https://upload.wikimedia.org/wikipedia/commons/6/68/Socios-logo-abitab.jpg" className="abitab"/></a></li>
            <li><a href="https://auth.redpagos.com.uy/isam/sps/auth"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAACWCAMAAADABGUuAAAAYFBMVEXE1TgrJGL////Mytmfq0j2+ebT4HA4M2aYlbN5dZtTU1pjX4vh6qHy8vXt8se2xT7m5exHQnZ6gFKJkE5UUIG/vc+loruyscXZ2OKWoEqLiKmptURmaVdwdVTv89LO3Fvz8ojYAAAEtElEQVR4nO2aa3viOAyFG8yunbhZciOEQqf//19uLMmXMENLOgl0Ouf90CcVtvGRJdlO+/QEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAey/Pmm/AfpEP6bdJ/zO705XiG9LmdIP1PBtJnd4L0P5lPS98uxMkNuFtqtDl8VrrKFuLVDVgsNdoczKOlt25AvdRoc3i49N043m6pwWbxaOnajXdcaLB5rCm9aBpJYj0+nicJ7SzFGOeFG+812uvcvNi0oc2NMXaSEWMbk/+UI52zdhOT65vba9m0inTXpim248+WXHDibrtzcMqWLa2mVC94IptNrehCVb74uSt/x1JBVCe2nruIJ03J1sp3zepD6fveTzqtZLOT9dTH2LHlBudgOJFXnG3v5u0nuzHc8BDvl6Voz4PloIKsvIwNFa9yF02H+0mPysb11Ke05zm4JmHrjNX0Jl3TSCqxqAvlfu1/Mu6dSSfOyO8nvY0ts4zW/DiGdOHC4ORmRfGwey18IrhY0DJta02yUps9Za8dvDdqUlTlNh+iLFY+Gi1HifW2oXOFYX9lmmtIZ0VOruYIaKNHxmhsSHkRnECpztOnRH0hIdSllhFrr4i0VS6kdeWjgxd4r0UOu828s9wrSg9Lmcm2zdlXiEzSyxWPU0P7qfKgHADTIUV6HVY18ZAJ7pAGwTi8e1RaQTpJTOVuG+LI0vnjtKl7UlFTlkgf97FeKTWIJY8OyqzP6yFd4E3aclO+t+4rSKeAlq26veyq+eM2kU7PZQjyRHqe1r4yk3iX7YvEGd9cX/bdc6/D9YVfQfqRJRLby67iDTnenL2XulCaJeCrOHvBfWMaG0aebRIJsW+me+52PehXkJ6eyp309EbaijdEenBDWEL/PLqB5l72ua1p5zMX0n0STKRPMoJj5squvob0yanc6dxOP0+kc4V3TySz5wZKoroM1avz2ZxIJ8XDpXTfl4dXvyiYa0qfnMrT4E9N5/i4DVMeoqZx07Kxeu3ZIrlOwaGH4CxfCDKp+hu/Jcq2dz/pTVxVSWYfApqs9G7CHW2kBjZ++ryefAA9ZIn0PIjjp7FZxyca+ngIK81lvXcbA39jdV/pFNDB73xya4qiGDc3quWUEE+nhg/57CUrRbw3fB4rtWzR5XhuU6HK+eNp5St/HQUrY1Soa/mm6n3PqzNdXro/rzLntB+nQbzOkHiXDhSo8dTNV5Uh/h5q4MvEJmE+2QmooqeWyRV4Velxqxbtu9hPipu/0JxcxNNeQGttvXa5pIW7V78PWZ/1qc3vholS3scTL14/1Cwv3e1h6VsJ3bLU3fGsvYX2vyZ75e2Oc7KSm3hlfFnsSJKymTvQ+ft6534xtQ4J7rAsvjpIhcv3LH4woeTdQfqv/VFcvHPVRVr2SQctob0Iz+5auJqQ6kJtp29oxqHekS1DPPa1JM1ysoS3QMnwm3P4EtL9mfQjdNXz0vJbmRt6fPCtj5dOmXpDOz6mKsWJfPWEeiOflV6qBSlF0kdMX2INv/mt1V/9vzTz/2j6/M83Yf6qv/37TXibLR0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOBL8T9Ex1KLVaFbrQAAAABJRU5ErkJggg==" className="redpagos"/></a></li>
            <input type="file"/>
            <li><a href="./Gracias" className="btnpagar">Pagar</a></li>
        </ul>
    </div>
    
    )
}

export default Deposito