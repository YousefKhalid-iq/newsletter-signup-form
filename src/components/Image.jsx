import React from 'react'

function Image() {
  return (
    <div className="" id='imgSct'>
      <div className='tablet:hidden'>
        <img className='block w-[100%]' src="https://raw.githubusercontent.com/YousefKhalid-iq/newsletter-signup-form/main/assets/images/illustration-sign-up-mobile.svg" />
      </div>
      <div className='mobile:hidden tablet:inline tablet:w-[400px] pc:w-[500px]'>
        <img className='block w-[100%]' src="https://raw.githubusercontent.com/YousefKhalid-iq/newsletter-signup-form/main/assets/images/illustration-sign-up-desktop.svg" />
      </div>
    </div>
  )
}

export default Image