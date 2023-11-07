import React, { useState } from "react"
function Question({question}) {
    const [isOpen, setOpen] = useState(null)
    return (
        <>
        <section>
            <div > 
                <h4>{Question.title}</h4>
                <button onClick={() => setOpen(!isOpen)}>{isOpen ? "-" : "+"}</button>
            </div>
            {isOpen &&<p>{question.info}</p>}
        </section>
        </>
    )
} 
export default Questions