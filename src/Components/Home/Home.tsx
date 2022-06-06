import React, { useEffect, useState } from "react";
import { Nav, Navbar, Container, Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getuser, removeuser } from "../../State /Action/Action";
import { useNavigate } from "react-router";

const Home = () => {
  let dispatch: any = useDispatch();
  let navigate = useNavigate();
  const user = useSelector((state: any) => state.allreducer.user);
  // const [show, setShow] = useState(false);

  // const PopupClose = () => {
  //   setShow(false);
  // };
  // const PopupShow = () => {
  //   setShow(true);
  // };
  console.log(user, "home user");
  //const[del,setDel]=useState(false)

  //delete onClick
  const onDelete = (e: any, row: any) => {
    e.preventDefault();
    dispatch(removeuser(row));
    dispatch(getuser());
  };

  //edit onClick
  const handleEdit = (row: any) => {
    navigate(`/Modals/${row}`);
  };

  useEffect(() => {
    dispatch(getuser());
  }, [dispatch]);

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
              <th>User Id</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {user.map((row: any, index: any) => {
              return (
                <tr key={row.id}>
                  <td className="data">{index + 1}</td>
                  <td className="data"> {row.id}</td>
                  <td className="data"> {row.name}</td>
                  <td className="data"> {row.email}</td>
                  <td>
                    <Button
                      onClick={() => {
                        handleEdit(row.id);
                      }}
                      variant="dark"
                    >
                      EDIT
                    </Button>
                  </td>

                  <td>
                    <Button
                      onClick={(e) => onDelete(e, row.id)}
                      variant="danger"
                    >
                      DELETE
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
