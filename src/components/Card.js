import React from 'react';

 function Card(props){
    const {data,num} = props
    const [options , setOptions] = React.useState([])
    
    // console.log(num)
    const [selectedOption,setSelectedOption] = React.useState()

    

    function storeOption(per,index){
        console.log(index)
        setSelectedOption({ option:per,id: index})
        const elements = document.getElementsByClassName(`options${num}`)
        for(let element of elements){
            element.classList.remove("grey")
        }
        document.getElementById(`options${num}-${index}`).classList.add("grey")        
    }
    // console.log(selectedOption)
    React.useEffect(()=>{
        console.log("running")
        setOptions(()=>{
            const newOptions = [data.correct_answer,...data.incorrect_answers]
            for(let i=0;i<newOptions.length;i++){
                let j = Math.floor(Math.random() * newOptions.length)
        
                let temp = newOptions[i]
                newOptions[i] = newOptions[j]
                newOptions[j] = temp
            }
            return newOptions
        }
            
        )
        
    },[])

    const optionsArray = options.map((per,index)=> {
        return <h4 className={`options${num}`} id={`options${num}-${index}`} onClick={()=>storeOption(per,index)} key={index}>{per}</h4>
    })

    if(props.isSubmitted){
        // 
        // // selectedOption.option === data.correct_answer ?
          selectedOption &&  document.getElementById(`options${num}-${selectedOption.id}`).classList.add( selectedOption.option === data.correct_answer ? "green" : "red")  
        //  :
        //     document.getElementById(`options${num}-${selectedOption.id}`).classList.add("red")

        const temp = options.indexOf(data.correct_answer)
        document.getElementById(`options${num}-${temp}`).classList.add("green") 
        
        
    }
        
    
      console.log(options)
    
    return(
        <div className='card'>
            <h2>{data.question}</h2>
            <div className='options'>
            {optionsArray}
            </div>
            
        </div>
    )
    
}


export default React.memo(Card)