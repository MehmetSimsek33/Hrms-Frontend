import axios from "axios";

export default class LanguageService 
{   
    
    getLanguage()
    {
        return axios.get("http://localhost:8080/api/languges/getAll")
        
        // 1"
    }
    getByCvId(cvId){
        return axios.get("http://localhost:8080/api/languges/getByCvId?cvId="+cvId)
    }
    addLanguage(language)
    {
        return axios.post("http://localhost:8080/api/languges/add",language)
        
    }

    deleteLanguage(languageId)
    {
     
        return axios.delete(`http://localhost:8080/api/languges/deleteLanguage?languageId=${languageId}`)
    }
}