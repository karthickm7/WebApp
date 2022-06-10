/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { putuser } from "../../State /Action/Action";
import "./Model.css";

const Modals = (props: any) => {
  let navigate = useNavigate();
  let dispatch: any = useDispatch();
  const [state, setState] = useState<any>({});
  const [edituser, setEdituser] = useState<any>({
    name: state.name,
    email: state.email,
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setEdituser({ ...edituser, [e.target.name]: e.target.value });
  };

  const {id} = useParams();
  console.log({id});

  useEffect(() => {
    const dynamicedit = () => {
      axios
        .get(`http://localhost:3016/getuser/${id}`)

        .then((res) => {
          console.log(res.data.data, "edit");
          setState(res.data.data);
        })
        .catch((err) => {
          console.log(err, "error");
        });
    };
    dynamicedit();
  }, []);

  useEffect(() => {
    if (state) {
      setEdituser(state);
    }
  }, [state]);

  const handleUpdate = (e: any) => {
    e.preventDefault();
    dispatch(putuser(edituser,id ));
    navigate('/home');
  };

  return (
    <>
      <div className="form">
        <h1>Edit User</h1>
       
            <div>
              <input
                onChange={handleChange}
                value={edituser.name}
                name="name"
                type="text"
                placeholder="usertName"
              ></input>
            </div>

            <div>
              <input
                onChange={handleChange}
                value={edituser.email}
                name="email"
                type="text"
                placeholder="Email"
              ></input>
            </div>
         
            <Button variant="secondary" className="button" onClick={handleUpdate}>
              Save Changes
            </Button>
         
      </div>
    </>
  );
};

export default Modals;
