import React, { useState ,useEffect} from "react";
import { useParams } from "react-router";
import "reactjs-popup/dist/index.css";
import CvService from '../services/cvService.jsx';
import { Card, Image, Table, Header, Button, Icon } from "semantic-ui-react";
import Popup from "reactjs-popup";
import UptadeGithub from "./UptadeGithub.jsx";
import LanguageService from "../services/languageService.jsx";
import UpdateLinkeln from "./UpdateLinkeln.jsx";
import UpdateSchool from "./UpdateSchool.jsx";
import { useHistory } from "react-router-dom";
import UpdateLanguage from "./UpdateLanguage.jsx";

export default function CvDetail() {
    let {id} = useParams();
    let cvService = new CvService()
    const [languages, setLanguage] = useState([]);
    const [scholos, setschool] = useState([]);
    const [cv, setCv] = useState({});
    const history=useHistory()
    const handleDeleteGithub=(cvId)=>
    {
        cvService.deleteGituhub(cvId).then(result=>setCv(result.data.data))
        updateCvValues()
    }
    
    const updateCvValues = () => {
      cvService.getByCvDtoId(id).then((result) => {
        setCv(result.data.data)
      })
    }
    useEffect(() => {
  
      cvService.getByCvDtoId(id).then(result => setCv(result.data.data))
  },[]);
    useEffect(() => {
      let languageService = new LanguageService()
      languageService.getLanguage().then(result => setLanguage(result.data.data))
  }, []);
       {/* {cv?.candidate?.firstName}
       
            {cv?.languages?.map((language) => (
              <Table.Row key={language.id}>
                <Table.Cell>{language.languageName}+" " </Table.Cell>
               
              </Table.Row>
            ))} */}
    console.log({cv})

    return (
        <div>
      <Card.Group>
        <Card fluid color={"black"}>
          <Card.Content>
          
              <Image
                floated="left"
                size="small"
                src={cv.imageUrl}
                circular
                key={cv.id}
              />
          
            <button className="ui button">Resim Yükle</button>
                           
                         

            <Card.Header style={{marginTop:"0.3em"}}>
              {cv?.firstName + " " + cv?.lastName}
            </Card.Header>
            <Card.Meta>
              <strong>{cv.biography}</strong>
            </Card.Meta>
            <Card.Description>
              <Table celled color={"black"}>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Kullanıcı</Table.HeaderCell>
                    <Table.HeaderCell>Bilgiler</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <Header as="h4" image>
                        <Header.Content>Ad</Header.Content>
                      </Header>
                    </Table.Cell>
                    <Table.Cell>{cv.firstName}</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell>
                      <Header as="h4" image>
                        <Header.Content>Soyad</Header.Content>
                      </Header>
                    </Table.Cell>
                    <Table.Cell>{cv.lastName}</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell>
                      <Header as="h4" image>
                        <Header.Content>Doğum Tarihi</Header.Content>
                      </Header>
                    </Table.Cell>
                    <Table.Cell>{cv.birthDate}</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell>
                      <Header as="h4" image>
                        <Header.Content>Email</Header.Content>
                      </Header>
                    </Table.Cell>
                    <Table.Cell>{cv.emailAdress}</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell>
                      <Header as="h4" image>
                        <Header.Content>
                          <a
                            href={cv.gitHubAddress}
                            target={"_blank"}
                            rel="noopener noreferrer"
                          >
                            <Button secondary disabled={!cv.gitHubAddress}>
                              <Icon name="github" /> Github
                            </Button>
                          </a>
                          <Popup trigger={<button className="ui button"> Güncelle </button>} modal>
                            <UptadeGithub cvId={cv.id} />
                          </Popup>
                          
                           
                           
                          <Button color="red" circular icon="x" onClick={() => handleDeleteGithub(cv.id)}>
                            </Button>
                        </Header.Content>
                      </Header>
                    </Table.Cell>
                    <Table.Cell>{cv.gitHubAddress}</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell>
                      <Header as="h4" image>
                        <Header.Content>
                          <a
                            href={cv.linkedlnAddress}
                            target={"_blank"}
                            rel="noopener noreferrer"
                          >
                            <Button color="linkedin" disabled={!cv.linkedlnAddress}>
                              <Icon name="linkedin" /> LinkedIn
                            </Button>
                          </a>
                          <Popup trigger={<button className="ui button"> Güncelle </button>} modal>
                            <UpdateLinkeln cvId={cv.id} />
                          </Popup>
                        
                         
                           <Button 
                           >
                              <Icon name="x"/>
                            </Button>
                        </Header.Content>
                      </Header>
                    </Table.Cell>
                    <Table.Cell>{cv.linkedlnAddress}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Card.Description>
          </Card.Content>
          <Card.Content extra></Card.Content>
        </Card>
      </Card.Group>
  

      <Card fluid color={"black"}>
        <Card.Content>
          <Card.Header>
          Egitim
          <Popup trigger={<button className="ui button"> Güncelle </button>} modal>
          <UpdateSchool cvId={cv.id} />
                          </Popup>
                         
          </Card.Header>
        </Card.Content>
        <Table celled color={"black"}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Okul Adı</Table.HeaderCell>
              <Table.HeaderCell>Bölüm</Table.HeaderCell>
              <Table.HeaderCell>Başlangıç Tarihi</Table.HeaderCell>
              <Table.HeaderCell>Mezuniyet Tarihi</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {cv.schools?.map((school) => (
              <Table.Row key={school.id}>
                <Table.Cell>{school.schoolName}</Table.Cell>
                <Table.Cell>{school.section}</Table.Cell>
                <Table.Cell>{school.yearOfEntry}</Table.Cell>
                <Table.Cell>{school.yearOfGraduation ? school.yearOfGraduation:<p>Devam Ediyor</p>}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Card>
      <Card fluid>
        <Card.Content>
          <Card.Header>
            Tecrübeler
           <button className="ui button" style={{marginLeft:"1em"}}> Güncelle </button> 
                          
          </Card.Header>
        </Card.Content>
          <Table celled color={"black"}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                <Table.HeaderCell>Başalngıç Tarihi</Table.HeaderCell>
                <Table.HeaderCell>Bitiş Tarihi</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
            {cv.job_experiences?.map((experiance) => (
              <Table.Row key={experiance.id}>
                <Table.Cell>{experiance.businessName}</Table.Cell>
                <Table.Cell>{experiance.section}</Table.Cell>
                <Table.Cell>{experiance.startDate}</Table.Cell>
                <Table.Cell>{experiance.finishDate ? experiance.finishDate:<p>Devam Ediyor</p>}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
          </Table>
      </Card>

      <Card fluid color={"black"}>
        <Card.Content>
          <Card.Header>
            Yabancı Diller
            <Popup trigger={<button className="ui button"> Güncelle </button>} modal>
                            <UpdateLanguage cvId={cv.id} />
                          </Popup>
                         
          </Card.Header>
        </Card.Content>
        <Table celled color={"black"}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Dil Adı</Table.HeaderCell>
              <Table.HeaderCell>Seviye min:1 max:5</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
          {cv.languages?.map((language) => (
              <Table.Row key={language.id}>
                <Table.Cell>{language.languageName}</Table.Cell>
                <Table.Cell>{language.level}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Card>

      <Card fluid color={"black"}>
        <Card.Content>
          <Card.Header>
          Yetenek
        {<button className="ui button" style={{marginLeft:"1em"}}> Güncelle </button>} 
                        
          </Card.Header>
        </Card.Content>
        <Table celled color={"black"}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Teknoloji Adı</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {cv.skills?.map((skill) => (
              <Table.Row key={skill.id}>
                <Table.Cell>{skill.skillName}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        
      </Card>
    </div>
  );
}