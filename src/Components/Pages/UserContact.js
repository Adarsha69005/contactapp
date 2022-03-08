import {React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Container, List} from 'semantic-ui-react';

export default function UserContact() {

    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(async() => {
        await findUser();
        return () => {

        }
      },[])

      const findUser = async () => {
        const userData = JSON.parse(localStorage.getItem('userdata')); 
        let oneuser = await userData.find(x => x.id == parseInt(id)) 
        setUser(oneuser);   
        // console.log(user.name)     
      }

  return (
    <div className="usercontainer">
        <div className="userdetails">Name : {user?.name}</div>
        <div className="userdetails"> Email : {user?.email}</div>
        <div className="userdetails">Phone : {user?.phone}</div>
        <div className="userdetails">Website : {user?.website}</div>
        <div className="userdetails">Company : {user?.company?.name}</div>
        <div className="userdetails">Address : {user?.address?.street} - {user?.address?.city} , {user?.address?.zipcode}</div>
    </div>
  )
}
