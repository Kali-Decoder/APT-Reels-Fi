import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

type DropdownOption = "1 Year" | "2 Years" | "3 Years" | "5 Years";

interface ModalProps {
  closeModal: () => void;
}

const customDropdownOptions: DropdownOption[] = ["1 Year", "2 Years", "3 Years", "5 Years"];

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  const [amount, setAmount] = useState("");
  const [tenure, setTenure] = useState("1 Year");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleProceed = () => {
    if (amount.trim() === "") {
      alert("Please enter an amount");
      return;
    }

    console.log("Amount:", amount);
    console.log("Tenure:", tenure);
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md mx-4">
        <h2 className="text-2xl font-semibold mb-4 text-white">Invest Amount</h2>
        <p className="text-gray-400 mb-6">
          Please enter the amount you wish to invest and select the tenure period.
        </p>
        <div className="mb-4">
          <label className="block text-gray-400 mb-2 font-medium" htmlFor="amount">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            className="w-full p-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>
        <div className="relative mb-6">
          <label className="block text-gray-400 mb-2 font-medium" htmlFor="tenure">
            Tenure Period
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span>{tenure}</span>
              {isDropdownOpen ? (
                <FaChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <FaChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>
            {isDropdownOpen && (
              <div className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
                {customDropdownOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setTenure(option);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          <button
            onClick={handleProceed}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Proceed
          </button>
          <button
            onClick={closeModal}
            className="bg-gray-700 text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
