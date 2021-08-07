import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Button, Dropdown, TextArea, Card, Form, Grid, GridColumn } from "semantic-ui-react";
import EmployerService from '../services/employerService.jsx';
import * as Yup from "yup";
import { useFormik } from 'formik';
import { Message } from 'semantic-ui-react';
export default function EmployerUpdate() {
    let { id } = useParams();
   
    const [employer, setEmployer] = useState({});
    let employerService = new EmployerService()
    useEffect(() => {
        employerService.getByEmployerId(id).then(result => setEmployer(result.data.data))
    }, []);
    
   


    const formik = useFormik({
        initialValues: {
            empId:employer.id,
            companyName: employer.companyName,
            webAddress: employer.webAddress,
            email: employer.emailAdress,
            phone: employer.phone,
          },
          validatiovalidationSchema: Yup.object({
            companyName: Yup.string().required("Bu alanın doldurulması zorunludur"),
            webAddress: Yup.string().required("Bu alanın doldurulması zorunludur"),
            email: Yup.string().required("Bu alanın doldurulması zorunludur"),
            phone: Yup.string().required("Bu alanın doldurulması zorunludur")
    
        }),
        onSubmit: (values) => {
            
          let Employer = {
          
            companyName: values.companyName,
            webAddress: values.webAddress,
            email: values.email,
            empId:employer.id,
            phone:values.phone
          };
          console.log(Employer);
          employerService.updateEmployer(Employer).then((result) => (result.data.data));        
        },
        enableReinitialize: true,
      });
    
    

  
    
    return (
      
            <div>
      {employer.statusUpdate     === true && (
        <Message positive>
          <Message.Header>Son güncelleme isteginiz onay bekliyor</Message.Header>
          <p>
            En son yaptıgınız güncelleme isteği onaylanana kadar yeni günceleme yapamazsınız personelimiz en kısa sürede isteğinizi onaylayacaktır
          </p>
        </Message>
      )}
      {employer.statusUpdate     === false && (
            <Card fluid>

                <Card.Content header='Firma Bilgileri Guncelle' />
                <Card.Content>
                <Form onSubmit={formik.handleSubmit}>
                        <Form.Field>
                            <label>Firma Bilgileri</label>
                            <Grid stackable>
                                <GridColumn width={8}>
                                    <label style={{ fontWeight: "bold" }}>Adi</label>
                                    <Form.Input
                                      type="text"
                                        placeholder="Firma Adi"
                                        value={formik.values.companyName}
                                        name="companyName"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}>
                                    </Form.Input>
                                    {formik.errors.companyName && formik.touched.companyName && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.companyName}
                                        </div>
                                    )}

                                </GridColumn>
                                <GridColumn width={8}>
                                    <label style={{ fontWeight: "bold" }}>webAddress</label>
                                    <Form.Input
                                    
                                        type="text"
                                        placeholder="webAddress"
                                        name="webAddress"
                                        value={formik.values.webAddress}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.webAddress && formik.touched.webAddress && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.webAddress}
                                        </div>
                                    )}
                                </GridColumn>
                            </Grid>
                        </Form.Field>
                        <Form.Field>
                            <Grid>
                                <GridColumn width={16}>
                                    <label style={{ fontWeight: "bold" }}>Email-Adress</label>
                                    <Form.Input
                                     
                                       type="text"
                                        
                                        name="email"
                                        placeholder="Email-Adress"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        onBlur={formik.handleBlur}
                                    >
                                    </Form.Input>
                                    {formik.errors.email && formik.touched.email && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.email}
                                        </div>
                                    )}
                                </GridColumn>

                            
                            </Grid>
                        </Form.Field>
                        <Form.Field>
                            <Grid>
                                <GridColumn width={16}>
                                    <label style={{ fontWeight: "bold" }}>Telefon Numarasi</label>
                                    <Form.Input
                                     
                                       type="text"
                                        
                                        name="phone"
                                        placeholder="Telefon Numarasi"
                                        onChange={formik.handleChange}
                                        value={formik.values.phone}
                                        onBlur={formik.handleBlur}
                                    >
                                    </Form.Input>
                                    {formik.errors.phone && formik.touched.phone && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.phone}
                                        </div>
                                    )}
                                </GridColumn>

                            
                            </Grid>
                        </Form.Field>

                     


                        {/* <Form.Field>
                            <label>Açıklama</label>
                            <TextArea
                                placeholder="Açıklama"
                                style={{ minHeight: 100 }}
                                error={formik.errors.description}
                                value={formik.values.description}
                                name="description"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.description && formik.touched.description && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.description}
                                </div>
                            )}
                        </Form.Field> */}

                        <Button
                            content="Güncelle"
                            labelPosition="right"
                            icon="add"
                            positive
                            type="submit"
                            style={{ marginLeft: "20px" }}
                        />
                    </Form>
                </Card.Content>
            </Card>
      )}
        </div>
    )
}