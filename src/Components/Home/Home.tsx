/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getuser, removeuser } from "../../State /Action/Action";
import { useNavigate } from "react-router";

export interface EditData {
  email: string;
  id: number | string;
  name: string;
  password: string;
  i: number;
}
const Home = () => {
  const dispatch: any = useDispatch();

  const navigate = useNavigate();
  const user = useSelector((state: any) => state.allreducer.user);

  console.log(user, "Homeuseselector");

  //delete onClick
  const onDelete = (
    e: React.MouseEvent<HTMLElement>,
    userData: string | number
  ): void => {
    e.preventDefault();
    dispatch(removeuser(userData));
    dispatch(getuser());
  };

  //edit onClick
  const handleEdit = (userData: EditData) => {
    console.log(userData, "type of userdata");
    navigate(`/Modals/${userData.id}`);
  };

  useEffect(() => {
    dispatch(getuser());
    setTimeout(() => {
      dispatch(getuser());
      navigate("/login");
    }, 60000);
  }, [dispatch, navigate]);

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}> welcome Home </h1>
        <Table striped bordered hover data-testid="table">
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>user ID</th>
              <th>name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {user.length > 0 &&
              user.map((userData: EditData, i: number) => {
                return (
                  <tr key={userData.i}>
                    <td>{i + 1}</td>
                    <td>{userData.id}</td>
                    <td>{userData.name}</td>
                    <td>{userData.email}</td>
                    <td>
                      <Button
                        onClick={() => {
                          handleEdit(userData);
                        }}
                        variant="dark"
                        data-testid="editid"
                        id="editbutton"
                        className="classedit"
                      >
                        Edit
                      </Button>
                    </td>

                    <td>
                      <Button
                        onClick={(e) => {
                          onDelete(e, userData.id);
                        }}
                        variant="danger"
                        data-testid="deleteFn"
                        id="deletebutton"
                        className="classdelete"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </>
  );
};
export default Home;
