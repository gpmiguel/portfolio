import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const PopupModal = (props) => {
  return (
    <Popup trigger={<button class="button" className={props.class}> Submit </button>} modal>   
   {close => (
      <div className="modal">
        <button className="close bg-gray-900 text-white text-lg py-1 px-2" onClick={close}>
          &times;
        </button>
        <div className="header"> Email Sent! </div>
        <div className="content">
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
          Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
          delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
          commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
          explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
        </div>
        <div className="actions flex items-center justify-center justify-content">
          <button
            className="button inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-md m-3"
            onClick={() => {
              console.log('Close Modal');
              close();
            }}
          >
            Close
          </button>
        </div>
      </div>
    )}
    </Popup>
)}

export default PopupModal


