import {
  render as rtlrender,
  cleanup,
  screen,
  fireEvent,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Store } from "../../State /Store/Store";
import Home from "./Home";

describe("Home component", () => {
  const render = (component: any) =>
    rtlrender(<Provider store={Store}>{component}</Provider>);
  afterEach(cleanup);
  it("should check the  component renders properly", () => {
    //arrange
    render(
      <Router>
        <Home />
      </Router>
    );

    const titleValue = screen.getByText("welcome Home");
    expect(titleValue).toHaveTextContent("welcome Home");
  });

  it("should renders the table", () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    const table = screen.getByTestId("table");
    expect(table).toBeInTheDocument();
  });

  it("checks the button", () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const button = screen.getByRole("Button");
    expect(button).toHaveTextContent("Delete");
  });
});

// describe("Test the button", () => {
//   const render = (component: any) =>
//     rtlrender(<Provider store={Store}>{component}</Provider>);
//   afterEach(cleanup);

//   function tree() {
//     return render(
//       <Router>
//         <Home Delete="Delete" Edit="EDit" />
//       </Router>
//     );
//   }

//   it("should match with snapshot", () => {
//     // eslint-disable-next-line testing-library/no-debugging-utils
//     screen.debug();
//     expect(tree).toMatchSnapshot();
//   });

//   it("check the required buttons", () => {
//      tree();

//     const editButton = screen.getByTestId("editid");
//     expect(editButton).toBeInTheDocument();
//   });

// });
