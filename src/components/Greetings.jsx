/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showGreetings } from '../redux/Message/message';

const Greetings = () => {
  const { greetings, loading } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showGreetings());
  }, []);
  return (
    <div>{loading ? <h1>Loading...</h1> : <h1>{greetings.greeting}</h1>}</div>
  );
};

export default Greetings;