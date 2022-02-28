import { createContext , useState, useReducer } from "react";

export const Bankcontext=createContext();
const bankingReducer = (state, action) => {
    switch (action.type) {
      case "WITHDRAW":
        return state - parseInt(action.amount);
      case "DEPOSIT":
        return state + parseInt(action.amount);
      case "FD":
        return (state + parseInt(action.amount)* 1.5).toFixed(2);
      case "DELETE":
        return 0;
      default:
        return state;
    }
  };
export const BankProvider=(props)=>{
    const [balance, dispatch] = useReducer(bankingReducer, 0);
    const [statement,setstatement]=useState("Balance is $")
    /*const [balance, setbalance] = useState(200)
    const [statement,setstatement]=useState("Balance is $")
    const [input, setinput] = useState("")*/

    /*const handleChangeone= (val) => {
        setinput(val.target.value);
      };
    const withdraw=()=>{
        setbalance(balance-input);
        setinput("")
    }
    const deposit=()=>{
        setbalance(balance+parseInt(input));
        setinput("")
    }
    const fDeposit=()=>{
        setbalance(balance+parseInt(input*1.4));
        setinput("")
    }
    const delAcc=()=>{
        setstatement("Bank account deleted");
        setbalance("")
    }
    console.log(statement,balance)
    */
    //statement,balance,input,withdraw,deposit,fDeposit,handleChangeone,delAcc
    return <Bankcontext.Provider value={{statement,balance,dispatch}}>
        {props.children}
    </Bankcontext.Provider>
}