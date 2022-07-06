import { useState, useReducer } from 'react';
import './App.css';

//reducer- state을 업데이트 하는 역할(은행)
//dispatch- state 업데이트를 위한 요구
//action- 요구 내용

//reducer는 전달받은 action대로만 스테잇을 업데이트 해준다는거~
const reducer = (state, action) => {
  console.log('reducer가 일을 한다', state, action);
  switch (action.type){
    case 'deposit':
      return state + action.payload;
    case 'withdraw':
      return state - action.payload;
    default:
      return state;
  }
};

function App() {
    const [number, setNumber] = useState(0);
    const [money, dispatch] = useReducer(reducer, 0);//money = 잔고
  return (
    <div>
      <h2>useReducer 은행에 오신 것을 환영합니다!</h2>
      <p>잔고: {money}원</p>
      <input
        type="number"
        value={number}
        onChange= {(e) =>setNumber(parseInt(e.target.value)) }
        step="1000"
      />
      <button onClick={() => {
        dispatch({type: "deposit", payload: number})
      } }>예금</button>
      <button onClick={()=>{
        dispatch({type: "withdraw", payload: number})
      } }>출금</button>
    </div>
  );
}

export default App;
