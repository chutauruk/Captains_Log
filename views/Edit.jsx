import React from 'react'

// const myStyle = {
//     color: "#D45F10",
//     backgroundColor: "#000000",
//     padding: "5px",
//     fontFamily: "Helvetica",
//     textAlign: "center",
//   };
//   const bodyOne = {
//     color: "#975878",
//     backgroundColor: "#000000",
//     padding: "5px",
//     fontFamily: "Helvetica",
//     textAlign: "center",
//   };

const Edit = ({log}) => {
  return (
     <>
        <form action={`/logs/${log.id}?_method=PUT`} method="POST">
            Title:<input type="text" name="title" placeholder="enter title name" defaultValue={log.title}/>
            Entry:<input type="text" name="entry" placeholder="enter entry name" defaultValue={log.entry}/>
            Ship Condition: {log.shipIsBroken? <input type="checkbox" name="shipIsBroken" defaultChecked/>: <input type="checkbox" name="shipIsBroken" />} 
            <input type="submit"/>
        </form>
     </>
  )
}

export default Edit