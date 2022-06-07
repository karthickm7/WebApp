import React from "react";



const Lazyloader = (importComp: { (): Promise<typeof import("../Register/Signup")>; (): Promise<typeof import("../Login/Login")>; (): Promise<typeof import("../Home/Home")>; (): Promise<typeof import("../Modal/Modals")>; (): Promise<any>;},fallback:any)=> {
  return class lazy extends React.Component<any,any>{
    constructor(props:any) {
      super(props);
      console.log(importComp, "import");
      this.state = {
        component: null,
      };
    }
    //set the component in state when loading
    componentDidMount() {
      console.log("component mounted");
      importComp().then((comp) => {
        console.log("INSIDE COMP", comp.default.name);
        this.setState({ component: comp.default });
      });
    }

    render() {
      const C = this.state.component;
      return C ? (
        <C {...this.props} />
      ) : fallback ? (
        fallback
      ) : (
        <div>loading</div>
      );
    }
  };
};

export default Lazyloader;
