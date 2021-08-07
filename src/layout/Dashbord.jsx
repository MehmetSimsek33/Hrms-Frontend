import React from 'react'
import Language from './Language.jsx'
import Categories from './Categories.jsx'
import CandidateList from '../pages/CandidateList.jsx'
import { Container, Grid } from 'semantic-ui-react'
import CvList from '../pages/CvList.jsx'
import { Route } from "react-router-dom";
import jobPostingList from '../pages/JobPostingList.jsx'
import EmployeList from '../pages/EmployeList.jsx'
import EmployerList from '../pages/EmployerList.jsx'
import JobPostingAdd from '../pages/JobPostingAdd.jsx'
import CityList from '../pages/CityList.jsx'
import JobTİtleList from '../pages/JobTİtleList.jsx'
import AddJobPosting from '../pages/AddJobPosting.jsx'
import CvDetail from '../pages/CvDetail.jsx'
import EmployeUpdate from '../pages/EmployeUpdate.jsx'
import EmployerDetail from '../pages/EmployerDetail.jsx'
import UpdateLanguage from '../pages/UpdateLanguage.jsx'
import EmployeDetail from '../pages/EmployeDetail.jsx'
import Filter from './Filter.jsx'
import EmployerUpdate from '../pages/EmployerUpdate.jsx'
import WaitingUpdateEmployer from '../pages/WaitingUpdateEmployer.jsx'
import FavoriteList from '../pages/FavoriteList.jsx'


export default function Dashbord() {
    return (
        <div>
     <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories/>
                    </Grid.Column>
                    <Grid.Column  width={12}>
                    <Route path="/candidate" component={CandidateList}></Route>
                    <Route path="/cv" component={CvList}></Route>
                    <Route path="/JobPosting" component={jobPostingList}></Route>
                    <Route exact path="/employe" component={EmployeList}></Route>
                    <Route path="/city" component={CityList}></Route>
                    <Route path="/employer" component={EmployerList}></Route>
                    <Route path="/ssss" component={JobPostingAdd}></Route>
                    <Route path="/JobTitle" component={JobTİtleList}></Route>
                    <Route path="/cvDetail/:id" component={CvDetail} />
                    <Route exact path="/JobPostingAdd" component={AddJobPosting}></Route>
                    <Route exact path="/EmployeDetail/:id" component={EmployeDetail}></Route>
                    <Route exact path="/EmployerDetail/:id" component={EmployerDetail}></Route>
                    <Route exact path="/EmployeUpdate/:id" component={EmployeUpdate}></Route>
                    <Route exact path="/EmployerUpdate/:id" component={EmployerUpdate}></Route>
                    <Route exact path="/favoriteList" component={FavoriteList}></Route>
                    <Route path="/waitingUpdate" component={WaitingUpdateEmployer}></Route>
                    <Route exact path="/filter" component={Filter}></Route>
                
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
        
            
        </div>
    )
}
