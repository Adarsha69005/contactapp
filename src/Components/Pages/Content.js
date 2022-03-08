import React from 'react';
import {Image, List, Card} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Content(props) {

  const listUser = props.users.map((user,i)=> {
    return (
      <Link to={`/${user.id}`} key={i}  >
      <List.Item className="linkusers">
          <div className="circle">{user.name.charAt(0).toUpperCase()}</div>
          <List.Content>
            <List.Header className="listheader">{user.name}</List.Header>
          </List.Content>
      </List.Item>
      </Link>
    );
  })
  return (
    <div className="contentblock">
      <List animated verticalAlign="middle" className="listblock">
        {listUser}
      </List>
    </div>
  )
}
