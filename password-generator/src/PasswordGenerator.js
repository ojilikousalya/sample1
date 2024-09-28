import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(false);

  const generatePassword = () => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+=-';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let characters = lowercase;

    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;
    if (includeUppercase) characters += uppercase;

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    setPassword(newPassword);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Password Generator</h1>
      <div>
        <label>
          Length: 
          <input 
            type="number" 
            value={length} 
            onChange={(e) => setLength(Number(e.target.value))} 
            min="4" 
            max="20" 
          />
        </label>
      </div>
      <div>
        <label>
          <input 
            type="checkbox" 
            checked={includeNumbers} 
            onChange={(e) => setIncludeNumbers(e.target.checked)} 
          />
          Include Numbers
        </label>
      </div>
      <div>
        <label>
          <input 
            type="checkbox" 
            checked={includeSymbols} 
            onChange={(e) => setIncludeSymbols(e.target.checked)} 
          />
          Include Symbols
        </label>
      </div>
      <div>
        <label>
          <input 
            type="checkbox" 
            checked={includeUppercase} 
            onChange={(e) => setIncludeUppercase(e.target.checked)} 
          />
          Include Uppercase
        </label>
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      <div>
        <h2>{password}</h2>
      </div>
    </div>
  );
};

export default PasswordGenerator;
