import axios from "axios";

export default class EmployerService
{
    getEmployer()
    {
        return axios.get("http://localhost:8080/api/employers/getall")
    }
    getByEmployerId(id)
    {
        return axios.get("http://localhost:8080/api/employers/getById?id="+id)
    }

    updateEmployer(employe)
   {
        return axios.put("http://localhost:8080/api/employers/updateTemp",employe)
   }
   getTempEmployer()
   {
       return axios.get("http://localhost:8080/api/employers/getallTempEmploye")
   }
   verifyfdEmployer(id)
   {
        return axios.put(" http://localhost:8080/api/employers/verifyUpdate?employerId="+id)
   }
   deleteTempEmployer(id)
   {
        return axios.delete("http://localhost:8080/api/employers/deleteTempEmployer?tempEmployeId="+id)
   }

  
  
  
}