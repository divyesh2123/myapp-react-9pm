import React from 'react'
import {Form,Formik,Field} from 'formik'
//job title
// desc
// number postion
// fulltime part time etc

export default function JobPost() {
  return (
    <Formik initialValues={{
      jobtitle:'',
      description:'',
      numberofposition:'',
      typeofjob:''
    }}
    
    onSubmit={(values)=>{

        console.log(values);
    }}
    
    >

      <Form>
        <Field type='text' name='jobtitle'></Field>
        <Field as='textarea' name='description'>

        </Field>
        <Field type='number' name='numberofposition'></Field>
        <Field as='select' name="typeofjob">
          <option value="Fulltime">Full-Time</option>
          <option value="Parttime">Part-Time</option>
          <option value="Remote">Remote</option>
        </Field>
            <button type='submit'>save</button>
      </Form>
    </Formik>
  )
}
