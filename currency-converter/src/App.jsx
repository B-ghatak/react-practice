import { useState } from 'react'
import './App.css'
import userCurrencyInfo from './hooks/useCurrencyInfo';
import InputBox from './components/InputBox'



function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = userCurrencyInfo(from)

  const options = Object.keys(currencyInfo)
  

  const swap = () =>{
setFrom(to)
setTo(from)
setConvertedAmount(amount)
setAmount(convertedAmount)
  }

  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/009/447/848/large_2x/abstract-currency-dollar-euro-yen-gold-coin-on-background-hi-tech-green-blue-concept-inflation-is-rising-from-various-factors-vector.jpg')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount= {amount}
                            currencyOptions = {options}
                            onCurrencyChange = {(currency) => setAmount(currency)}
                            selectCurrency = {from}
                            onAmountChange = {(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5 ">
                        <button
                            type="button"
                            className="cursor-pointer absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                          swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount= {convertedAmount}
                            currencyOptions = {options}
                            onCurrencyChange = {(currency) => setTo(currency)}
                            selectCurrency = {to}
                            onAmountChange = {(amount) => setAmount(amount)}
                            amountDisabled
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);

}

export default App
