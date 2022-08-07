import { useState } from 'react';
import { Title, Container, Form, Input, Button } from '../styles/components';

const Login = () => {

  const [email, setEmail] = useState<string>('');

  const handleSubmit = () => {

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
          value={"Login"}
          disabled={!email}          
        />
      </Form>
    </Container>
  )
}

export default Login