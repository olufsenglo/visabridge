import React, { useState, useEffect, useRef } from 'react';
import Header from '../elite_edge/Header';
import Footer from '../elite_edge/Footer';
// import { useFormik } from 'formik';
// import * as yup from 'yup';

// const validationSchema = yup.object({
//   name: yup
//       .string('Enter your name')
//       .name('Enter a valid name')
//       .required('Name is required'),
//   email: yup
//       .string('Enter your email')
//       .email('Enter a valid email')
//       .required('Email is required'),
//   phone: yup
//       .string('Enter your phone')
//       .phone('Enter a valid phone')
//       .required('phone is required'),            
//   country: yup
//       .string('Enter your country')
//       .country('Enter a valid country')
//       .required('country is required'),
//   course: yup
//     .string('Enter your course')
//     .course('Enter a valid course')
//     .required('course is required'),
// });

const Request = () => {
  return (
    <div className="py-12">
      <Header />
      <section className="section-sm lg:pt-[50px] lg:pb-[50px]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg: gap-x-[74px] bg-contact bg-no-repeat bg-cover min-h-[600px]">
            <div className="flex-1 flex flex-col justify-center pl-8">
              <h2 className="h2 mb-3 lg:mb-7">
                Register you interest
              </h2>
              <p className="mb-7 lg:mb-0">
                Get the help you need. We are here to give you the best service
              </p>
            </div>
            <form 
              className="flex flex-col flex-1 bg-pink-100 shadow-primary rounded-[20px] p-5 lg:p-10 gap-y-5"
              >
              
              <input
                className="form-control p-2 rounded-xl text-xl font-light"
                type="text"
                placeholder="Name"
              />
              <input
                className="form-control p-2 rounded-xl text-xl font-light"
                type="text"
                placeholder="Email"
              />
              <input
                className="form-control p-2 rounded-xl text-xl font-light"
                type="text"
                placeholder="Phone number"
              />
              <input
                className="form-control p-2 rounded-xl text-xl font-light"
                type="text"
                placeholder="Country of Residence"
              />
              <input
                className="form-control p-2 rounded-xl text-xl font-light"
                type="text"
                placeholder="Course of study"
              />

              <button
                className='btn btn-secondary'
                data-aos='fade-up'
                data-aos-delay='300'
              >Send message</button>

              <div className="mt-10 grid grid-cols-3 items-center text-gray-400">
                <hr className="border-gray-400" />
                <p className="text-center">OR</p>
                <hr className="border-gray-400" />
              </div>

              <button class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
                Login with Google
              </button>
              <div class="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
                <a href="#">Forgot your password?</a>
              </div>

              <div class="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                <p>Don't have an account?</p>
                <button class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Register</button>
              </div>

            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Request;