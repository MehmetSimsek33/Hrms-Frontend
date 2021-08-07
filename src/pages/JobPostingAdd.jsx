import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Button, Dropdown, Input, TextArea, Card, Form, Grid, GridColumn } from "semantic-ui-react";
import * as Yup from "yup";
import CityService from '../services/cityService.jsx';
import JobTitleService from '../services/jobTitleService.jsx';
import JobPostingService from '../services/jobpostingsService.jsx';
export default function JobPostingAdd() {


  const [cities, setCities] = useState([]);
  const [jobTitles, setJobTitle] = useState([]);
  let jobPostingService = new JobPostingService();

  useEffect(() => {
    let cityService = new CityService();
    let jobTitleService = new JobTitleService();

    cityService.getCities().then(result => setCities(result.data.data))
    jobTitleService.getJobTitle().then(result => setJobTitle(result.data.data));
  }, []);

  const getCities = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.id,
  }));

  const getJobTitle = jobTitles.map((jobTitle, index) => ({
    key: index,
    text: jobTitle.title,
    value: jobTitle.id,
  }));
  


  const formik = useFormik({
    initialValues: {
      description: "",
      workTime: "",
      workPlace: "",
      openPositions: "",
      cityId: "",
      minSalary: "",
      maxSalary: "",
      lastDate: "",
      jobTitleId: "",
      employerId: 2,
    }, validationSchema: Yup.object({
      description: Yup.string().required("Bu alanın doldurulması zorunludur"),
      jobTitleId: Yup.string().required("Bu alanın doldurulması zorunludur"),
      workTime: Yup.string().required("Bu alanın doldurulması zorunludur"),
      workPlace: Yup.string().required("Bu alanın doldurulması zorunludur"),
      openPositions: Yup.number().required("Posizyon sayısı zorunludur").min(1,"Posizyon sayısı 1 den küçük olamaz"),
       minSalary: Yup.number().min(0, "0 Dan az olamaz").required("Bu alan zorunludur"),
      maxSalary: Yup.number().min(0, "0 Dan az olamaz").max(100000, "maas 100.000 tlden fazla olamaz").required("Bu alan zorunludur"),
      cityId: Yup.string().required("Bu alanın doldurulması zorunludur"),
      lastDate: Yup.date().nullable().required("Bu alanın doldurulması zorunludur")

    }),
    onSubmit: (values) => {
      let jobPosting = {
        city: { id: values.cityId },
        lastDate: values.lastDate,
        employer: { id: values.employerId },
        jobTitle: { id: values.jobTitleId },
        minSalary: values.minSalary,
        maxSalary: values.maxSalary,
        openPosition: values.openPosition,
        description: values.description,

      };
    
      jobPostingService.addaPosting(jobPosting).then((result) =>(result.data.data));
    
    },
  });



  return (
    <div>
      <Card fluid>

        <Card.Content header='İş ilanı Ekle' />
        <Card.Content>
          <Form onSubmit={formik.handleSubmit}>

                   <label>Şehir</label>
              
              <Dropdown
                clearable
                item
                placeholder="Şehir"
                search
                selection
                onChange={(event, data) =>
                  formik.setFieldValue("cityId", data.value)
                }
                onBlur={formik.onBlur}
                id="cityId"
                value={formik.values.cityId}
                options={getCities}
              />
              {formik.errors.cityId && formik.touched.cityId && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.cityId}
                </div>
              )}
          
         
       
            <Form.Field>
              <label> İş Pozisyonu</label>
              <Dropdown
                item
                clearable
                placeholder="İş Pozisyonu"
                selection
                search
                onChange={(event, data) =>
                  formik.setFieldValue("jobTitleId", data.value)
                }
                id="jobTitleId"
                value={formik.values.jobTitleId}
                options={getJobTitle}
              />
              {
                formik.errors.jobTitleId && formik.touched.jobTitleId && (<div className={"ui pointing red basic label"}>
                  {formik.errors.jobTitleId}
                </div>
                )}
            </Form.Field>
            <Form.Field>
              <label>Maaş</label>
              <Grid stackable>
                <GridColumn width={8}>
                  <label style={{ fontWeight: "bold" }}>Minumum maaş</label>
                  <Input
                    type="number"
                    placeholder="Minumum Maaş"
                    value={formik.values.minSalary}
                    name="minSalary"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}>
                  </Input>
                  {formik.errors.minSalary && formik.touched.minSalary && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.minSalary}
                    </div>
                  )}

                </GridColumn>
                <GridColumn width={8}>
                  <label style={{ fontWeight: "bold" }}>Maximum maaş</label>
                  <input
                    type="number"
                    placeholder="Maximum Maaş"
                    name="maxSalary"
                    value={formik.values.maxSalary}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.maxSalary && formik.touched.maxSalary && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.maxSalary}
                    </div>
                  )}
                </GridColumn>
              </Grid>
            </Form.Field>
            <Form.Field>
              <Grid>
                <GridColumn width={8}>
                  <label style={{ fontWeight: "bold" }}>Acık Pozisyon Sayısı</label>
                  <input
                    type="number"
                    fluid
                    
                    name="openPositions"
                    placeholder="Acık Pozisyon Adedi"
                    onChange={formik.handleChange}
                    value={formik.values.openPositions}
                    onBlur={formik.handleBlur}
                  >
                  </input>
                  {formik.errors.openPositions && formik.touched.openPositions && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.openPositions}
                  </div>
                )}
                </GridColumn>

                <GridColumn width={8}>
                  <label style={{ fontWeight: "bold" }}>Son Başvuru Tarihi</label>
                  <input
                    type="date"
                    name="lastDate"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastDate}
                  >
                  </input>
                </GridColumn>
              </Grid>
            </Form.Field>

            <Form.Field>
            <label>Çalışma Süresi</label>
              <Dropdown >
               
             
              </Dropdown> 
              <label>Lokasyon</label>
              <Dropdown > 
              
              
              </Dropdown>
            </Form.Field>
            

            <Form.Field>
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
            </Form.Field>

            <Button
              content="Ekle"
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
  );
}