import { useState, useRef } from "react"

export function Search({cb = Function.prototype}){
    const [ value, setValue ] = useState("") 
    const ref = useRef()

    const handleKey = (e) => {
        if(e.keyCode === 13) {
            cb(value)
        }
    }

    return <div className="row">
        <div className="input-field col s12">
            <label htmlFor="Search" className="" ref={ref}>Search</label>
            <input 
                id="Search"
                onFocus={()=>{ref.current.className = "active"}}
                onBlur={()=>{if(value === "") ref.current.className = ""}}
                value={value} 
                onKeyDown={(e) => {handleKey(e)}}
                onChange={(e) => {setValue(e.target.value)}}
                type="text" 
                className="validate"/>
            <button 
                className="btn"
                style={{
                    'position': 'absolute',
                    'top': '0',
                    'right': '0'
                }}
                onClick={()=>{cb(value) }}    
            >Search</button>
        </div>
        
    </div>
}