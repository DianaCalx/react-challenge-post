import { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { Title, Container, Form, Input, Button } from '../styles/components';
import useLocalStorage from '../hooks/useLocalStorage';

const Login = () => {

  const [email, setEmail] = useState<string>('');
  const [alert, setAlert] = useState<string>('');
  const { data, loading, error, fetchData } = useFetch();
  const { setLS } = useLocalStorage('user');
  const navigate = useNavigate();

  useEffect(() => {
    if(error){
      addAlert('There was an error try again');
    } else if(data?.length === 0 && !error){
      addAlert('User was not found!'); 
    } else if (data?.length) {
      setLS(data[0]);  
      navigate( '/posts', { replace: true});
    }
  }, [data, error, navigate, setLS]);  

  const addAlert = (message:string) => {
    setAlert(message);
    setTimeout(() => {
      setAlert('');
    }, 2000);
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    // eslint-disable-next-line no-useless-escape
    const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const url: string = `https://jsonplaceholder.typicode.com/users?email=${email}`;
 
    if(!email){
      addAlert('Email cannot be empty');
    } 
        
    if(regex.test(email)){ 
      fetchData(url);
    } else {
      addAlert('Invalid Email');
    }
  }

  return (
    <Container>
      <Title>Welcome</Title>
      <Form
        onSubmit={handleSubmit}
      >
        <Input
          name="email"
          placeholder="user@ravn.co" 
          autoComplete='off'
          value={email}
          onChange={ e => setEmail(e.target.value)}
        />
        <Button
          name="login"
          type="submit"
          value={loading ? "Loading" : "Login"}
          disabled={!email}          
        />
      </Form>
      { alert && <p>{alert}</p> }
    </Container>
  )
}

export default Login