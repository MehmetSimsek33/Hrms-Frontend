import React, { useState } from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut.jsx'
import Signedin from './Signedin.jsx'
import { useHistory } from 'react-router'
import Language from './Language.jsx'
import { NavLink } from 'react-router-dom'
export default function Navi() {
    const [isAutoticated, setIsAutoticated] = useState(true)
    const history = useHistory()
    function handleSıgnOut(params) {
        setIsAutoticated(false)
        history.push("/")

    }
    function handleSıgnIn(params) {
        setIsAutoticated(true)
    }
    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item as={NavLink} exact to="/" name="Ana Sayfa" />
                    <Menu.Item name="İş İlanları" as={NavLink} to="/jobposting" />
                    <Menu.Item name="İş Verenler" as={NavLink} to="/employer" />
                    <Menu.Item name="İş Arayanlar" as={NavLink} to="/candidate" />
                    <Menu.Item name="Cv Listesi" as={NavLink} to="/cv" />
                    <Menu.Menu position='right'>
                        <Language />
                        {isAutoticated ? <Signedin SignOutProps={handleSıgnOut} bisey="1" /> : <SignedOut SignInProps={handleSıgnIn} bisey="1" />}


                    </Menu.Menu>
                </Container>

            </Menu>

        </div>
    )
}
