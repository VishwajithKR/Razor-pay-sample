import './App.css';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === "") {
      alert("please enter the amount")
    } else {
      var options = {
        key: "rzp_test_tCovK5V6BlBv1T",
        key_secret: "ejvMCXflZx1MKsuiNmvy9aCv",
        amount: amount * 100,
        currency: "INR",
        name: "Simple transform",
        description: "for testing purpose",
        handler: function (response) {
          alert(response.razorpay_payment_id)
        },
        prefill: {
          name: "vishwajith",
          email: "vishwakr1998@gmail.com",
          contact: "9685741236"
        },
        notes: {
          address: "Razorpay Corporate Office"
        },
        theme: {
          color: "#3399cc"
        }
      };
      const pay = new window.Razorpay(options);
      pay.open();
    }
  }

  return (
    <div className="App">
      <h2>Razorpay payment integration</h2>
      <br />
      <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <br />
      <button onClick={handleSubmit}> submit</button>
    </div>
  );
}

export default App;
