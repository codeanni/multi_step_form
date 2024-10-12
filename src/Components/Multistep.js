import React, { useState } from 'react'
import Personal_Info from './Personal_Info'
import Address_Info from './Address_Info';
import Confirmation from './Confirmation';
import Tabs from './Tabs';
import Thankyou from './Thankyou';

const Multistep = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        number: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipCode: ''
    })
    const [step, setStep] = useState(1)
    const [isSubmitted, setIsSubmitted] = useState(false); //for submission
    const [error, setError] = useState(''); // for track validationerrors

    const handleChange = (e)=> {
        const name = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setData({
            ...data,
            [name] : value
        });
    }
    //validation
    const validateForm = () => {
        const { name, email, number, address1, city, state, zipCode } = data;
        // Check for empty fields
        if (!name || !email || !number || !address1 || !city || !state || !zipCode) {
          setError('Please fill in all the required fields');
          return false;  // Form is invalid
        }
        setError('');  // Clear previous errors
        return true;  // Form is valid
      };


    const nextStep =() =>{
        if(step === 3){
            if (validateForm()) {
            setIsSubmitted(true);
            console.log(data)
            }
        }else{
            setStep((prevStep) => prevStep + 1);
        }
    };
    const backStep =()=>{
        setStep((prevStep) => prevStep - 1);
        // setStep((prevStep)=>{
        //     return prevStep - 1
    };

  return (
   
    <div className='bg-dark vh-100'>
        <div className="container d-flex justify-content-center align-items-center">
        <div className="card p-3 w-50 mt-5">

        {/* Tabbed Navigation */}
      <Tabs currentStep={step} setStep={setStep} />


    {/* Step Content   */}
    {!isSubmitted ? (
            <>
        {
            {
                1: <Personal_Info PersonalInfo={data} handleChange={handleChange}/>,
                2: <Address_Info PersonalInfo={data} handleChange={handleChange}/>,
                3: <Confirmation data={data}/>,
            }[step]
        }
        {/* Buttons */}
        <div className='d-flex justify-content-around px-5 mt-4'>
            {step > 1 && <button className='btn btn-warning' onClick={backStep}>
                Back
            </button>}
        <button className='btn btn-warning' onClick={nextStep}>
            {
                step === 3 ? 'Submit' : 'Next'
            }
            </button>
            </div>
            {/* Display error message if form validation fails */}
            {error && <p className="text-danger text-center mt-3">{error}</p>}
            </>
          ) : (
            <Thankyou />  // Show the ThankYou after submission
          )}
        </div>
        </div>
    </div>
  )
}

export default Multistep
