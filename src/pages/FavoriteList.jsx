import React, { useState } from 'react'
import { useEffect } from 'react';
import FavoriteService from '../services/favoriteService.jsx';
import { Menu, Table, Icon, Label } from 'semantic-ui-react'
import { If, Then, ElseIf, Else } from "react-if-elseif-else-render";

export default function FavoriteList() {
    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
        let favoriteService = new FavoriteService();
        favoriteService.getFavorite().then(result => setFavorites(result.data.data))
    })
    return (
        <div>
            <Table celled selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell><Label pointing="below" color="violet">Şirket</Label></Table.HeaderCell>
                        <Table.HeaderCell><Label pointing="below" color="violet">Genel İş Pozisyonu</Label></Table.HeaderCell>
                        <Table.HeaderCell><Label pointing="below" color="violet">İş Açıklamasi</Label></Table.HeaderCell>
                        <Table.HeaderCell><Label pointing="below" color="violet">Minumum Ücret</Label></Table.HeaderCell>
                        <Table.HeaderCell><Label pointing="below" color="violet">Maxiumum Ücret</Label></Table.HeaderCell>
                        <Table.HeaderCell><Label pointing="below" color="violet">Açık Pozisyon</Label></Table.HeaderCell>
                     


                        <Table.HeaderCell><Label pointing="below" color="violet">Şehir</Label></Table.HeaderCell>
                        <Table.HeaderCell><Label pointing="below" color="violet">Çalışma Zamanı</Label></Table.HeaderCell>
                        <Table.HeaderCell><Label pointing="below" color="violet">Çalışma Türü</Label></Table.HeaderCell>


                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        favorites.map((favorite) =>
                        (
                            <Table.Row key={favorite.id}>
                                <Table.Cell>
                                    <div>{favorite.jobPosting.employer.companyName}</div>
                                </Table.Cell>
                                <Table.Cell> {favorite.jobPosting.jobTitle.title}</Table.Cell>

                                <Table.Cell> {favorite.jobPosting.description}</Table.Cell>
                                <Table.Cell>
                                    <div>{favorite.jobPosting.minSalary}</div>
                                </Table.Cell>
                                <Table.Cell>
                                    <div>{favorite.jobPosting.maxSalary}</div>
                                </Table.Cell>
                                <Table.Cell>
                                    <div>{favorite.jobPosting.openPosition}</div>
                                </Table.Cell>
                               
                               


                                <Table.Cell>
                                    <div>{favorite.jobPosting.city.cityName}</div>
                                </Table.Cell>
                                <Table.Cell>
                                    <div>{favorite.jobPosting.workingTime.workingTimeName}</div>
                                </Table.Cell>
                                <Table.Cell>
                                    <div>{favorite.jobPosting.typeOfWork.typeOfWorkName}</div>
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
