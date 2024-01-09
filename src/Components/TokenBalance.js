// src/components/TokenBalance.js

import React from 'react';
import './TokenBalance.css';

const TokenBalance = ({ balance, percentageChange }) => {
  return (
    <div className="token-balance-container">
      <h1>Token Balance</h1>
      <p className="balance">Balance: {balance} tokens</p>
      <p className="change">Percentage Change: {percentageChange}%</p>
      {percentageChange < -10 && (
          <div className="Alert">
            <strong>Alert:</strong> Balance has reduced by 10% in the last 12 hours!
          </div>
        )}
    </div>
  );
};

export default TokenBalance;
