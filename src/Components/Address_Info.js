import React from 'react'

const Address_Info = (props) => {
    // console.log(props)
    const {address1,address2,city,state,zipCode} = props.PersonalInfo;
  return (
    <div>
        <h4 className='text-center text-success'>Address Information</h4>
        <div>
            <label className='form-label'>Address Line 1</label>
            <input className='form-control' type='text' name='address1' placeholder='Address-1'
            value={address1}
            onChange={props.handleChange}
            required/>
        </div>
        <div>
        <label className='form-label'>Address Line 2</label>
        <input className='form-control' type='text' name='address2' placeholder='Address-2'
        value={address2}
        onChange={props.handleChange}
        required/>
        </div>
        <div>
        <label className='form-label'>City</label>
        <input className='form-control' type='text' name='city' placeholder='City'
        value={city}
        onChange={props.handleChange}
        required/>
        </div>
        <div>
        <label className='form-label'>State</label>
        <input className='form-control' type='text' name='state' placeholder='State'
        value={state}
        onChange={props.handleChange}
        required/>
        </div>
        <div>
        <label className='form-label'>Zip Code</label>
        <input className='form-control' type='text' name='zipCode' placeholder='Zip Code'
        value={zipCode}
        onChange={props.handleChange}
        required/>
        </div>
    </div>
  )
}

export default Address_Info