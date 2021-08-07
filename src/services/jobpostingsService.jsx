import axios from "axios";

export default class JobPostingService
{
    getPosting()
    {
        return axios.get("http://localhost:8080/api/jobpostings/getall")
    }
    addaPosting(jobPosting){
        console.log(jobPosting)
      return axios.post("http://localhost:8080/api/jobpostings/add",jobPosting)
    }
    updateStatus(id, status) {
        return axios.post(
          "http://localhost:8080/api/jobpostings/statusUpdate?id=" +id +  "&status=" +
            status
        );
        }
        getByFilter(pageNo, pageSize, filterOption){
          return axios.post("http://localhost:8080/api/jobpostings/getByFilter?pageNo="+pageNo+"&pageSize="+pageSize,filterOption);
      }
      
      
      }