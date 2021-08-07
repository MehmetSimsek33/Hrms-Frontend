import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Button, Dropdown, TextArea, Card, Form, Grid, GridColumn } from "semantic-ui-react";
import EmployeService from '../services/employesService.jsx';
import * as Yup from "yup";
import { useFormik } from 'formik';
export default function EmployeUpdate() {
 
    let { id } = useParams();
   
    const [employes, setEmploye] = useState({});
    let employeService = new EmployeService()
    useEffect(() => {
        employeService.getByEmployeId(id).then(result => setEmploye(result.data.data))
    }, []);
    
   


    const formik = useFormik({
        initialValues: {
            id:employes.id,
            firstName: employes.firstName,
            lastName: employes.lastName,
            emailAdress: employes.emailAdress,
            password: employes.password,
          },
          validatiovalidationSchema: Yup.object({
            emailAdress: Yup.string().required("Bu alanın doldurulması zorunludur"),
            firstName: Yup.string().required("Bu alanın doldurulması zorunludur"),
            lastName: Yup.string().required("Bu alanın doldurulması zorunludur")
    
        }),
        onSubmit: (values) => {
            
          let Employe = {
          
            emailAdress: values.emailAdress,
            firstName: values.firstName,
            lastName: values.lastName,
            id :employes.id,
            password:employes.password
          };
          console.log(Employe);
          employeService.updateEmploye(Employe).then((result) => (result.data.data));        
        },
        enableReinitialize: true,
      });
    
    

  
    
    return (
        <div>
            <Card fluid>

                <Card.Content header='Sistem Personeli Bilgileri Guncelle' />
                <Card.Content>
                <Form onSubmit={formik.handleSubmit}>
                        <Form.Field>
                            <label>Adı Soyadi</label>
                            <Grid stackable>
                                <GridColumn width={8}>
                                    <label style={{ fontWeight: "bold" }}>Adi</label>
                                    <Form.Input
                                      type="text"
                                        placeholder="Adi"
                                        value={formik.values.firstName}
                                        name="firstName"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}>
                                    </Form.Input>
                                    {formik.errors.firstName && formik.touched.firstName && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.firstName}
                                        </div>
                                    )}

                                </GridColumn>
                                <GridColumn width={8}>
                                    <label style={{ fontWeight: "bold" }}>Soyadi</label>
                                    <Form.Input
                                    
                                        type="text"
                                        placeholder="lastName"
                                        name="lastName"
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.lastName && formik.touched.lastName && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.lastName}
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
                                        
                                        name="emailAdress"
                                        placeholder="Acık Pozisyon Adedi"
                                        onChange={formik.handleChange}
                                        value={formik.values.emailAdress}
                                        onBlur={formik.handleBlur}
                                    >
                                    </Form.Input>
                                    {formik.errors.emailAdress && formik.touched.emailAdress && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.emailAdress}
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
        </div>
    )
}
