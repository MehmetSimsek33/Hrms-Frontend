import React from 'react'
import * as Yup from "yup";
import { useFormik } from 'formik';
import { Button, Form } from "semantic-ui-react";
import { toast } from 'react-toastify';
import { useState } from 'react';
import CvService from '../services/cvService.jsx';


export default function UpdateLinkeln({cvId}) {

    let cvService=new CvService();

    const updateGithubSchema = Yup.object().shape({
        linkedlnAddress: Yup.string().required("Zorunlu")
    })

    const formik = useFormik({
        initialValues:{
            linkedlnAddress:""
        },
        validationSchema: updateGithubSchema,
        onSubmit:(values) =>{
            cvService.updateLinkedln(cvId,values.linkedlnAddress).then((result) => (result.data.data));        
        },
        enableReinitialize: true,
      });

    return (
        <div>
            <Form inverted size="large" onSubmit={formik.handleSubmit}>
                <label><b>Linkedln Link</b></label>
                <div style={{marginTop :"1em" ,marginBottom:"1em"}}></div>
                <Form.Input
                    
                    fluid
                    placeholder="Linkedln Link"
                    type="text"
                    value={formik.values.linkedlnAddress}
                    name="linkedlnAddress"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                formik.errors.linkedlnAddress && formik.touched.linkedlnAddress && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.linkedlnAddress}
                  </div>
                )
              }
              
              <Button color="green" fluid size="large" type="submit">Güncelle</Button>
            </Form>
        </div>
    )
}