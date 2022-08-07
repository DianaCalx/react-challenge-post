import { useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import useFetch from '../hooks/useFetch';
import Image from './Image';
import { FlexColumn, Paragaph, UserContainer} from '../styles/components';

interface UserInter {
  address : {
    city: string
    geo : {
      lat: string
      lng: string
    }
    street: string
    suite: string
    zipcode: string
  }
  company : {
    bs: string
    catchPhrase: string
    name: string
  }
  email: string
  id: number
  name: string
  phone: string
  username: string
  website:string
}

const User = ({userId}: { userId: number }) => {  

  const { getLS } = useLocalStorage('user');
  const { data, fetchData } = useFetch();
  const userLS = getLS();
  const [user, setUser] = useState<UserInter | undefined>();

  useEffect(() => {
    if(userId &&  userId === userLS.id){
      setUser(userLS);
    }else {
      fetchUser();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data) {
      setUser(data[0]);
    }
  }, [data])

  const fetchUser = () => {
    const url:string = `${process.env.REACT_APP_API_URL}/users?id=${userId}`;
    fetchData(url);
  }
  
  return (
    <UserContainer>
      <FlexColumn>
        <Image/>
        <p>{user?.name}</p>
        <p>{user?.username}</p>
        <p>{user?.email}</p>
        <Paragaph><span>Phone:</span> {user?.phone}</Paragaph>
        <Paragaph><span>Email:</span> {user?.email}</Paragaph>
        <Paragaph><span>Address:</span> {user?.address.city}</Paragaph>
      </FlexColumn>
    </UserContainer>
  )
}

export default User