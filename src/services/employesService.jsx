import axios from "axios";

export default class EmployeService
{
    getEmploye( )
   {    
        return axios.get("http://localhost:8080/api/employees/getall")
   }
   getByEmployeId(id)
   {
       return axios.get("http://localhost:8080/api/employees/getByEmployeId?id="+id)
   }
   updateEmploye(employe)
   {
        return axios.put("http://localhost:8080/api/employees/updateEmploye",employe)
   }
}