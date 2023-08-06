import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


function App() {

  //inputタグにTodoを入力

  //入力された内容を「追加」ボタンでTodoListの欄に追加
    //未入力の場合はボタンを押しても変化なしにする
    //TodoList欄追加時、プルダウンリストの初期値は「全て」

  //一つ一つのプルダウンリストの内容を変更できる
    
  //上のプルダウンリストの内容（全て、着手中、完了）によって、表示されるTodoListが変わる

  //TodoListに追加された内容を「編集」ボタンで内容を変更可能にする
  
  //TodoListに追加された内容を「削除」ボタンで削除する

  //入力欄の状態
  const [ todo, setTodo ] = useState("");
  //Todoリストの状態
  const [ todoList , setTodoList ] = useState([]);
  //一つ一つのプルダウンの状態
  //const [ subSelectState, setSubSelectState ] = useState("全て");
  //上のプルダウンの状態
  const [ selectState, setSelectState ] = useState("all");
  //編集ボタン押下時のinputの中身の状態
  // const [ editTodo, setEditTodo ] = useState();

  console.log(todoList)

  //入力された内容を「追加」ボタンでTodoListの欄に追加
  const onClickAdd = () => {
    //未入力の場合はボタンを押しても変化なしにする
    if(todo === ""){
      return;
    }
    //TodoList欄追加時、プルダウンリストの初期値は「全て」
    const newTodo = {
      id: uuidv4(),
      text: todo,
      status: "all",
      isEditing: false
    }
    setTodoList([...todoList, newTodo]);
    //「追加」ボタン押下時にinputタグの中身を空にする
    setTodo("");
  }

  //一つ一つのプルダウンリストの内容を変更できる
  const onChangeSubSelect = (e, id) => {
    const changeStatus = todoList.map((todo) => {
      if(todo.id === id){
        return { id:todo.id, text:todo.text, status: e.target.value, isEditing: false}
      } else {
        return todo
      }
    })
    setTodoList(changeStatus)
  }

  //TodoListに追加された内容を「削除」ボタンで削除する
  const onClickRemoveList = (id) => {
    const newTodos = todoList.filter((todo) => todo.id !== id)
    setTodoList(newTodos);
  }

  //TodoListに追加された内容を「編集」ボタンで内容を変更可能にする
    //「編集」ボタン押下時にinputタグと「保存」ボタンが出現
    //inputタグに入力後、「保存」ボタン押下時にTodoリストの内容が変わり、inputタグと「保存」ボタンが削除される
  const onClickEditList = (id) => {
    const newTodo = todoList.map((todo) => {
      if(todo.id === id){
        return { id: todo.id, text: todo.text, status: todo.status, isEditing: true}
      } else {
        return todo
      }
    })
    setTodoList(newTodo)
    }

    //「保存」ボタン押下時にTodoリストの内容が変わり、inputタグと「保存」ボタンが削除される
    const onClickKeepList = (id) => {
      const newTodo = todoList.map((todo) => {
        if(todo.id === id){
          return { id:todo.id, text:todo.text, status: todo.status, isEditing: false}
        } else {
          return todo
        }
      })
      setTodoList(newTodo)
      }
    
  return (
    <div className="InputTodo">
        <h1>Todoリスト</h1>
        <input 
          type="text"
          placeholder="Todoを入力" 
          value={todo} 
          onChange={(e) => setTodo(e.target.value)} />
        <button onClick={onClickAdd}>追加</button>

      <div className="TaskTodoList">
        <select 
          name="condition"
          value={todo.status}
          //上のプルダウンの状態
          onChange={(e) => setSelectState(e.target.value)}
        >
          <option value="all">全て</option>
          <option value="doing">着手中</option>
          <option value="done">完了</option>
        </select>

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
                          onChange={(e) => setTodo(e.target.value)} 
                        />
                        <select name="condition" 
                          value={todo.status}
                          onChange={(e) => onChangeSubSelect(e, todo.id)}>
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
        
          <div>
            <li>本を買う</li>
            <select name="condition">
              <option value="all">全て</option>
              <option value="doing">着手中</option>
              <option value="done">完了</option>
            </select>
              <button>編集</button>
              <button>削除</button>
          </div>
          <div>
            <li>洗濯をする</li>
            <select name="condition">
              <option value="all">全て</option>
              <option value="doing">着手中</option>
              <option value="done">完了</option>
            </select>
              <button>編集</button>
              <button>削除</button>
          </div>
        </ul>
      </div>
    </div>
    
  );
}

export default App;
