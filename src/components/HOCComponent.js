const HOCComponent = (WrapperComponent) => {


    

  return (props) => props.name == "Pankaj" ? 
  (
    <div style={{ border: "1px solid red", padding: 2 }}>
      <WrapperComponent {...props} />
    </div>
  )  : (
    <div>
        <h1>Login</h1>
        <div><input placeholder="Username" /></div>
        <div><input placeholder="Password" /></div>
        <div><input type="button" value={"Login"} /></div>
    </div>
  )
    
    
    
};

export default HOCComponent;
