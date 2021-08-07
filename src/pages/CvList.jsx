import React, { useEffect, useState } from 'react'
import { Icon, Menu, Table, Segment, Rating, Popup, Button, Card } from 'semantic-ui-react';
import CvService from '../services/cvService.jsx';
import LanguageService from '../services/languageService.jsx';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
export default function CvList() {
    const [languages, setLanguage] = useState([]);
    const [cvs, setCvs] = useState([]);
    const [cvDto, setCvDto] = useState([]);
    useEffect(() => {
        let cvService = new CvService()
        cvService.getCvDto().then(result => setCvDto(result.data.data))
    }, []);

    useEffect(() => {
        let cvService = new CvService()
        cvService.getCv().then(result => setCvs(result.data.data))
    }, []);
    useEffect(() => {
        let languageService = new LanguageService()
        languageService.getLanguage().then(result => setLanguage(result.data.data))
    }, []);

    return (

        <div>
            <Table celled selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Adi Soyadi</Table.HeaderCell>
                        <Table.HeaderCell>Dogum Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Linkedin adresi</Table.HeaderCell>
                        <Table.HeaderCell>Github Adres</Table.HeaderCell>
                        <Table.HeaderCell>Acıklama  </Table.HeaderCell>
                        <Table.HeaderCell>Dil bilgisi </Table.HeaderCell>


                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        cvDto.map((cvDtos) =>
                        (
                            <Table.Row key={cvDtos.id}>
                                 
                                <Table.Cell>{cvDtos?.firstName} {cvDtos?.lastName}</Table.Cell>
                                <Table.Cell>{cvDtos?.birthDate}</Table.Cell>
                                <Table.Cell>{cvDtos?.linkedlnAddress}</Table.Cell>
                                <Table.Cell>{cvDtos?.gitHubAddress}</Table.Cell>
                                
                                <Table.Cell>{cvDtos?.coverLetter}</Table.Cell>
                                <Table.Cell>
                                    {cvDtos.languages.map((lang) => (
                                        <p key={lang.id}>{lang.languageName + "("+lang.level+") " }</p>
                                    ))}
                                </Table.Cell>
                          
                                <Table.Cell>{cvDtos?.schools?.schoolName}</Table.Cell>
                                <Table.Cell><Button    as={NavLink} to={`/cvDetail/${cvDtos.id}`}>Cv Detayi</Button></Table.Cell>

                            </Table.Row>

                        )
                        )
                    }

                </Table.Body>

               
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
