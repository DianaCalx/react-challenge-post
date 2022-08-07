import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import { AsideContainer, ButtonPost, ButtonLogout, DivContainer, ParAside } from '../styles/components';

interface AsideProps {
  viewPost: string,
  setViewPost: React.Dispatch<React.SetStateAction<string>>
}

const Aside = ({viewPost, setViewPost}: AsideProps) => {
  const { getLS, removeLS } = useLocalStorage('user');
  const user = getLS();
  const navigate = useNavigate();

  const handleSubmitMyPost = () =>{
    setViewPost('myPosts');
    navigate('/posts');
  }

  const handleSubmitAllPost = () =>{
    setViewPost('allPosts');
    navigate('/posts');
  }

  const handleSubmitDelete = () => {
    removeLS();
    navigate('/');
  }

  return (
    <AsideContainer>
      <DivContainer>
        <ButtonPost
          active={viewPost === 'myPosts'}
          onClick={handleSubmitMyPost}
        >
          My Posts
        </ButtonPost>
        <ButtonPost
          active={viewPost === 'allPosts'}
          onClick={handleSubmitAllPost}
        >
          All Posts
        </ButtonPost>
      </DivContainer>
      <DivContainer>
        <ParAside>Logged in as: {user?.username}</ParAside>
        <ButtonLogout
          onClick={handleSubmitDelete}
        >Logout</ButtonLogout>
      </DivContainer>
    </AsideContainer>
  )
}

export default Aside