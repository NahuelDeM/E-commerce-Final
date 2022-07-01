import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <MDBFooter className='background-color' > 
     
    <div class='mx-auto style=width:600px'>
        <label for="exampleFormControlInput1" class="form-label">Escriba su email</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
        <label for="exampleFormControlTextarea1" class="form-label">Escriba su consulta</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      <button className="bg-primary btn btn-primary btn-block">enviar</button>
    </div>

    <div>
        <li className='text-success d-flex justify-content-between  font-size  30px'>
            Nahuel Velazques
        </li>
        <li className='text-success d-flex justify-content-between font-size: 30px'>
            Tamara 
        </li>
        <li className="text-success d-flex justify-content-between font-size: 30px">
            Franco Duarte
        </li>
    </div>

        <a className='text-danger d-flex justify-content-end Danger link'>
          <p class="text-danger">Creado Para Matea</p>
        </a>
  
    </MDBFooter>
  );

  
}