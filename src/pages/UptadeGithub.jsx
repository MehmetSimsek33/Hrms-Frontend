import React from 'react'
import * as Yup from "yup";
import { useFormik } from 'formik';
import { Button, Form } from "semantic-ui-react";
import { toast } from 'react-toastify';
import { useState } from 'react';
import CvService from '../services/cvService.jsx';

export default function UptadeGithub({cvId}) {

    let cvService=new CvService();
        const [gitHubAddress,setGithub]=useState({});

    const updateGithubSchema = Yup.object().shape({
        gitHubAddress: Yup.string().required("Zorunlu")
    })

    const formik = useFormik({
        initialValues:{
            gitHubAddress:""
        },
        validationSchema: updateGithubSchema,
        onSubmit:(values) =>{
            cvService.updateGithub(cvId,values.gitHubAddress).then((result) => (result.data.data));        
        },
        enableReinitialize: true,
      });

    return (
        <div>
            <Form inverted size="large" onSubmit={formik.handleSubmit}>
                <label><b>GitHub Link</b></label>
                <div style={{marginTop :"1em" ,marginBottom:"1em"}}></div>
                <Form.Input
                    
                    fluid
                    placeholder="Github Link"
                    type="text"
                    value={formik.values.gitHubAddress}
                    name="gitHubAddress"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                formik.errors.gitHubAddress && formik.touched.gitHubAddress && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.gitHubAddress}
                  </div>
                )
              }
              
              <Button color="green" fluid size="large" type="submit" >Güncelle</Button>
            </Form>
        </div>
    )
}