import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { Header, Icon, Search, Grid } from 'semantic-ui-react';

export default function HeaderComponent(props) {

let navigate = useNavigate();

  return (
    <div className="headerblock">
    <Grid>
      <Grid.Column width={10}>
        <Header as="h1" >
        <Icon name='address book' className="iconheader" size='huge' className="headercontent" onClick={() => {
          navigate('/')
        }} />
        <Header.Content className="headercontent" >Contacts</Header.Content>
        </Header>
      </Grid.Column>
      <Grid.Column width={4}>
        <Search fluid className="searchbar" value={props.value} results={props.results} placeholder="Search..." onSearchChange={props.searchSubmit} />
      </Grid.Column>
    </Grid>
    
    
    </div>
  )
}
