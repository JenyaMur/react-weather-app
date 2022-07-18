import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Heading from './Heading';
import SearchForm from './SearchForm';
import reportWebVitals from './reportWebVitals';
import GithubLink from './GithubLink';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Heading />
    <SearchForm />
    <GithubLink />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
