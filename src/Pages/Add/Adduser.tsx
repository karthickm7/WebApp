/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { adduser } from '../../State /Action/Action';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { Istate } from '../../Pages/Register/Signup';
import { useNavigate } from 'react-router';
import './Adduser.css';

const Adduser = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const navigate = useNavigate();
  const [addData, setAddData] = useState<Istate>({
    id: uuidv4(),
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setAddData({ ...addData, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    dispatch(adduser(addData));
    navigate('/home');
  };
  return (
    <>
      <div className="parent">
        <div className="editbox">
          <h1>Add User</h1>
          <form style={{ justifyContent: 'center' }}>
            <Grid item xs={12}>
              <label className="labels">UserName</label>
              <TextField
                multiline
                name="name"
                placeholder="enter your name"
                value={addData.name}
                onChange={handleChange}
                margin="dense"
              />
            </Grid>
            <div />
            <Grid item xs={12}>
              <label className="labels"> Email </label>
              <TextField
                multiline
                name="email"
                placeholder="Enter mail"
                value={addData.email}
                onChange={handleChange}
                margin="dense"
              />
            </Grid>
            <div />
            <Grid item xs={8}>
              <Button className="signUpSubmit" variant="contained" onClick={handleAdd}>
                Add User
              </Button>
            </Grid>
          </form>
        </div>
      </div>
    </>
  );
};
export default Adduser;
