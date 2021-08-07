import React, { useState } from "react";
import { useEffect } from "react";
import LanguageService from "../services/languageService.jsx";
import { Button, Dropdown, Input, TextArea, Card, Form, Grid, GridColumn ,Table} from "semantic-ui-react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Segment } from "semantic-ui-react";
import { toast } from "react-toastify";

export default function UpdateLanguage({ cvId }) {
  
  
  let languageService = new LanguageService();

  const [languages, setLanguages] = useState([]);
  
  const deleteLanguage = (id) => {
   
    console.log("silindi");
    languageService.deleteLanguage(id).then(toast.success("Dil silindi!"));
}



  useEffect(() => {
   
    languageService.getByCvId(cvId).then((result) => {
      setLanguages(result.data.data);
    });
  },[cvId]);


  

  const formik = useFormik({
    initialValues: {
      languageName: "",
      level: "",
      cvID: cvId
    }, validationSchema: Yup.object({
      languageName: Yup.string().required("Bu alanın doldurulması zorunludur"),
      level: Yup.number().min(0, "0 Dan az olamaz").max(5, "5 den fazla olamaz").required("Bu alan zorunludur"),
    }),
    onSubmit: (values) => {
      let language = {
        cv: { id: values.cvID },
        languageName: values.languageName,
        level: values.level,
       

      };
    
      languageService.addLanguage(language).then((result) =>(result.data.data));
    
    
    },
  });



  return (
    <div>
        <Card fluid color={"black"}>
        <Card.Content header="Bilinen Diller" />
        <Table celled color={"black"}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Dil</Table.HeaderCell>
              <Table.HeaderCell>Seviye</Table.HeaderCell>
              <Table.HeaderCell>Sil</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {languages?.map((language) => (
              <Table.Row key={language.id}>
                <Table.Cell>{language.languageName}</Table.Cell>
                <Table.Cell>{language.level}</Table.Cell>
                <Table.Cell>
                  <Button color="red" icon="x"  onClick={() => deleteLanguage(language.id)}>
                 
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Card>

      <Segment.Group>
        <Segment inverted>
          <h3 className="headerStyle">Dil Bilgisi Ekle</h3>
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
                  id="languageName"
                  placeholder="Dil Adı giriniz"
                  fluid
                  style={{ marginRight: "1em", marginTop: "1em" }}
                  onChange={formik.handleChange}
                  value={formik.values.languageName}
                ></Input>
                {formik.errors.languageName && formik.touched.languageName && (
                  <p style={{ color: "red" }}>{formik.errors.languageName}</p>
                )}
              </div>
             
              <div className="divStyle">
                <Input
                type="number"
                  id="level"
                  placeholder="level"
                  fluid
                  style={{ marginRight: "1em", marginTop: "1em" }}
                  onChange={formik.handleChange}
                  value={formik.values.level}
                ></Input>
                {formik.errors.level &&
                  formik.touched.level && (
                    <p style={{ color: "red" }}>
                      {formik.errors.level}
                    </p>
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
  );
}