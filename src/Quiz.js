import React from "react";  
import Card from "./components/Card";

export default function Quiz(props){
    //const [selectedOption, setSelectedOption] = React.useState([])
    
    const [isSubmitted,setIsSubmmitted] = React.useState(false)
    const {data} = props
    //const [allOptions,setAllOptions] = React.useState()
    // function storeOption(option){
    //     setSelectedOption(prevState=>[...prevState,{option}])
    //     // console.log("working")
    // }

    // setAllOptions(()=>{
    //     let newArray = []
    //     for(let i=0; i<data.length;i++){
    //         const array = [data[i].correct_answer,...data[i].incorrect_answers]
    //         for(let i=0;i<array.length;i++){
    //             let j = Math.floor(Math.random() * array.length)
        
    //             let temp = array[i]
    //             array[i] = array[j]
    //             array[j] = temp
    //         }
    //         newArray.push(array)
    //     }
    //     return newArray
    // })


    function handleSubmit(){
        setIsSubmmitted(true)
    }
    // console.log(selectedOption)
    
    // options={allOptions[index]}
    const allData = data.map((per,index)=> <Card  key={index} num={index} data={per} isSubmitted={isSubmitted}/>)
    return(
        <div className="quiz">
            {allData}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}