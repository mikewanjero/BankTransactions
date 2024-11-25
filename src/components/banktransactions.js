import React, { useState } from "react";
import { Button, DatePicker, Input, Label } from "@progress/kendo-react-all";
import colors from "../config/colors";

const BankTransferForm = () => {
  const [formData, setFormData] = useState({
    amount: "",
    referenceNumber: "",
    chequeNumber: "",
    bankName: "",
    bankedBy: "",
    date: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (e) => {
    setFormData({ ...formData, date: e.value });
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
      <Label style={{ display: "block", marginBottom: "8px" }}>
        Bank Name
        <Input
          type="text"
          name="bankName"
          value={formData.bankName}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "12px" }}
        />
      </Label>
      <Label style={{ display: "block", marginBottom: "8px" }}>
        Amount
        <Input
          type="text"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          style={{
            width: "100%",
            marginBottom: "12px",
          }}
        />
      </Label>
      <Label style={{ display: "block", marginBottom: "8px" }}>
        Reference Number
        <Input
          type="text"
          name="referenceNumber"
          value={formData.referenceNumber}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "12px" }}
        />
      </Label>
      <Label style={{ display: "block", marginBottom: "8px" }}>
        Cheque Number
        <Input
          type="text"
          name="chequeNumber"
          value={formData.chequeNumber}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "12px" }}
        />
      </Label>
      <Label style={{ display: "block", marginBottom: "8px" }}>
        Banked By
        <Input
          type="text"
          name="bankedBy"
          value={formData.bankedBy}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "12px" }}
        />
      </Label>
      <Label
        editorId="date"
        editorValid={true}
        style={{ display: "block", marginBottom: "8px" }}
      >
        Date:
        <DatePicker
          type="date"
          name="date"
          placeholder="Select date"
          value={formData.date}
          onChange={handleDateChange}
          style={{ width: "100%", marginBottom: "12px" }}
          format="dd-mm-yyyy"
          formatPlaceholder="date-month-year"
        />
      </Label>
      <Button
        type="submit"
        primary={true}
        style={{
          backgroundColor: colors.phAMACoreColor1,
          color: "white",
          borderRadius: "6px",
        }}
      >
        Submit
      </Button>
    </form>
  );
};

export default BankTransferForm;
