import React, { useState } from 'react';

const Input = (props) => {
  const [currentClass, setCurrentClass] = useState("")

  const handleChange = (event) => {
    let name = event.target.id;
    let value = event.target.value;

    props?.formState?.setData({ ...props?.formState?.data, [name]: value });

    if (!event.currentTarget.value) {
      setCurrentClass("error")
      props?.formState?.setError(true)
    } else {
      setCurrentClass("default")
      props?.formState?.setError(false)
    }
  }

  return (
    <div className="inputContainer">
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onChange={handleChange}
        className={currentClass}
      />
      {currentClass === "error" && <span>Preencha com um {props.typeMessage} válido</span>}
    </div>
  )
}

export default Input