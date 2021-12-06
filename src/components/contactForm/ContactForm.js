import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  alert
}) => {

  return (
    <form onSubmit={handleSubmit} >
      <label htmlFor="nameInput">Name</label>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        id="nameInput" 
        required />
      <label htmlFor="phoneInput">Phone</label>
      <input 
        value={phone}
        onChange={(e) => setPhone(e.target.value)}        
        type="tel" 
        pattern="^(([+]46)((70[{0-9}])|(72[{0-9})])|(73[{0-9}])|(76[{0-9}]))([\d]{6}))$"
        id="phoneInput" 
        required />
      <label htmlFor="emailInput">Email</label>
      <input 
        value={email}
        onChange={(e) => setEmail(e.target.value)}        
        type="email"
        id="emailInput" 
        required />
      <button type="submit" disabled={alert ? true : false} >Add Contact</button> 
      <h2 className="alert">{alert}</h2>
    </form>
  );
};
