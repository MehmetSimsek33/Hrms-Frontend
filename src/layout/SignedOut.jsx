import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut(props) {
    return (
        <div>
            
                <Menu.Item>
                <Button onClick={props.SignInProps} content='Giriş Yap' primary style={{marginRight:'0.5em'}}  />
                <Button content='Kayit Ol' primary />
                </Menu.Item>

            

        </div>
    )
}
