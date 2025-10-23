import Button from './button'
import React, {useState,useEffect} from 'react'
import {evaluate} from 'mathjs'

function Keyboard() {

    const [text , setText] = useState('')
    const [result ,setResult] = useState('')
    const [isResultEmpty , setIsResultEmpty] = useState(false)

    
    function handleResult(){
        // When '=' is clicked, transfer current input into the result area.
        // Prefer to evaluate the expression; if evaluation fails, show the raw text.
        if (text.trim() === '') return
        try {
            const evaluated = evaluate(text)
            setResult(String(evaluated))
        } catch (e) {
            setResult(text)
        }
        // clear the input so further typing starts fresh
        setText('')
        setIsResultEmpty(false)
    }
    
     const checkResult = () =>{
       
     
    }
      
   
    function handleClear() {
        setResult('')
        setText('')
        
    }

    function handleDelet() {
        setText((prevText)=> prevText.slice(0, -1));
       
        
    }

   
    const isOperator = (ch) => ['+','-','*','/'].includes(ch)

    const handleClick = (value) =>{
        // If input is empty and the user types an operator, but we have a result,
        // start a new expression using the result as the left operand.
        if (text === '' && result !== '' && isOperator(value)){
            setText(String(result) + value)
            return
        }

        // Otherwise just append to the current input
        setText((prev) => prev + value)
    }
    
    const hey =() =>{
        checkResult()
    }
    return(
    <>
        <div className="text">
          <div className="result">
            {result}
        </div> 
        <div id="text-box">
            {text}
        </div>
        
        </div>
        
        <div className='calculator-btn'>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={handleResult}>=</button>
        <button onClick={handleClear}>Clear</button>
        <button className="delete" onClick={handleDelet}>C</button>
        <button onClick={hey}></button>
        </div>
    </>
    
    )
}
export default Keyboard