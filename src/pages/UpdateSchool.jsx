
import * as Yup from "yup";
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Menu,Table,Icon ,Card,Button,Segment,Input} from 'semantic-ui-react'
import SchoolService from "../services/schoolService.jsx";

import React from 'react'


export default function UpdateSchool({cvId}) {

    console.log(cvId)
  let schoolService=new SchoolService()
  const[schools,setScholls]=useState([])
  useEffect(() => {
   
    schoolService.getByCvId(cvId).then((result) => {
        setScholls(result.data.data);
    });
  },[cvId]);
  const deleteSchool = (id) => {
   
    console.log("silindi");
    schoolService.deleteSchool(id).then(toast.success("Dil silindi!"));
}
const formik = useFormik({
  initialValues: {
    schoolName: "",
    section: "",
    yearOfEntry:"",
    yearOfGraduation:"",
    cvID: cvId
  }, validationSchema: Yup.object({
    schoolName: Yup.string().required("Bu alanın doldurulması zorunludur"),
    section: Yup.string().required("Bu alanın doldurulması zorunludur"),
    yearOfEntry:Yup.date().required("Bu alan zorunludur"),
    yearOfGraduation: Yup.date(),
    
  }),
  onSubmit: (values) => {
    let school = {
      cv: { id: values.cvID },
      schoolName: values.schoolName,
      section: values.section,
      yearOfEntry: values.yearOfEntry,
      yearOfGraduation: values.yearOfGraduation,
     

    };
    console.log(school)
  
    schoolService.addSchool(school).then((result) =>(result.data.data));
  
  
  },
});



    return (
        <div>
         <Card fluid color={"black"}>
        <Card.Content header="Bilinen Diller" />
        <Table celled color={"black"}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Okul ADI</Table.HeaderCell>
              <Table.HeaderCell>Bolum</Table.HeaderCell>
              <Table.HeaderCell>Giriş YILI</Table.HeaderCell>
              <Table.HeaderCell>Mezunıyet YILI</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {schools?.map((school) => (
              <Table.Row key={school.id}>
                <Table.Cell>{school.schoolName}</Table.Cell>
                <Table.Cell>{school.section}</Table.Cell>
                <Table.Cell>{school.yearOfEntry}</Table.Cell>
                <Table.Cell>{school.yearOfGraduation ? school.yearOfGraduation:<p>Devam ediyor</p>}</Table.Cell>

               // 
                <Table.Cell>
                 
                  <Button color="red" icon="x"  onClick={() => deleteSchool(school.id)}>
                 
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Card>
      <Segment.Group>
        <Segment inverted>
          <h3 className="headerStyle">Okul Bilgisi Ekle</h3>
        </Segment>
        <Segment>
          <form onSubmit={formik.handleSubmit}>
            <div
              style={{
                textAlign: "left",
                fontFamily: "Arial",
                fontWeight: "bold",
              }}
            >
              <div className="divStyle">
                <Input
                  id="schoolName"
                  placeholder="Okul Adı giriniz"
                  fluid
                  style={{ marginRight: "1em", marginTop: "1em" }}
                  onChange={formik.handleChange}
                  value={formik.values.schoolName}
                ></Input>
                {formik.errors.schoolName && formik.touched.schoolName && (
                  <p style={{ color: "red" }}>{formik.errors.schoolName}</p>
                )}
              </div>
              
             
              <div className="divStyle">
                <Input
                
                  id="section"
                  placeholder="Bolum Adi"
                  fluid
                  style={{ marginRight: "1em", marginTop: "1em" }}
                  onChange={formik.handleChange}
                  value={formik.values.section}
                ></Input>
                {formik.errors.section &&
                  formik.touched.section && (
                    <p style={{ color: "red" }}>
                      {formik.errors.section}
                    </p>
                  )}
              </div>
              <div className="divStyle">
                <Input
                  type="date"
                  id="yearOfEntry"
                  placeholder="Giriş Yılını GİRİNİZ"
                  fluid
                  style={{ marginRight: "1em", marginTop: "1em" }}
                  onChange={formik.handleChange}
                  value={formik.values.yearOfEntry}
                ></Input>
                {formik.errors.yearOfEntry && formik.touched.yearOfEntry && (
                  <p style={{ color: "red" }}>{formik.errors.yearOfEntry}</p>
                )}
              </div>
              <div className="divStyle">
                <Input
                  type="date"
                  id="yearOfGraduation"
                  placeholder="Mezunıyet Yılınız"
                  fluid
                  style={{ marginRight: "1em", marginTop: "1em" }}
                  onChange={formik.handleChange}
                  value={formik.values.yearOfGraduation}
                ></Input>
                {formik.errors.yearOfGraduation && formik.touched.yearOfGraduation && (
                  <p style={{ color: "red" }}>{formik.errors.yearOfGraduation}</p>
                )}
              </div>
            </div>
            <Button
              type="submit"
              style={{
                backgroundColor: "	#3399FF",
                color: "white",
                marginBottom: "0.001em",
              }}
            >
              DİL BİLGİSİ  EKLE
            </Button>
          </form>
        </Segment>
      </Segment.Group>
    </div>
    )
}
