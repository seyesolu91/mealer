import Header from "./counter_components/Header"
import Forms from "./counter_components/Forms"
import { useState } from "react"; //we want to manage a state on this components so we import useState 

const Counter = () => {
    
     // const balance = 1000; //Use state whenever you want to keep smt that we be updating automatically 
        const [balance, setBalance] = useState(0); //assume the zero is coming from database
    return(


        <div className="container">
            {/* This is conditional rendering using Ternary operator */}
            {
                balance > 5000 ? 
                <p className="alert alert-success"> Odogwu you are doing well</p>
                : 
                <p className="alert alert-warning"> Odogwu you are going broke</p>
            }
            <Header balance= {balance} />
            <Forms balance = {balance}  setBalance= {setBalance} />

        </div>
    )
}
export default Counter