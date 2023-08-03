import { useState } from "react";


function App() {

  //inputタグにTodoを入力

  //入力された内容を「追加」ボタンでTodoListの欄に追加
    //未入力の場合はボタンを押しても変化なしにする
    //TodoList欄追加時、input欄の横にあるプルダウンリストの内容（全て、着手中、完了）によって、表示されるTodoListが変わる

  //TodoListの内容をプルダウンリストで変更可能にする

  //TodoListに追加された内容を「編集」ボタンで内容を変更可能にする
  
  //TodoListに追加された内容を「削除」ボタンで削除する

  //入力欄の状態
  const [ todo, setTodo ] = useState("");
  //Todoリストの状態
  const [ todoList , setTodoList ] = useState([]);
  //プルダウンの状態
  const state = [ "全て", "着手中", "着手"];
  const [ selectState, setSelectState ] = useState("全て");


  //入力された内容を「追加」ボタンでTodoListの欄に追加
  const onClickAdd = () => {
    //未入力の場合はボタンを押しても変化なしにする
    if(todo = ""){
      return;
    }
    //TodoList欄追加時、input欄の横にあるプルダウンリストの内容（全て、着手中、完了）によって、表示されるTodoListが変わる
    // const newTodo = {
    //   //id: ,
    //   content: todo,
    //   status: ""
    // }
    setTodoList([...todoList, todo]);
    //「追加」ボタン押下時にinputタグの中身を空にする
    setTodo("");
  }

  //TodoListの内容をプルダウンリストで変更可能にする
  const onChangeState = (e) => {
    setSelectState(e.target.value)
  }

  return (
    <div className="InputTodo">
      <form>
        <h1>Todoリスト</h1>
        <input 
          type="text"
          placeholder="Todoを入力" 
          value={todo} 
          //inputタグにTodoを入力
          onChange={(e) =>  setTodo(e.target.value)} />
        <button onChange={onClickAdd}>追加</button>
        <select 
          name="condition"
          value={selectState}
          onChange={onChangeState}>
          <option value="all">全て</option>
          <option value="doing">着手中</option>
          <option value="done">完了</option>
        </select>
      </form>

      <div className="TaskTodoList">
        <ul>
          {todoList.map((todo, id) => {
            <div className="TaskTodo" key={id}>
              <li>{todo}</li>
                <select name="condition">
                  <option value="all">全て</option>
                  <option value="doing">着手中</option>
                  <option value="done">完了</option>
                </select>
                <button>編集</button>
                <button>削除</button>
            </div>
          })}
            
          
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
