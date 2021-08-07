import axios from "axios"

export default class CvService
{
    getCv()
    {
        return axios.get("http://localhost:8080/api/cvs/getall")
     //   http://localhost:8080/api/cvs/getall
    }
    getByCvId(id)
    {
        return axios.get("http://localhost:8080/api/cvs/getByCvId?id="+id)
    }
    getCvDto()
    {
        return axios.get("http://localhost:8080/api/cvs/getAllCvDto")
    }
    getByCvDtoId(id)
    {
        return axios.get("http://localhost:8080/api/cvs/getByIdCvDto?id="+id)

    }
    updateGithub(cvId,githunLink)
    {
        return axios.post("http://localhost:8080/api/cvs/gitHubUpdate?cvId="+cvId+"&gitHubAddress="+githunLink)
    }
    updateLinkedln(cvId,linkedlnLink)
    {
        return axios.post("http://localhost:8080/api/cvs/linkedlUpdate?cvId="+cvId+"&linkedlnAddress="+linkedlnLink)
    }
    deleteGituhub(cvId)
    {
        return axios.post("http://localhost:8080/api/cvs/githubDelete?cvId="+cvId)
    }
}