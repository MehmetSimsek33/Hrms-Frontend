import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Table,Card} from "semantic-ui-react";
import { Link } from 'react-router-dom';
import EmployerService from '../services/employerService.jsx';

export default function EmployerDetail() {
    let {id} = useParams();
    const [employers, setEmployer] = useState({});
    let employerService = new EmployerService()
    useEffect(() => {
        employerService.getByEmployerId(id).then(result => setEmployer(result.data.data))
    }, [id]);

    return (
        <div>
     <Card fluid color="blue" key={employers.id}>
                        <Card.Content>
                            <Card.Meta>
                                <Table celled selectable>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>Firma Adı</Table.HeaderCell>
                                            <Table.HeaderCell>Firma Web Sitesi</Table.HeaderCell>
                                            <Table.HeaderCell>Email-Adres</Table.HeaderCell>
                                            <Table.HeaderCell>Telefon Numarasi</Table.HeaderCell>  

                                        </Table.Row>
                                    </Table.Header>

                                    <Table.Body>

                                       
                                        <Table.Cell>{employers.companyName}</Table.Cell>
                                        <Table.Cell> {employers.webAddress}</Table.Cell>
                                        <Table.Cell> {employers.emailAdress}</Table.Cell>
                                        <Table.Cell> {employers.phone}</Table.Cell>

                                        <Table.Cell> <Link to={`/EmployerUpdate/${employers.id}`}>Güncelle</Link></Table.Cell>
                                    </Table.Body>

                                </Table>
                            </Card.Meta>
                        </Card.Content>
                        <Card.Description>
                
                        </Card.Description>
                    </Card>
        </div>
    )
}