import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-l'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          Creado Para Matea
        </a>
        <li>
            Nahuel Velazques
        </li>
        <li>
            Tamara 
        </li>
        <li>
            Franco Duartes
        </li>
      </div>
    </MDBFooter>
  );
}