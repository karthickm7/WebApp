/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Dispatch } from 'redux';

import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { putuser } from '../../State /Action/Action';
import './Model.css';
import { TextField, Button } from '@mui/material';
import Grid from '@mui/material/Grid';

export interface UseData<T> {
  email: T;
  name: T;
}
type stringTab = UseData<string>;
const Modals = () => {
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();
  const [state, setState] = useState<stringTab>({ name: '', email: '' });
  const [edituser, setEdituser] = useState<stringTab>({
    name: state.name,
    email: state.email
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setEdituser({ ...edituser, [e.target.name]: e.target.value });
  };

  const { id } = useParams();
  console.log({ id });

  const dynamicEdit = () => {
    axios
      .get(`http://localhost:3016/getuser/${id}`)

      .then((res) => {
        console.log(res.data.data, 'edit');
        setState(res.data.data);
      })
      .catch((err) => {
        console.log(err, 'error');
      });
  };

  useEffect(() => {
    dynamicEdit();
  }, [id]);

  useEffect(() => {
    if (state) {
      setEdituser(state);
    }
  }, [state]);

  const handleUpdate = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(putuser(edituser, id as string));
    navigate('/home');
  };

  return (
    <div className="parent">
      <div className="editbox">
        <h1>Edit user</h1>
        <form style={{ justifyContent: 'center' }}>
          <Grid item xs={12}>
            <div></div>
            <TextField
              label="username"
              name="name"
              fullWidth
              value={edituser.name}
              onChange={handleChange}
              margin="dense"
            />
          </Grid>
          <div />
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="email"
              name="name"
              value={edituser.email}
              onChange={handleChange}
              margin="dense"
            />
          </Grid>
          <div />
          <Grid item xs={8}>
            <Button className="signUpSubmit" variant="contained" onClick={handleUpdate}>
              Save Changes
            </Button>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default Modals;
