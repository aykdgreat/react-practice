import { useState } from "react";

export function Project({ id, goal }) {
  const [amountRaised, setAmountRaised] = useState(0);

  const handleDonate = (e) => {
    e.preventDefault();
    const input = Number(e.target.previousElementSibling.value);
    // alert(input);
    if (input <= 0) return alert("Please enter an amount greater than 0");
    else if (input > goal || input > goal - amountRaised)
      return alert(
        "Donation should not be more than the goal or remaining amount, thanks"
      );

    if (amountRaised === goal)
      return alert(
        "The project goal has been reached, thanks for your support!"
      );

    setAmountRaised(amountRaised + input);
    // input = "";
  };

  return (
    <div className="flex justify-center items-center flex-col p-2 border-2 rounded-md border-[#011BFF] shadow-md shadow-[#011BFF]">
      <p className="text-[#FF0707] mb-3 font-bold text-xl">Project {id}</p>
      <p className="text-[#A3299D] mb-3 font-bold text-xl">
        Project Goal: ${goal}
      </p>
      <p className="text-[#FF198C] mb-3 text-lg font-medium">
        Amount Raised: ${amountRaised}
      </p>
      <form className="mb-3 flex gap-3">
        <input
          type="number"
          className="border-2 px-2 py-1 w-2/3 rounded-md border-black"
          placeholder="Enter Amount here"
        />
        <input
          type="submit"
          value="Donate"
          onClick={handleDonate}
          disabled={goal === amountRaised}
          className="bg-[#50D8D8] cursor-pointer border-2 font-bold border-[#011BFF] rounded-md py-1 px-2"
        />
      </form>
      <p className="text-[#FF198C] mb-3 text-lg text-center font-medium">
        Remaining amount needed: ${goal - amountRaised}
      </p>
    </div>
  );
}
