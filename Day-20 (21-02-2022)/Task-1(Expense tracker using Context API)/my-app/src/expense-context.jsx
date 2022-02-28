import { createContext , useState } from "react"

export const ExpenseContext=createContext();
 
export const ExpenseProvider=(props)=>{
    const [entries, setentries] = useState([
        { id:1,description:"Pizza",amount:-99 },
        { id:2,description:"Coffee",amount:-19 },
        { id:3,description:"Sandwich",amount:-22 },
        { id:4,description:"Salary",amount:200 },
        { id:5,description:"Stock",amount:50 },
    ])
    const [addentries, setaddEntries] = useState({
        id: entries.length > 0 ? entries[entries.length - 1].id + 1 : 1,
        description: "",
        amount: ""
      });
    const handleChangetwo= (val) => {
        setaddEntries({ ...addentries, amount: val === "-" ? "-" : parseInt(val) });
      };

    const handleChangeone= (val) => {
        setaddEntries({ ...addentries, description: val });
      };
    const delEntry=(id)=>{
        setentries(entries.filter((entry)=>entry.id!==id));
    }

    const addEntry=()=>{
        let newid = entries.length > 0 ? entries[entries.length - 1].id + 1 : 1;
        entries.push(addentries);
        entries[entries.length - 1].id = newid;
        setentries([...entries]);
        setaddEntries({ ...addentries, description: "", amount: "" });
        //console.log(entries)
    }

    console.log(entries)

    return(
        <ExpenseContext.Provider value={{entries,addentries,delEntry,handleChangeone,handleChangetwo,addEntry}}>
            {props.children}
        </ExpenseContext.Provider>
    )
}