import React from 'react'

const TodoList = (props) => {

  const { todoList, selectState, onChangeEditList, onChangeSubSelect, onClickKeepList, onClickEditList, onClickRemoveList } = props;

  return (
    <div>
      <ul>
          {todoList.map((todo) => {
            //上のプルダウンリストの内容（全て、着手中、完了）によって、表示されるTodoListが変わる
              if ( selectState === "doing" && todo.status !== "doing") return //eslint-disable-line
              if ( selectState === "done" && todo.status !== "done") return //eslint-disable-line
            
              return (
                <div className="TaskTodo" key={todo.id}>
                  { todo.isEditing ? (  
                    <div>
                      <input
                        type="text"
                        value={todo.text} 
                        onChange={(e) => onChangeEditList(e, todo.id)} 
                      />
                      <select
                        name="condition" 
                        value={todo.status}
                        onChange={(e) => onChangeSubSelect(e, todo.id)}
                      >
                        <option value="all">全て</option>
                        <option value="doing">着手中</option>
                        <option value="done">完了</option>
                      </select>
                      <button onClick={() => onClickKeepList(todo.id)}>保存</button>                     
                    </div>
                    ) : (
                      <div>
                        <li>{todo.text}</li>
                          <select name="condition" 
                            value={todo.status}
                            onChange={(e) => onChangeSubSelect(e, todo.id)}>
                            <option value="all">全て</option>
                            <option value="doing">着手中</option>
                            <option value="done">完了</option>
                          </select>
                          <button 
                            value={todo.text}
                            onClick={() => onClickEditList(todo.id)}>編集</button>
                      </div>
                    )} 
                  <button onClick={() => onClickRemoveList(todo.id)}>削除</button>
                </div>
              )
          })
        }
        
        </ul>
    </div>
  )
}

export default TodoList
