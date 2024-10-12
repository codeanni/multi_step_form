import React from 'react';

const Tabs = ({ currentStep, setStep }) => {
  return (
    <div className="d-flex justify-content-around mb-4">
      <button 
        className={`btn ${currentStep === 1 ? 'btn-primary' : 'btn-secondary'}`}
        onClick={() => setStep(1)}
      >
        Personal Info
      </button>
      <button 
        className={`btn ${currentStep === 2 ? 'btn-primary' : 'btn-secondary'}`}
        onClick={() => setStep(2)}
      >
        Address Info
      </button>
      <button 
        className={`btn ${currentStep === 3 ? 'btn-primary' : 'btn-secondary'}`}
        onClick={() => setStep(3)}
      >
        Confirmation
      </button>
    </div>
  );
};

export default Tabs;
