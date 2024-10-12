import React from 'react'

const Personal_Info = (props) => {
    // console.log(props);
    const {name, email, number} = props.PersonalInfo;

    
  return (
    <div>
        <h4 className='text-center text-success'>Personal Information</h4>
        <div className='mb-3'>
            <label className='form-label'>Name</label>
            <input className='form-control' type='text' name='name' value={name} placeholder='e.g: john'
            onChange={props.handleChange}
            required/>
        </div>
        <div className='mb-3'>
        <label className='form-label'>Email</label>
        <input className='form-control' type='email' name='email' placeholder='e.g: john@gmail.com'
        value={email}
        onChange={props.handleChange} required/>
        </div>
        <div>
        <label className='form-label'>Phone</label>
        <input className='form-control' type='tel' name='number' placeholder='e.g: 10 digit number'
        value={number} 
        onChange={props.handleChange}
        required/>
        </div>

    </div>   
  )
}

export default Personal_Info