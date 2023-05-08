import React from 'react';
import { Formik } from 'formik';
import { Component } from 'react';

class Form extends Component {
    render() {
        return(
        <div className='d-flex justify-content-center'>
            <div className='bg-light rounded p-4 w-25'>
                <h1 className='m-2 d-flex justify-content-center'>Login</h1>
                <Formik
                   initialValues={{ email: '', password: '' }}
                   validate={values => {
                     const errors = {};
                     if (!values.email) {
                       errors.email = 'Required';
                     } else if (
                       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                     ) {
                       errors.email = 'Invalid email address';
                     }
                     return errors;
                   }}
                   onSubmit={(values, { setSubmitting }) => {
                     setTimeout(() => {
                       alert(JSON.stringify(values, null, 2));
                       setSubmitting(false);
                     }, 400);
                   }}
                 >
                   {({
                     values,
                     errors,
                     touched,
                     handleChange,
                     handleBlur,
                     handleSubmit,
                     isSubmitting,
                     /* and other goodies */
                   }) => (
                     <form 
                        className='form-group d-flex flex-column align-items-center'
                        onSubmit={handleSubmit}>
                       <input
                         className='form-control m-2'
                         placeholder='Enter email'
                         type='email'
                         name='email'
                         onChange={handleChange}
                         onBlur={handleBlur}
                         value={values.email}
                       />
                       {errors.email && touched.email && errors.email}
                       <input
                         className='form-control m-2'
                         placeholder='Password'
                         type='password'
                         name='password'
                         onChange={handleChange}
                         onBlur={handleBlur}
                         value={values.password}
                       />
                       {errors.password && touched.password && errors.password}
                       <button
                         className='btn btn-primary m-2 w-100'
                         type='submit' disabled={isSubmitting}>
                         Submit
                       </button>
                     </form>
                   )}
                 </Formik>
            </div>
        </div>
        )
    }
}

export default Form;