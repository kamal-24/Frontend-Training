export const addEntry=(entry)=>{
    return {type:"ADD_ENTRY",
    entry:entry}
}

export const delEntry=(id)=>{
    return {type:"DEL_ENTRY",
    id:id}
}

export const deleteAll=(id)=>{
    return {type:"DEL_ALL",
    id:id}
}
