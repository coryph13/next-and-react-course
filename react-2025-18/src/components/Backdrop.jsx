function Backdrop(props) {
  return (
    <div className="fixed inset-0 z-10 w-screen h-screen backdrop-blur-xs" onClick={props.onCancel}/>
  );
}

export default Backdrop;
