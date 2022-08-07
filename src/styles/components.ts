import styled, { css } from 'styled-components';
import { Link as DefaultLink } from 'react-router-dom';
import v from './variables';

export const Title = styled.h1`
  color: white;
  line-height: 0;
  text-transform: uppercase;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  height: 100vh;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Input = styled.input`
  text-align: center;
  width: 40rem;
  height: 5rem;
  border: none;
`

export const Button = styled.input`
  text-align: center;
  width: 40rem;
  height: 5rem;
  background-color: ${v.tertiaryColor};
  border: none;
  color: white;
  font-weight: bold;
  &:disabled {
    background-color: ${v.neutralColor1};
  }
  &:hover:not(:disabled) {
    cursor: pointer;
    color: black;
    background-color: ${v.fourthColor};
  }
`

export const AppContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`
export const AsideContainer = styled.div`
  background-color: ${v.shadowColor};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
  width: 15%;
`

interface ButtonProps {
  active?: boolean;
}

export const ButtonPost = styled.button<ButtonProps>`
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  border: none;
  background-color: transparent;
  margin-bottom: 2rem;
  cursor: pointer;

  &:hover{
    border-bottom: 5px solid${v.tertiaryColor};
  }

  ${props => props.active && css`
    border-bottom: 5px solid${v.tertiaryColor};
  `}
`

export const ButtonLogout = styled.button`
  color: ${v.tertiaryColor};
  font-size: 1.8rem;
  font-weight: bold;
  border: none;
  background-color: transparent;
  margin-bottom: 2rem;
  cursor: pointer;
`

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border: 1px solid ${v.shadowColor};
  padding: 1rem;
  width: 75%;
`

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border: 1px solid ${v.shadowColor};
  padding: 1rem;
  flex: 1;
`

export const CommentCont = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  flex: 1;
`

export const DivPosts = styled.div`
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  padding: 2rem;
`

export const ContainerPost = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  color: ${v.shadowColor};
  height: 100vh;
  overflow-y: auto;
`
export const ParAside = styled.p`
  color: ${v.secondaryColor};
  text-align: center;
`;

export const ParLoading = styled.p`
  color: ${v.shadowColor2};
  text-transform: uppercase;
  font-size: 2.5rem;
  text-align: center;
  height: 100%;
  flex: 1;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ParError = styled.p`
  color: ${v.fourthColor};
  text-transform: uppercase;
  font-size: 2.5rem;
  text-align: center;
  height: 100%;
  margin: 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Paragaph = styled.p`
  color: ${v.shadowColor};
  & span {
    font-weight: bold;
    color: ${v.shadowColor2};
  }
`;

export const ParagaphRel = styled.p`
  position: absolute;
  color: ${v.shadowColor};
  right: 1rem;
  top: -1rem;
`;


interface ImageProps {
  isSquare?: boolean;
}

export const ImageS = styled.img<ImageProps>`
  border-radius: 50%;
  object-fit: fill;
  width: 6rem;
  height: 6rem;
  object-position: center;
  ${props => props.isSquare && css`
    border-radius: 0%;
    width: 40rem;
    height: 20rem;
  `}
`

export const DivData = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid ${v.shadowColor};
  margin: 1rem 0;
  padding: 1rem;
  gap: 1rem;
  border-top-left-radius: 2rem;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 5rem;
  border-bottom-left-radius: 3rem;
`

export const Link = styled(DefaultLink)`
  text-decoration: none;
  color: unset;
`

export const Flex = styled.div`
  flex: 1;
  display: flex;
  gap: 2rem;
`

export const CommentFlex = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  position: relative;
  border: 1px solid ${v.shadowColor};
  width: 100%;
  padding: 1rem;
`

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  
  & p {
    margin: 0;
  }
`

