import React, { useState } from "react";
import colors from "../config/colors";

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
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: 500,
        margin: "auto",
        marginTop: "17px",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#debb87",
      }}
    >
      <h2>Bank Transfer Application</h2>
      <label style={{ display: "block", marginBottom: "8px" }}>
        Bank Name
        <input
          type="text"
          name="bankName"
          value={formData.bankName}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "12px" }}
        />
      </label>
      <label style={{ display: "block", marginBottom: "8px" }}>
        Amount
        <input
          type="text"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          style={{
            width: "100%",
            marginBottom: "12px",
          }}
        />
      </label>
      <label style={{ display: "block", marginBottom: "8px" }}>
        Reference Number
        <input
          type="text"
          name="referenceNumber"
          value={formData.referenceNumber}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "12px" }}
        />
      </label>
      <label style={{ display: "block", marginBottom: "8px" }}>
        Cheque Number
        <input
          type="text"
          name="chequeNumber"
          value={formData.chequeNumber}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "12px" }}
        />
      </label>
      <label style={{ display: "block", marginBottom: "8px" }}>
        Banked By
        <input
          type="text"
          name="bankedBy"
          value={formData.bankedBy}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "12px" }}
        />
      </label>
      <label style={{ display: "block", marginBottom: "8px" }}>
        Date
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          readOnly
          style={{ width: "100%", marginBottom: "12px" }}
        />
      </label>
      <button
        type="submit"
        primary={true}
        style={{
          backgroundColor: colors.phAMACoreColor1,
          color: "white",
          borderRadius: "6px",
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default BankTransferForm;
