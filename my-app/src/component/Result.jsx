import Questions from "./Questions";
function Result(){
    return(
        <>
        <h1>QUESTIONS</h1>
        <div>
            <h2>Frequently asked questions</h2>
            <div>
                {
                    questions.map((question)=>(
                        <Question Key={question.id} question={question}/>
                    )

                    )
                }
            </div>
        </div>
        </>
    )
}

const questions=[
    id:1,
    
]