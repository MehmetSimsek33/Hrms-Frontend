import axios from "axios";


export default class JobTitleService
{
    getJobTitle()
    {
        return axios.get("http://localhost:8080/api/jobtitles/getall")
    }
}