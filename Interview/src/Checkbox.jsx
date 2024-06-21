import React, { useState } from 'react'

const Checkbox = () => {
    const [arr, setArr] = useState([
        { name: "India", checked: false },
        { name: "Pakistan", checked: false },
        { name: "South Africa", checked: false }
    ])

    const handleInput = (index) => {
        arr[index].checked = !arr[index].checked;
        setArr([...arr])
    }

    const handleDelete = (index) => {
        arr.splice(index, 1);
        setArr([...arr])
    }

    return (
        <>
            <ul style={{ listStyle: "none" }}>
                {
                    arr.map((country, index) => {
                        return (
                            <div style={{ display: "flex" }} key={index}>
                                <input type="checkbox" checked={country.checked} onClick={() => { handleInput(index) }} />
                                <li>{country.name}{"\t"}{country.checked ? <span onClick={() => { handleDelete(index) }}>Delete</span> : ""}</li>
                                { }
                            </div>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Checkbox