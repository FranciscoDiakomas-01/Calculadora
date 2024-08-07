import { useState } from "react"
import "./calculator.css"
export function Caculator() {

    const [num , setNum] = useState(0)
    function InputNumber(n) { 
        let input =  n.target.value
        let signals = ["," , "+", "-", "*","/"]

        if(num == "Error"){
            return setNum(input)
        }else if(num == 0 && signals.includes(input)){
            return setNum(num + input)
        }
        else if(num == 0 ){
            return setNum(input)
        }
        else{
            return setNum(num + input)
        }
        
    }

    function Clear() {
        setNum(0)
    }

    function Calulate() {
        try {
            let expression = String(num)
            let result = eval(String(expression.replace(/,/g, ".")))

            //verificando se o resultado é um número inteiro ou float
            if(String(result).includes(".")){
                return setNum(Number(result).toFixed(1))
            }
            setNum(result)
        } catch (error) {
            setNum("Error")
        }
        
    }
    function Percentage(){
        let result = num / 100
        console.log(isNaN(result))
        if(isNaN(result)){
            return setNum("Error")
        }
        else{
            setNum(result)
        }
    }

    function DeleteLast() {

        if(String(num).length > 1){
            if(num == "Error"){
                return setNum(0)
            }
            return setNum(String(num).slice(0,-1))
        }
        return setNum(0)
        
    }
    return(

        <main>
            <div>
                {num}
            </div>
            <article>
                <button className="gray" onClick={Clear}>AC</button>
                <button className="gray" onClick={Percentage}>%</button>
                <button className="gray" onClick={DeleteLast}>Del</button>
                <button value={"/"}onClick={InputNumber} className="orange">/</button>
                <button value={7} onClick={InputNumber}>7</button>
                <button value={8} onClick={InputNumber}>8</button>
                <button value={9} onClick={InputNumber}>9</button>
                <button value={"*"} className="orange" onClick={InputNumber}>x</button>
                <button value={4} onClick={InputNumber}>4</button>
                <button value={5} onClick={InputNumber}>5</button>
                <button value={6} onClick={InputNumber}>6</button>
                <button value={"-"} className="orange" onClick={InputNumber}>-</button>
                <button value={1} onClick={InputNumber}>1</button>
                <button value={2} onClick={InputNumber}>2</button>
                <button value={3} onClick={InputNumber}>3</button>
                <button value={"+"} className="orange" onClick={InputNumber}>+</button>
                <button value={0} onClick ={InputNumber}>0</button>
                <button value={","} onClick={InputNumber}>,</button>
                <button className="orange" id="zero" onClick={Calulate}>=</button>
            </article>
        </main>
    )
    
}