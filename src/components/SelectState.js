import React from 'react'

const SelectState = (props) => {

  const { name, value, onChange } = props

  return (
    <div>
      <select 
          name={name}
          value={value}
          //上のプルダウンの状態
          onChange={onChange}
        >
          <option value="all">全て</option>
          <option value="doing">着手中</option>
          <option value="done">完了</option>
        </select>
    </div>
  )
}

export default SelectState
