import React from "react";
import Form from "./Form";
import "../App.css";

const Contents = ({ formData, setFormData, setMsg, errors, handleSubmit }) => {
  return (
    <div className={`font-roboto mobile:w-[90%] tablet:w-[60%] pc:w-[55%] mobile:m-auto tablet:pt-4 tablet:px-8 pc:px-14`}>
      <div className="" id="contentSct">
        <h1 className="text-[2.25em] tablet:text-[2.75em] pc:text-[3.5em] font-[700] text-charcoalGrey mobile:mt-6 tablet:mt-0">Stay updated!</h1>
        <p className="text-darkGrey">Join 60,000+ product managers receiving monthly updates on:</p>
        <div className="flex space-x-4">
          <img className=" tablet:mt-3" src="https://raw.githubusercontent.com/YousefKhalid-iq/newsletter-signup-form/main/assets/images/icon-list.svg" />
          <p className="text-darkGrey pt-3"> Product discovery and building what matters</p>
        </div>
        <div className="flex space-x-4">
          <img className=" tablet:mt-3" src="https://raw.githubusercontent.com/YousefKhalid-iq/newsletter-signup-form/main/assets/images/icon-list.svg" />
          <p className="text-darkGrey pt-3"> Measuring to ensure updates are a success</p>
        </div>
        <div className="flex space-x-4">
          <img
            className=" mt-2 tablet:mt-6 pc:mt-3"
            src="https://raw.githubusercontent.com/YousefKhalid-iq/newsletter-signup-form/main/assets/images/icon-list.svg"
          />
          <p className="text-darkGrey pt-3 tablet:pt-6 pc:pt-3"> And much more!</p>
        </div>
        <Form formData={formData} setFormData={setFormData} setMsg={setMsg} errors={errors} handleSubmit={handleSubmit} />
        <div className="font-[roboto] text-[11px] text-center">
          Challenge by{" "}
          <a className="text-links" href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a className="text-links" href="https://github.com/YousefKhalid-iq/newsletter-signup-page">
            Yousef Khalid
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default Contents;
