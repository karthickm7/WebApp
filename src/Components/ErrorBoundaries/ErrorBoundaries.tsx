import { error } from "console";
import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children?:ReactNode;
}

interface State {
    hasError : boolean;
    
}

class ErrorBoundaries extends Component <Props,State> {
  public state: State = {
    hasError: false,
   
  
  };
  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    console.log("Uncaught error:",typeof error);
    return{error:error}
  }
  public render() {
    if (this.state.hasError) {
      return(
      <>
      <h1>Sorry.. there was an error</h1>
      {/* <details style={{ whiteSpace: "pre-line" }}>
      <summary>Error Details</summary>
      <h1>{this.state.hasError.toString()}</h1>
      </details> */}
      </>)
      
    }

    return this.props.children;
  }

  }
 


export default ErrorBoundaries;
