import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Aside from './Aside';
import Post from './Post';
import Posts from './Posts';
import useLocalStorage from '../hooks/useLocalStorage';
import { AppContainer } from '../styles/components';

export const Layout = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [viewPost, setViewPost ] = useState<string>('myPosts');
  const { getLS } = useLocalStorage('user');
  const user = getLS();

  useEffect(() => {
    if(!user){
      navigate('/');
    } 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppContainer>
      <Aside
        viewPost={viewPost}
        setViewPost={setViewPost}
      />
      {id ? <Post /> : <Posts viewPost={viewPost} />}
    </AppContainer>
  )
}
