import React from 'react'
import {ErrorMessage, Field, Form, Formik}  from 'formik'
import * as yup from 'yup';

export default function FormikExample() {

  const validateData = yup.object().shape({
    firstName: yup.string().required("please enter firstName").min(2,"please enter min 2").max(12,"please enter max 12"),
    lastName : yup.string().required("please enter lastName"),
    email: yup.string().email("email is invalid"),
    password: yup.string().min(5,"please enter minumum 5 char").max(12,"please enter minimum 12").matches(/[a-z]{1}[0-9]{1}[A-Z]{1}/,"please enter valid password"),
    confirmPassword: yup.string().min(5,"please enter minumum 5 char").max(12,"please enter minimum 12")
      .oneOf([null,yup.ref("password")],"password and confirm passworsd should be same")
    ,
    isActive: yup.bool().oneOf([true],"please select terms and con")
  })

  const validate = (data)=>{

    let error = {}

    if(!data.firstName)
    {
      error.firstName = "Please Enter First Name";
    }
    else if(data.firstName.length >20)
    {
      error.firstName = "Name can not be larget than 20 char";

    }


    if(data.confirmPassword &&  data.password != data.confirmPassword)
    {
      error.password = "password should match with confirm password";
    }
    return error;

  }

  return (
     <Formik initialValues={{

        firstName : "",
        lastName : "",
        email: "",
        isActive:false,
        hobbies: [],
        gender: "",
        city: "",
        address: "",
        password:"",
        confirmPassword: ""
     }}
    //  validate={validate}
     validationSchema={validateData}
     onSubmit={async (values) => {

        console.log(values);
      }}
     
     >
        <Form>
        <Field name="firstName" placeholder="first Name" />
        <ErrorMessage name="firstName"/>
        <Field name="lastName" placeholder="last Name" />
        <ErrorMessage name="lastName"/>
        <Field  name="email" placeholder="email"/>

        <ErrorMessage name="email"/>
        <label>
            <Field type="checkbox" name="isActive" />
           
          </label>

          <div id="checkbox-group">Checked</div>
          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="hobbies" value="Cricket" />
              Cricket
            </label>
            <label>
              <Field type="checkbox" name="hobbies" value="guitar" />
              guitar
            </label>
            <label>
              <Field type="checkbox" name="hobbies" value="baseball" />
              base ball
            </label>
          </div>

          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="gender" value="male" />
              Male
            </label>
            <label>
              <Field type="radio" name="gender" value="female" />
              Female
            </label>

          </div>
          <Field name="city" as="select">
   <option value="vadodara">vadodara</option>
   <option value="ahemedabad">ahemedabad</option>
   <option value="anand">anand</option>
 </Field>

        <Field name="address"  as="textarea"/>

        <Field name="password" type="password"/>
        <ErrorMessage name='password'/>
        <Field name="confirmPassword" type="password"/>
      

        <button type='submit'>Save</button>
        </Form>


     </Formik>
  )
}
