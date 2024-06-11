import { useState } from "react"

export default function Player({name,symbol }) {
    
    const [playerName, updatePlayerName] = useState(name)
    const [isEditing, setEditing ] = useState(false)
    // const [actionButton, updateActionButton] = useState('Edit')

    
    function saveChangesHandler() {
        setEditing((editing)=>!editing)
        // if(isEditing) {
        //     setEditing(false)
        // }
        // else {
        //     setEditing(true)
        // }
    }

    function nameEditHandler(event) {
        updatePlayerName(event.target.value)
    }
    let playerDiv = <span className="player-name">{playerName}</span>
    let actionButton = 'Edit'
    if(isEditing) {
        playerDiv = <input type="text" required value={playerName} onChange={nameEditHandler}/>
        actionButton = 'Save'
    } 
    return(
        <>
            <li>
              <span className="player">
                {playerDiv}
                {/* {!isEditing ? 
                    <span className="player-name">{playerName}</span>
                :
                    <input></input>
                } */}
                <span className="player-symbol">{symbol}</span>
              </span>
              <button onClick={saveChangesHandler}>{actionButton}</button>
            </li>
        </>
    )
            
}