import React, { useState } from "react"


const StatusHook = (props) => {

    let [editeMode, setEditeMode] = useState(false);
    let [status , setStatus] = useState(props.status)

    const activeMode = () => {
        setEditeMode(true)
    }
    const diactivateMode = () =>{
        setEditeMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) =>{
        setStatus(e.currentTarget.value)
    }
    return ( 
        <div>
            {!editeMode &&
                <span onDoubleClick={activeMode}>{props.status || 'No status'}</span>
            }
            {editeMode &&
                <input onChange={onStatusChange} onBlur={diactivateMode} autoFocus={true} type="text" value={status} />
            }
        </div>
    )

}

export default StatusHook