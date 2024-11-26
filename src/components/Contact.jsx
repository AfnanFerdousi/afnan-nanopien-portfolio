/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { randomBlob } from '@/hooks/randomBlob';


const Contact = () => {
  const { register, handleSubmit, reset, errors } = useForm();
  const blobRef = useRef(null);
  useEffect(() => {
    const blob = blobRef.current;
    const handleResize = () => {
      randomBlob(blobRef);
    };

    // Randomize the initial position
    randomBlob(blobRef);

    window.addEventListener('resize', handleResize);

    const intervalId = setInterval(() => {
      randomBlob(blobRef);
    }, 4000);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const sendEmail = async (data) => {
    try {
      await axios.post('https://afnan-portfolio-server.vercel.app/api/v1/contact/sendEmail', data);
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
      reset();
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
      reset()
    }
  };
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className=" px-0 bg-gradient-to-r from-[#0F192E] to-[#C23E5A] my-auto rounded-xl max-w-[1440px] w-full mx-auto">
      <div
        ref={blobRef}
        className='blob w-[80px] h-[80px] overflow-y-hidden'
        style={{ filter: 'blur(100px)' }}
      ></div>
      <div

        className="lg:md:h-[50vh] h-[30vh] text-center flex flex-col items-center justify-center py-10 max-w-[1380px] mx-auto w-full"
      >
        <h2 className="font-Raleway font-bold lg:md:text-5xl text-3xl flex flex-col text-[#fff] text-center">
          Let’s Work Together!
        </h2>
        <p className="font-montserrat lg:md:text-lg text-[14px] text-[#C4C4C4] lg:md:w-[50%] w-[100%] text-center my-4 mx-auto lg:md:px-0 px-2">
          Connect with Me: Reach Out for Collaboration, Questions, or Simply a Friendly Conversation - I'm Here to Hear from You
        </p>

        <button onClick={() => document.getElementById('my_modal_3').showModal()}
          className='btn py-4 px-8 text-[15px] font-medium rounded-lg text-[#E0DEDE] border-[1px] border-[#E0DEDE] mx-auto flex justify-center transition duration-300 ease-in-out hover:bg-transparent hover:border-[#fff] hover:text-white hover:scale-105 bg-transparent'
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
                <label htmlFor="name" className=" text-white lg:md:text-lg text-md flex items-center gap-x-4 mb-2 font-montserrat text-start">
                  <span className="lg:md:text-lg text-md text-[#6f7582]">01</span>
                  <span>What’s your name?</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-transparent placeholder:text-md placeholder:text-[#6f7582] ml-6 py-2 px-4 border-[0px] border-transparent"
                  placeholder="Afnan Ferdousi*"
                  {...register("name", {
                    required: {
                      value: true,
                      message: 'Name is required'
                    }
                  })}
                />
                {errors?.name && <p>{errors?.name?.message}</p>}
                <hr className="w-42 border-t-2 border-gray-700 mt-2 mb-6 " />
              </div>

              <div className="mb-4 flex flex-col">
                <label htmlFor="email" className=" text-white lg:md:text-lg text-md flex items-center gap-x-4 mb-2 font-montserrat text-start">

                  <span className="lg:md:text-lg text-md text-[#6f7582]">02</span>
                  <span>What’s your email?</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-transparent placeholder:text-md placeholder:text-[#6f7582] ml-6 py-2 px-4 border-[0px] border-transparent"
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
                <label htmlFor="message" className=" text-white lg:md:text-lg text-md flex items-center gap-x-4 mb-2 font-montserrat text-start">
                  <span className="lg:md:text-lg text-md text-[#6f7582]">03</span>
                  <span>Your message</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="bg-transparent placeholder:text-md placeholder:text-[#6f7582] ml-6 py-2 px-4 border-[0px] border-transparent"
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