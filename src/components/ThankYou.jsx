import React from 'react'

function ThankYou({ msg, setFormData }) {

  const resetForm = () => {
    const contentSct = document.getElementById('contentSct');
    const imgSct = document.getElementById('imgSct');
    const mainPage = document.getElementById('mainPage');
    const thankyouSct = document.getElementById('thankyouSct');
    const emailInput = document.getElementById('emailInput');
    contentSct.style.display = 'block';
    imgSct.style.display = 'block';
    thankyouSct.classList.remove("thankyou-cont-on");
    thankyouSct.classList.add("hidden");
    mainPage.classList.remove("hidden");
    setFormData({email: ''})
    emailInput.value = '';
  }

  return (
    <div className="hidden rounded-3xl" id='thankyouSct'>
      <img className="icon block my-auto mx-6 tablet:w-[45px] pc:w-[56px]" src="https://raw.githubusercontent.com/YousefKhalid-iq/newsletter-signup-form/main/assets/images/icon-success.svg" alt="" />
      <h1 className="text-[2.25em] pc:text-[2.75em] font-[700] text-charcoalGrey thankyou-header mx-6 leading-none py-6">Thanks for subscribing!</h1>
      <p className="text-darkGrey thankyou-para mx-6 text-[0.8em] pc:text-[1.1em]">
        A confirmation email has been sent to <br></br><span className="font-[700]" href="#">{msg}</span>. Please open it and click the button inside to confirm your subscription.
      </p>
      <div className="text-center dismiss-btn">
        <button onClick={resetForm} className='main-btn hover:shadow-tomato hover:shadow-lg w-[90%]'>Dismiss message</button>
      </div>
    </div>
  )
}

export default ThankYou