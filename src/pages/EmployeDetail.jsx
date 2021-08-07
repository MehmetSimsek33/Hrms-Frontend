import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Table,Card} from "semantic-ui-react";
import { Link } from 'react-router-dom';
import EmployeService from '../services/employesService.jsx';

export default function EmployeDetail() {
    let {id} = useParams();
    const [employee, setEmploye] = useState({});
    let employeService = new EmployeService()
    useEffect(() => {
        employeService.getByEmployeId(id).then(result => setEmploye(result.data.data))
    }, [id]);

    return (
        <div>
     <Card fluid color="blue" key={employee.id}>
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

                                       
                                        <Table.Cell>{employee.firstName}</Table.Cell>
                                        <Table.Cell> {employee.lastName}</Table.Cell>
                                        <Table.Cell> {employee.emailAdress}</Table.Cell>


                                        <Table.Cell> <Link to={`/EmployeUpdate/${employee.id}`}> {employee.id}</Link></Table.Cell>
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
