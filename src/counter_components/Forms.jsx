import { useState } from "react";

const Form = ({balance, setBalance}) => {
      
    const [amount, setAmount] = useState("")
    function handle_withdraw(){
        // balance = balance - 1000; //don't do this . A child component shouldn't update props
         //console.log(balance);  
         //setBalance(balance - 1000)
         if (amount > balance){
            alert("Oga insufficient balance")
            setAmount("");
            return;
         }
         setBalance(balance-amount)
       }
    return (
        <div className="row py-5">
            <div className="col-md-2 py-2">
                <button className="btn btn-warning" onClick={handle_withdraw}>Withdraw</button>
            </div>

            <div className="col-md-5 py-2">
                <input
                    type="number"
                    className="form-control py-3"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>

            <div className="col-md-2 py-2">
                <button
                    className="btn btn-primary"
                    onClick={
                        function() {
                        setBalance(balance + Number(amount));
                        setAmount("");
                    }}
                >
                    Deposit
                </button>
            </div>
        </div>
    )
}
export default Form