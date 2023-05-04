import Axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getError } from '../utils';

export default function SignupScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    try {
      const { data } = await Axios.post('/api/users/signup', {
        name,
        email,
        password,
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
    } catch (err) {
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <Container className=" mb-11 mt-11 min-h-auto w-[800px] shadow-md border-2 rounded-md bg-blue-100 flex flex-row justify-around">
      <div className='flex flex-col justify-center items-center'>
      <Helmet >
        <title>Sign Up</title>
      </Helmet>
      <h1 className="my-3 text-[30px] font-bold">Sign Up</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3 flex flex-row gap-3 justify-between" controlId="name">
          <Form.Label className='text-[18px] font-medium'>Name</Form.Label>
          <Form.Control  className='border-none p-2 w-[300px]' onChange={(e) => setName(e.target.value)} required />
        </Form.Group>

        <Form.Group className="mb-3 flex flex-row gap-3 justify-between" controlId="email">
          <Form.Label className='text-[18px] font-medium'>Email</Form.Label>
          <Form.Control  className='border-none p-2 w-[300px]'
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3 flex flex-col gap-3 justify-between" controlId="password">
          <div className='flex justify-between gap-3'>
          <Form.Label className='text-[18px] font-medium'>Password</Form.Label>
          <Form.Control  className='border-none p-2 w-[300px]'
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          </div>
          <div className='flex flex-row'>
          <Form.Group className="mb-3 flex flex-row gap-3 justify-between" controlId="confirmPassword">
            <Form.Label className='text-[18px] font-medium'>Confirm Password</Form.Label>
            <Form.Control  className='border-none p-2 w-[300px]'
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Form.Group>
          </div>
        </Form.Group>
        <div className="mb-3">
          <Button className='border-none' type="submit">Sign Up</Button>
        </div>
        <div className="mb-3">
          Already have an account?{' '}
          <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
        </div>
      </Form>
      </div>
    </Container>
  );
}
