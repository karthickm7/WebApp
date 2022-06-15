import React, { useEffect } from "react";
import { Nav, Navbar, Container, Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getuser, removeuser } from "../../State /Action/Action";
import { useNavigate } from "react-router";

export interface editdata {
  email:string;
  id:number| string;
  name:string;
  password:string;
  i:number

}



// type selector ={
//   email:string;
//   id:number| string;
//   name:string;
//   password:string;
// }


const Home = () => {
  let dispatch: any = useDispatch();

  let navigate = useNavigate();
  const user = useSelector((state:any) => state.allreducer.user);

  console.log(user ,"Homeuseselector")

  //delete onClick
  const onDelete = (e:React.MouseEvent<HTMLElement>, userData:string| number):void => {
    e.preventDefault();
    dispatch(removeuser(userData));
    dispatch(getuser());
  };

  //edit onClick
  const handleEdit = (userData:editdata) => {
    console.log(userData,"type of userdata")
    navigate(`/Modals/${userData.id}`);
  };

  useEffect(() => {
    dispatch(getuser());
    setTimeout(() => {
      dispatch(getuser());
      navigate("/login");
    }, 30000);
  }, [dispatch,navigate]);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Router</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="">Signup</Nav.Link>
            </Nav>
            <Nav>
              {/* <NavDropdown>
                <NavDropdown.Item>LogOut</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <h1 style={{ textAlign: "center" }}> welcome Home </h1>
        <Table striped bordered hover>
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
              user.map((userData: editdata, i: number) => {
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
                      >
                        EDIT
                      </Button>
                    </td>

                    <td>
                      <Button
                        onClick={(e) => {
                          onDelete(e, userData.id);
                        }}
                        variant="danger"
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
