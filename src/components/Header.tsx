import React, { useState, FunctionComponent } from 'react'
import { Menu, MenuItemProps } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const Header: FunctionComponent<{ setUser: (user?:{}) => any, setLogin: (bool:boolean) => any, setImage: (num:number) => any, loggedIn: boolean, user: {signOut:()=>any}, isShelter:boolean }> = ({setLogin, setImage, loggedIn, user, isShelter}) => {

  const handleItemClick = (e:React.SyntheticEvent, props:MenuItemProps) => {
    setActive((props.name) ? props.name : '');
    setImage(parseInt(props.id));
  };

  const logoutClick = () => {
    setLogin(false);
    //setUser(undefined);
    //if (user) user.signOut();
  };

  const [activeItem, setActive ] = useState('volunteers');

  console.log('user', user);

  return (
  <>
    { (loggedIn) ?
      <Menu secondary>
        <Menu.Item>
          <img id='logo' src='assets/pawsome.png' alt='Cute Pawsome Logo' />
        </Menu.Item>
        {(isShelter) ?
          <Menu.Item name='shelters' id='0' active={true} onClick={()=>{}}>
            Shelter Home
          </Menu.Item>
        :
          <Menu.Item name='volunteers' id='0' active={true} onClick={()=>{}}>
            Volunteers Needed
          </Menu.Item>
        }
        <Menu.Menu position='right'>
          <Menu.Item as={Link} to='/' name='logout' active={false} onClick={logoutClick}>
            Logout
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    :
      <Menu secondary>
        <Menu.Item>
          <img id='logo' src='assets/pawsome.png' alt='Cute Pawsome Logo' />
        </Menu.Item>
        <Menu.Item name='volunteers' as={Link} to='/volunteers' id='0' active={activeItem === 'volunteers'} onClick={handleItemClick}>
          Volunteers
        </Menu.Item>

        <Menu.Item name='shelters' as={Link} to='/shelters' id='1' active={activeItem === 'shelters'} onClick={handleItemClick}>
          Shelters
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item name='login' id='2' as={Link} to='/login' active={activeItem === 'login'} onClick={handleItemClick}>
            Login
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    }
  </>
  )
}

export default Header;