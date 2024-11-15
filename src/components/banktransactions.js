import React, { useState } from "react";

const BankTransferForm = () => {
  const [formData, setFormData] = useState({
    amount: "",
    referenceNumber: "",
    chequeNumber: "",
    bankName: "", // Change to a text field
    bankedBy: "",
    date: new Date().toISOString().split("T")[0], // Auto-fill with current date
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission (e.g., send data to server)
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Bank Transfer Application</h2>
      <label>
        Amount:
        <input
          type="text"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
        />
      </label>
      <label>
        Reference Number:
        <input
          type="text"
          name="referenceNumber"
          value={formData.referenceNumber}
          onChange={handleChange}
        />
      </label>
      <label>
        Cheque Number:
        <input
          type="text"
          name="chequeNumber"
          value={formData.chequeNumber}
          onChange={handleChange}
        />
      </label>
      <label>
        Bank Name:
        <input
          type="text"
          name="bankName"
          value={formData.bankName}
          onChange={handleChange}
        />
      </label>
      <label>
        Banked By:
        <input
          type="text"
          name="bankedBy"
          value={formData.bankedBy}
          onChange={handleChange}
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          readOnly
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BankTransferForm;
