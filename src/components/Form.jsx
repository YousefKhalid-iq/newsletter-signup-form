import React from 'react';
import '../App.css'

const Form = ({ formData, setFormData, setMsg, errors, handleSubmit }) => {

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({
      ...formData, [name] : value
    })
  }

  const displayEmail = () => {
    setMsg(formData.email);
  }

  return (
    <form onSubmit={handleSubmit}
      className="flex flex-col mt-10"
      noValidate>
      <div className="flex justify-between">
        <label htmlFor="email" className="font-[700] text-charcoalGrey text-[11px] pb-2">
          Email address
        </label>
        <p className="text-tomato text-[12px]">{errors.email}</p>
      </div>
      <input className={errors.email ? 'error' : 'noError'} 
      id='emailInput'
      type="email" 
      name="email" 
      placeholder="email@company.com" 
      autoComplete="off"
      onChange={handleChange}
      />
      <button 
      className="main-btn hover:shadow-tomato hover:shadow-lg"
      onClick={displayEmail}
      >
        Subscribe to monthly newsletter
      </button>
    </form>
  )
}

export default Form