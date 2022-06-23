/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Dispatch } from 'redux';
import { Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { putuser } from '../../State /Action/Action';
import './Model.css';

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
    <>
      <div className="containers">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3"></div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                  <img
                    className="image"
                    style={{}}
                    src="https://miro.medium.com/max/1043/1*uMxwajzG5l3n2x7_izXdHw.png"
                    alt=""
                  />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                  <h1>Edit User</h1>

                  <div>
                    <input
                      className="inputbox"
                      onChange={handleChange}
                      value={edituser.name}
                      name="name"
                      type="text"
                      placeholder="usertName"></input>
                  </div>

                  <div>
                    <input
                      className="inputbox"
                      onChange={handleChange}
                      value={edituser.email}
                      name="email"
                      type="text"
                      placeholder="Enter your mail"></input>
                  </div>

                  <Button variant="dark" className="button" onClick={handleUpdate}>
                    Save Changes
                  </Button>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modals;
