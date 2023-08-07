import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import InputTodo from "./components/InputTodo";
import SelectState from "./components/SelectState";
import TodoList from "./components/TodoList";


function App() {

  //inputタグにTodoを入力

  //入力された内容を「追加」ボタンでTodoListの欄に追加
    //未入力の場合はボタンを押しても変化なしにする
    //TodoList欄追加時、プルダウンリストの初期値は「全て」
    //「追加」ボタン押下時にinputタグの中身を空にする

  //一つ一つのプルダウンリストの内容を変更できる
    
  //上のプルダウンリストの内容（全て、着手中、完了）によって、表示されるTodoListが変わる

  //TodoListに追加された内容を「編集」ボタンで内容を変更可能にする
    //「編集」ボタン押下時にinputタグと「保存」ボタンが出現
    //「編集」ボタン押下時にinputの中の文字を変更できる
    //「保存」ボタン押下時にTodoリストの内容が変わり、inputタグと「保存」ボタンが削除される

  //TodoListに追加された内容を「削除」ボタンで削除する


  //入力欄の状態
  const [ todo, setTodo ] = useState("");
  //Todoリストの状態
  const [ todoList , setTodoList ] = useState([]);
  //上のプルダウンの状態
  const [ selectState, setSelectState ] = useState("all");
  

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
    //「保存」ボタン押下時にTodoリストの内容が変わり、inputタグと「保存」ボタンが削除される
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

  //「編集」ボタン押下時にinputの中の文字を変更できる
    const onChangeEditList = (e, id) => {
      const editList = todoList.map((todo) => {
        if(todo.id === id){
          return { id: todo.id, text: e.target.value, status: todo.status, isEditing: true}
        } else {
          return todo
        }
      })
      setTodoList(editList)
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
        <InputTodo
          type="text"
          placeholder="Todoを入力" 
          value={todo} 
          onChange={(e) => setTodo(e.target.value)}
          onClick={onClickAdd}
        />

      <div className="TaskTodoList">
        <SelectState
          name="condition"
          value={todo.status}
          //上のプルダウンの状態
          onChange={(e) => setSelectState(e.target.value)}
        />
        <TodoList 
          todoList={todoList}
          selectState={selectState}
          onChangeEditList = {onChangeEditList}
          onChangeSubSelect={onChangeSubSelect}
          onClickKeepList={onClickKeepList}
          onClickEditList={onClickEditList}
          onClickRemoveList={onClickRemoveList}
        />
      </div>
    </div>
    
  );
}

export default App;
