import React from 'react'
import { Dropdown } from 'semantic-ui-react'

export default function Language() {
    return (
        <div>
                  <Dropdown item text='Language'>
                            <Dropdown.Menu>
                            <Dropdown.Item>Türkçe</Dropdown.Item>
                             <Dropdown.Item>English</Dropdown.Item>                    
                            </Dropdown.Menu>
                        </Dropdown>
        </div>
    )
}
