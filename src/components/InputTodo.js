import React from 'react'

const InputTodo = (props) => {

  const { type, placeholder, value, onChange, onClick } = props

  return (
    <div>
      <input 
          type={type}
          placeholder={placeholder}
          value={value} 
          onChange={onChange} />
        <button onClick={onClick}>追加</button>
    </div>
  )
}

export default InputTodo;

