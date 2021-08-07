import axios from "axios"
export default class FavoriteService
{
    getFavorite( )
   {    
        return axios.get("http://localhost:8080/api/favoriteJobPosting/getall")
   }
  
   addFavorite(candateId,jobPostingId)
   {
  
        return axios.post("http://localhost:8080/api/favoriteJobPosting/addFavoriteJobPosting?candidateId="+candateId+"&jobPostingId="+jobPostingId)
   }
}