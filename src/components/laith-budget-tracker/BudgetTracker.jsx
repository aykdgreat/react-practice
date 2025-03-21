import { useEffect, useState } from "react";

export default function BudgetTracker() {
  const [balance, setBalance] = useState(0);
  const [descInput, setDescInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [typeInput, setTypeInput] = useState("income");
  const [budgetArr, setBudget] = useState([]);
  const [inputError, setInputError] = useState({
    desc: false,
    amount: false,
  });

  useEffect(() => {
    calcBal();
  }, [budgetArr]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!descInput) {
      setInputError({ desc: true, amount: false });
      return;
    } else if (Number(amountInput) <= 0) {
      setInputError({ desc: false, amount: true });
      return;
    } else {
      setBudget([
        ...budgetArr,
        {
          id: budgetArr.length + 1,
          desc: descInput,
          amount: Number(amountInput),
          type: typeInput,
          date: new Date().toDateString(),
        },
      ]);
      setInputError({ desc: false, amount: false });
    }

    setAmountInput("");
    setDescInput("");
    setTypeInput("income");
    // calcBal();
  };

  const calcBal = () => {
    const newBalance = budgetArr.reduce((sum, { type, amount }) => {
      if (type === "expense") {
        return sum - amount;
      } else {
        return sum + amount;
      }
    }, 0);
    setBalance(newBalance);
  };

  return (
    <main className="sm:px-24">
      <div className="mb-3 text-black">
        {balance < 0 ? (
          <div className="text-8xl font-bold text-red-600">{balance}</div>
        ) : (
          <div className="text-8xl font-bold text-green-600">{balance}</div>
        )}
      </div>
      {/* {calcBal()} */}
      <form className="mb-4">
        <input
          type="text"
          value={descInput}
          onChange={(e) => setDescInput(e.target.value)}
          placeholder="Income or expense..."
          className={`py-2 outline-none w-full mb-2 sm:mb-0 border-1 text-2xl border-b sm:w-72 mr-4 ${
            inputError.desc ? "border-red-600" : "border-gray-300"
          }`}
        />

        <input
          type="number"
          onChange={(e) => setAmountInput(e.target.value)}
          value={amountInput}
          className={`py-2 outline-none w-full mb-2 sm:mb-0 border-1 text-2xl border-b sm:w-72 mr-4 ${
            inputError.amount ? "border-red-600" : "border-gray-300"
          }`}
          placeholder="#5000"
        />
        <select
          value={typeInput}
          onChange={(e) => setTypeInput(e.target.value)}
          className="p-2 outline-none border-1 text-xl border w-full mb-2 sm:mb-0 sm:w-36 mr-4 border-gray-500"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input
          type="submit"
          value="+"
          onClick={handleSubmit}
          className="cursor-pointer py-2 px-4 border-1 w-full sm:w-auto text-2xl border border-gray-500"
        />
      </form>
      <ul>
        {budgetArr.map((item) => (
          <li
            key={item.id}
            className="w-full p-4 shadow-md flex justify-between items-center"
          >
            <div>
              <p className="text-xl font-medium">{item.desc}</p>
              <span className="text-gray-500">{item.date}</span>
            </div>
            <p
              className={`text-xl font-bold ${
                item.type === "income" ? "text-green-600" : "text-red-600"
              }`}
            >
              {item.type === "income" ? "+#" : "-#"}
              {item.amount}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
