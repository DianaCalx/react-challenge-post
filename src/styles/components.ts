import styled from 'styled-components';
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