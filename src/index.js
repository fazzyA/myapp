import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import MediaCard from './MediaCard';
import pic from './flower.jpg'
import Gate from './Gate';
ReactDOM.render(
  <React.StrictMode>
    <Gate isOpen={true}/>
    {/* <MediaCard title="My title" body={(<>this is <b>bold</b> text</>)} imageUrl={pic}/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
