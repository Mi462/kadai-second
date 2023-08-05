import { useState } from "react";


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
  const [ selectState, setSelectState ] = useState("全て");
  console.log(setSelectState)
  console.log(todoList);

  //入力された内容を「追加」ボタンでTodoListの欄に追加
  const onClickAdd = () => {
    //未入力の場合はボタンを押しても変化なしにする
    if(todo === ""){
      return;
    }
    //TodoList欄追加時、プルダウンリストの初期値は「全て」
    const newTodo = {
      id: todo,
      text: todo,
      status: "全て"
    }
    setTodoList([...todoList, newTodo]);
    //「追加」ボタン押下時にinputタグの中身を空にする
    setTodo("");
  }

  //一つ一つのプルダウンリストの内容を変更できる
  const onChangeSubSelect = (e, id) => {
    const changeStatus = todoList.map((todo) => {
      if(todo.id === id){
        return { id:todo.id, text:todo.text, status: e.target.value}
      } else {
        return todo
      }
    })
    setTodoList(changeStatus)
  }

  //上のプルダウンリストの内容（全て、着手中、完了）によって、表示されるTodoListが変わる
    //mapメソッドで新しい配列を作る
    //todoListの中のstateが上のプルダウンリストで選んだstateと同じものは出力するようにして（console.log？）返す
    //異なるものはそのまま手を加えず返す  

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

            if ( setSelectState === todo.status ){
              return (
                <div className="TaskTodo" key={todo.id}>
                <li>{todo.text}</li>
                  <select name="condition" 
                    value={todo.status}
                    onChange={(e) => onChangeSubSelect(e)}>
                    <option value="all">全て</option>
                    <option value="doing">着手中</option>
                    <option value="done">完了</option>
                  </select>
                  <button>編集</button>
                  <button>削除</button>
                </div>
              )
            }
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
