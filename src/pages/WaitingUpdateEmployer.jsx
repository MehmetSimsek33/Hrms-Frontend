import React, { useEffect, useState } from 'react'
import { Icon, Menu, Table, Button, Tab } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import EmployerService from '../services/employerService.jsx';
export default function WaitingUpdateEmployer() {
    let employerService = new EmployerService()
    const [tempEmployers, setTempEmployers] = useState([]);

    useEffect(() => {

        employerService.getTempEmployer().then(result => setTempEmployers(result.data.data))
    }

    )
    function emlpyerVerify(tempEmployerId) {
        employerService.verifyfdEmployer(tempEmployerId);
        window.location.reload(false);
        
    }
    function deleteTempEmployer(tempEmployerId) {
        employerService.deleteTempEmployer(tempEmployerId);
        window.location.reload(false);
    }




    return (

        <div>
            <Table celled selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Şirket Adi</Table.HeaderCell>
                        <Table.HeaderCell>Web SİTESİ</Table.HeaderCell>
                        <Table.HeaderCell>TELEFON</Table.HeaderCell>
                        <Table.HeaderCell>Güncelle</Table.HeaderCell>


                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        tempEmployers.map((tempEmployer) =>
                        (
                            <Table.Row key={tempEmployer.id}>
                                <Table.Cell><div> {tempEmployer.companyName}</div></Table.Cell>
                                <Table.Cell><div>{tempEmployer.webAddress}</div></Table.Cell>
                                <Table.Cell> <div>{tempEmployer.phone}</div></Table.Cell>
                                <Table.Cell>
                                    <Button.Group>
                                    <Button
                                                positive
                                                animated
                                                onClick={() => emlpyerVerify(tempEmployer.id)}
                                            >
                                                <Button.Content visible>Onayla</Button.Content>
                                                <Button.Content hidden>
                                                    <Icon name="check" />
                                                </Button.Content>
                                            </Button>

                                       
                                        <Button.Or text='&' />
                                        <Button
                                                negative
                                                animated
                                                onClick={() => deleteTempEmployer(tempEmployer.id)}
                                                style={{ marginTop: "0.5em" }}
                                            >
                                                <Button.Content visible>Reddet</Button.Content>
                                                <Button.Content hidden>
                                                    <Icon name="ban" />
                                                </Button.Content>
                                            </Button>
                                    </Button.Group>
                                </Table.Cell>
                              


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
