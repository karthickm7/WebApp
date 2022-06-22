/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Dispatch } from "redux";
import { Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { putuser } from "../../State /Action/Action";
import "./Model.css";

export interface UseData<T> {
  email: T;
  name: T;
}
type stringTab = UseData<string>;
const Modals = () => {
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();
  const [state, setState] = useState<stringTab>({ name: "", email: "" });
  const [edituser, setEdituser] = useState<stringTab>({
    name: state.name,
    email: state.email,
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
        console.log(res.data.data, "edit");
        setState(res.data.data);
      })
      .catch((err) => {
        console.log(err, "error");
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
    navigate("/home");
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
            placeholder="Enter your mail"
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
