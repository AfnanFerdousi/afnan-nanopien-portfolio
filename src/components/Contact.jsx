import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';


const Contact = () => {
  const { register, handleSubmit, errors } = useForm();

  const sendEmail = async (data) => {
    try {
      await axios.post('http://localhost:5000/api/v1/contact/sendEmail', data);
      toast.success('Email sent to Afnan 😃', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      // Handle errors (e.g., display an error message)
      toast.error("Couldn't send email 🤧", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  return (
    <div className=" px-0 mx-0 bg-gradient-to-r from-[#0F192E] to-[#C23E5A] my-auto rounded-xl">
      <div
        // data-aos="fade-up"
        // data-aos-duration="3000"
        className="h-[50vh] text-center flex flex-col items-center justify-center py-10 "
      >
        <h2 className="font-Raleway font-bold lg:md:text-5xl text-3xl flex flex-col text-[#fff] text-center">
          Let’s check my projects
        </h2>
        <p className="font-montserrat lg:md:text-lg text-[14px] text-[#C4C4C4] lg:md:w-[50%] w-[100%] text-center my-4 mx-auto">
          As a firm believer in continuous learning, I stay up-to-date with the latest advancements in web technologies.
        </p>

        <button onClick={() => document.getElementById('my_modal_3').showModal()}
          className='btn py-4 px-8 text-[15px] font-medium rounded-lg text-[#E0DEDE] border-[1px] border-[#E0DEDE] mx-auto flex justify-center transition duration-300 ease-in-out hover:bg-gray-500 hover:text-white hover:scale-105 bg-transparent'
        >
          Why not!?
        </button>

        <dialog id="my_modal_3" className="modal bg-transparent">
          <div className="modal-box bg-[#0F192E] ">
            <form onSubmit={handleSubmit(sendEmail)}>
              {/* if there is a button in the form, it will close the modal */}
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById('my_modal_3').close()}
              >
                ✕
              </button>

              <div className="mb-4 flex flex-col">
                <label htmlFor="name" className="block text-white lg:md:text-lg text-md flex items-center gap-x-4 mb-2 font-montserrat text-start">
                  <span className="lg:md:text-lg text-md text-[#6f7582]">01</span>
                  <span>What’s your name?</span>                
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-transparent placeholder:text-md placeholder:text-[#6f7582] ml-4 py-2"
                  placeholder="Afnan Ferdousi*"
                  {...register("name", {
                    required: {
                      value: true,
                      message: 'Name is required'
                    }
                  })}
                      />
                      { errors?.name && <p>{errors?.name?.message}</p> }
                       <hr className="w-42 border-t-2 border-gray-700 mt-2 mb-6 " />
              </div>

              <div className="mb-4 flex flex-col">
                <label htmlFor="email" className="block text-white lg:md:text-lg text-md flex items-center gap-x-4 mb-2 font-montserrat text-start">
                  
               <span className="lg:md:text-lg text-md text-[#6f7582]">02</span>
               <span>What’s your email?</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-transparent placeholder:text-md placeholder:text-[#6f7582] ml-4 py-2"
                  placeholder="afnan@gmail.com*"
                   {...register("email", {
                    required: {
                      value: true,
                      message: 'Email is required'
                    }
                  })}
                />
                {errors?.email && <p>{errors?.email?.message}</p>}
                <hr className="w-42 border-t-2 border-gray-700 mt-2 mb-6 " />
              </div>

              <div className="mb-4 flex flex-col">
                <label htmlFor="message" className="block text-white lg:md:text-lg text-md flex items-center gap-x-4 mb-2 font-montserrat text-start">
                 <span className="lg:md:text-lg text-md text-[#6f7582]">03</span>
                 <span>Your message</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="bg-transparent placeholder:text-md placeholder:text-[#6f7582] ml-4 py-2"
                  placeholder="Hey Afnan, can you hwlp me with....*"
                    {...register("message", {
                    required: {
                      value: true,
                      message: 'Message is required'
                    }
                  })}
                />
                {errors?.message && <p>{errors?.message?.message}</p>}
              </div>


              <button type="submit">Submit</button>
            </form>
          </div>
        </dialog>
      </div>
    </div>

  );
};

export default Contact;