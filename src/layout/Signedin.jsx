import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
export default function Signedin(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://c1.klipartz.com/pngpicture/178/596/sticker-png-circle-silhouette-user-profile-avatar-black-line-blackandwhite-logo-rectangle.png"></Image>
                <Dropdown pointing="top left" text="Mehmet">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Favori ilanlarim"  icon="heart" as={NavLink} to="/favoriteList"  />
                        <Dropdown.Item text="ilan Ekle"  icon="add" as={NavLink} to="/JobPostingAdd"  />
                        <Dropdown.Item text="Cv Ekle"  icon="add" as={NavLink} to="/cv"  />
                        <Dropdown.Item onClick={props.SignOutProps} text="Çıkış Yap" icon="sign-out"/>
    
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item> 
        </div>
    )
}
