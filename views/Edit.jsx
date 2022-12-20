import React from 'react'

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