import './App.css'
import Contents from './components/Contents'
import Image from './components/Image'
import ThankYou from './components/ThankYou'
import {useState} from 'react'

function App() {

  const [formData, setFormData] = useState({
    email: ''
  })

  const [msg, setMsg] = useState("");

  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErorrs = {}
    if(formData.email === '') {
      validationErorrs.email = "email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErorrs.email = "valid email required"
    }

    setErrors(validationErorrs)

    if(Object.keys(validationErorrs).length === 0) {
      // alert("Form Submitted successfully")
      const contentSct = document.getElementById('contentSct');
      const imgSct = document.getElementById('imgSct');
      const mainPage = document.getElementById('mainPage');
      const thankyouSct = document.getElementById('thankyouSct');
      contentSct.style.display = 'none';
      imgSct.style.display = 'none';
      thankyouSct.classList.remove("hidden");
      thankyouSct.classList.add("thankyou-cont-on");
      mainPage.classList.add('hidden');
    }
  }

  return (
    <div className='tablet:bg-darkGrey'>
      <div className='mobile:w-[375px] tablet:w-[1024px] mx-auto'>
        <div className='flex items-center justify-center tablet:h-screen'>
          <div className='flex mobile:flex-col tablet:flex-row-reverse tablet:w-[800px] pc:w-[1200px] bg-white tablet:rounded-3xl tablet:p-4 pc:p-5' id='mainPage'>
            <Image/>
            <Contents formData={formData} setFormData={setFormData} msg={msg} setMsg={setMsg} errors={errors} handleSubmit={handleSubmit}/>
          </div>
          <ThankYou msg={msg} setFormData={setFormData}/>
        </div>
      </div>
    </div>
  )
}

export default App