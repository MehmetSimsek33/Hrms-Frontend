import React, { useEffect, useState } from 'react'
import { Icon,Menu, Table } from 'semantic-ui-react';
import JobTitleService from '../services/jobTitleService.jsx';

export default function JobTİtleList() {
  
    const[jobTitles,setJobtitles]=useState([]);
    
   useEffect(()=>
   {
       let jobTitleService=new JobTitleService()
       jobTitleService.getJobTitle().then(result=>setJobtitles(result.data.data))
   }
   )
   
    return (
        <div>
           <Table celled selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Pozisyon Adi</Table.HeaderCell>
                        <Table.HeaderCell>ACIKLAMA</Table.HeaderCell>
                   
                     
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                        {
                            jobTitles.map((jobTitle) =>
                            (
                               <Table.Row key={jobTitle.id}>
                                    <Table.Cell> {jobTitle.title}</Table.Cell>
                                    <Table.Cell> </Table.Cell>
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
