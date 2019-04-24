import React, { useState, FunctionComponent } from 'react'
import { Menu, MenuItemProps } from 'semantic-ui-react'


const Header: FunctionComponent<{ setImage: (num:number) => any }> = ({setImage}) => {

  const handleItemClick = (e:React.SyntheticEvent, props:MenuItemProps) => {
    setActive(props.name);
    setImage((props.name === 'volunteers')? 0 : 1);
  };
  const [activeItem, setActive ] = useState();

  return (
  <>
    <Menu secondary>
      <Menu.Item>
        <img id='logo' src='assets/pawsome.png' alt='Cute Pawsome Logo' />
      </Menu.Item>
      <Menu.Item name='volunteers' active={activeItem === 'volunteers'} onClick={handleItemClick}>
        Volunteers
      </Menu.Item>

      <Menu.Item name='shelters' active={activeItem === 'shelters'} onClick={handleItemClick}>
        Shelters
      </Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Item name='signup' active={activeItem === 'signup'} >
          Sign Up
        </Menu.Item>

        <Menu.Item name='help' active={activeItem === 'help'}>
          Help
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  </>
  )
}

export default Header;