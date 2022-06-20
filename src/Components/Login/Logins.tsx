import {render, screen } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
import Login from "../Login/Login"

describe("login component",()=>{
    it("Renders the login form properly",()=>{
      render(<Login/>)
      const emailplaceholder = screen.getByPlaceholderText("Enter a Password")
      expect(emailplaceholder).toBeInTheDocument()
      const pwplaceholder =screen.getAllByPlaceholderText('Enter a Password')
      expect (pwplaceholder).toBeInTheDocument()
    })
    // it("should contain single  submit button", () => {
    //   render(<Login />);
    //   const Submitbutton = screen.getAllByRole("button")
    //   expect(Submitbutton).toHaveLength(1)
     
    // });
})