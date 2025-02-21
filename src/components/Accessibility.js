import { useEffect, useRef, useState } from "react";

const Accessibility = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeButton = useRef(null);


  useEffect(() => {
    if(closeButton.current){
        closeButton.current.focus();
    }
    
  },[isOpen])


  const closeModal = (event) => {
    if(event.key === 'Escape'){
        setIsOpen(false)
    }
  }


  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      {isOpen && (
        <div
          aria-labelledby="this is for backdrop"
          style={{
            height: "100vh",
            width: "100vw",
            background: "#00000078",
            position: "absolute",
            top: 0,
          }}
        ></div>
      )}

      {isOpen && (
        <div
          role="modal box"
          style={{
            maxWidth: "500px",
            border: "1px solid",
            padding: '20px',
            background: "#fff",
            left: '50%',
    position: "absolute",
    top: "50%",
    transform: "translate(-50%, -50%)",
          }}
        >
          <div aria-labelledby="modal-title" aria-describedby="modal-heading">
            <h4 style={{ padding: 0, margin: 0 }}>Modal Title</h4>
          </div>
          <div aria-labelledby="modal-Body">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div aria-labelledby="modal-footer">
            <button ref={closeButton} onClick={() => setIsOpen(false)} onKeyUp={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};
export default Accessibility;
