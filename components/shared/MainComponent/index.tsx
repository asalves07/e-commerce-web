import React from 'react';
import Header from '../Header/StoreFrontHeader'

const MainComponent: React.FC = ({ children }) => {
  return (
    <div className="d-flex flex-column sticky-wrapper">
      <Header />

      <div className="container flex-fill" >
        { children }
      </div>
    </div>
)}

export default MainComponent;