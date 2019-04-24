import React, { useState, FunctionComponent } from 'react'
import { Menu, MenuItemProps } from 'semantic-ui-react'


const Header: FunctionComponent<{ setLogin: (bool:boolean) => any, setImage: (num:number) => any, loggedIn: boolean }> = ({setLogin, setImage, loggedIn}) => {

  const handleItemClick = (e:React.SyntheticEvent, props:MenuItemProps) => {
    setActive(props.name);
    setImage(parseInt(props.id));
  };

  const logoutClick = () => {
    setLogin(false);
  };

  const [activeItem, setActive ] = useState();

  return (
  <>
    { (loggedIn) ?
      <Menu secondary>
        <Menu.Item>
          <img id='logo' src='assets/pawsome.png' alt='Cute Pawsome Logo' />
        </Menu.Item>
        <Menu.Item name='volunteers' id='0' active={true} onClick={handleItemClick}>
          Volunteers Needed
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item name='logout' active={false} onClick={logoutClick}>
            Logout
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    :
      <Menu secondary>
        <Menu.Item>
          <img id='logo' src='assets/pawsome.png' alt='Cute Pawsome Logo' />
        </Menu.Item>
        <Menu.Item name='volunteers' id='0' active={activeItem === 'volunteers'} onClick={handleItemClick}>
          Volunteers
        </Menu.Item>

        <Menu.Item name='shelters' id='1' active={activeItem === 'shelters'} onClick={handleItemClick}>
          Shelters
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item name='login' id='2' active={activeItem === 'login'} onClick={handleItemClick}>
            Login
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    }
  </>
  )
}

export default Header;