import React, { useEffect, useState } from 'react'
import { Icon, Menu, Table, Button, Popup, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import EmployeService from '../services/employesService.jsx';
import EmployeUpdate from './EmployeUpdate.jsx';
export default function EmployeList() {

    const [employes, setEmployes] = useState([]);

    useEffect(() => {
        let employes = new EmployeService()
        employes.getEmploye().then(result => setEmployes(result.data.data))
    }, []

    )


    return (

        <div>
            {
                employes.map((employe) =>
                (
                    <Card fluid color="blue" key={employe.id}>
                        <Card.Content>
                            <Card.Meta>
                                <Table celled selectable>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>Adi</Table.HeaderCell>
                                            <Table.HeaderCell>Soyadi</Table.HeaderCell>
                                            <Table.HeaderCell>Email-Adres</Table.HeaderCell>
                                         

                                        </Table.Row>
                                    </Table.Header>

                                    <Table.Body>

                                   
                                        <Table.Cell>{employe.firstName}</Table.Cell>
                                        <Table.Cell> {employe.lastName}</Table.Cell>
                                        <Table.Cell> {employe.emailAdress}</Table.Cell>



                                        <Table.Cell> <Link to={`/EmployeDetail/${employe.id}`}> {employe.id}</Link></Table.Cell>
                                    </Table.Body>

                                </Table>
                            </Card.Meta>
                        </Card.Content>
                        <Card.Description>

                       
                        </Card.Description>
                    </Card>
                ))
            }


        </div>
    )
}
