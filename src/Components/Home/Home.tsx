import React, { useEffect, useState } from "react";
import { Nav, Navbar, Container, Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getuser } from "../../State /Action/Action";
import { useNavigate} from "react-router";
import { removeuser } from "../../State /Action/Action";

const Home = () => {
  let dispatch: any = useDispatch();
  // const [userData, setuserData] = useState<any>();
  let navigate = useNavigate();
  const user = useSelector((state: any) => state.allreducer?.user);

  console.log(user);

  // user.user.map((d:[])=>{
  //   console.log("user map")
  // })

  // console.log(reportsData, "apiResponse");
  //const[del,setDel]=useState(false)

  //delete onClick
  const onDelete = (e: any, userData: any) => {
    e.preventDefault();
    dispatch(removeuser(userData)); //
    dispatch(getuser());
  };

  //edit onClick
  const handleEdit = (userData: any) => { 
    navigate(`/Modals/${userData.id}`);
  };

  useEffect(() => {
    // console.log("side effect runs");
    dispatch(getuser());
  }, []);

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
            {/* {user.tours.length !== 0 ? user.tours : [].map(()=>{})} */}
            {user &&
              user.map((userData: any, i: any) => {
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
