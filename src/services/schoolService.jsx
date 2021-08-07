import axios from "axios";




export  default class SchoolService
{
  getSchool()
  {
      return axios.get("http://localhost:8080/api/schools/getAllSchoolDetailDto")
  }
    getByCvId(cvId){
        return axios.get("http://localhost:8080/api/schools/getByCvId?cvId="+cvId)
    }
    addSchool(school)
    {
        return axios.post("http://localhost:8080/api/schools/add",school)
    }
    deleteSchool(id)
    {
        return axios.delete("http://localhost:8080/api/schools/deleteSchool?schoolId="+id)
    }
}