import React, { useEffect, useState } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import CandidateService from '../services/candidateService.jsx';


//candidate

export default function CandidateList() {
    const [candidates, setCandidate] = useState([]);

    useEffect(() => {
        let candidateService = new CandidateService()
        candidateService.getCandidate().then(result => setCandidate(result.data.data))


    }

    )

    return (

        <div>
            <Table celled selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Adi</Table.HeaderCell>
                        <Table.HeaderCell>Soyadi</Table.HeaderCell>
                        <Table.HeaderCell>Email-Adres</Table.HeaderCell>
                        <Table.HeaderCell>Dogum Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>id</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        candidates.map((candidate) =>
                        (
                            <Table.Row key={candidate.id}>
                                <Table.Cell>{candidate.firstName}</Table.Cell>
                                <Table.Cell>{candidate.lastName}</Table.Cell>
                                <Table.Cell> {candidate.emailAdress}</Table.Cell>
                                <Table.Cell> {candidate.birthDate}</Table.Cell>
                                <Table.Cell> {candidate.identificationNumber}</Table.Cell>
                            </Table.Row>
                        ))
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
