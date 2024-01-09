// import React, { useState, useEffect } from 'react';
// import './App.css';

// const App = () => {
//   const [nativeTokenBalance, setNativeTokenBalance] = useState(0);
//   const [percentageChange, setPercentageChange] = useState(0);

//   // Fetch native token balance and calculate percentage change
//   useEffect(() => {
//     // Placeholder functions for fetching data (replace with actual implementations)
//     const fetchNativeTokenBalance = async () => {
//       // Fetch native token balance from the blockchain or API
//       const balance = await getNativeTokenBalance();
//       setNativeTokenBalance(balance);
//     };

//     const calculatePercentageChange = async () => {
//       // Calculate percentage change based on historical data
//       const change = await getPercentageChange();
//       setPercentageChange(change);
//     };

//     fetchNativeTokenBalance();
//     calculatePercentageChange();
//   }, []);

//   // Placeholder functions (replace with actual implementations)
//   const getNativeTokenBalance = async () => {
//     // Fetch native token balance from the blockchain or API
//     // Replace with actual code
//     return 1000; // Placeholder value
//   };

//   const getPercentageChange = async () => {
//     // Calculate percentage change based on historical data
//     // Replace with actual code
//     return -12; // Placeholder value
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Native Token Balance</h1>
//         <p>Balance: {nativeTokenBalance}</p>
//         <p>Percentage Change (last 12 hours): {percentageChange}%</p>
//         {percentageChange < -10 && (
//           <div className="Alert">
//             <strong>Alert:</strong> Balance has reduced by 10% in the last 12 hours!
//           </div>
//         )}
//       </header>
//     </div>
//   );
// };

// export default App;

// // import React, { useState, useEffect } from 'react';
// // import { Container, Typography, Box, Alert } from '@mui/material';
// // // import { green, red } from '@mui/material/colors';
// // import './App.css';

// // const App = () => {
// //   const [nativeTokenBalance, setNativeTokenBalance] = useState(0);
// //   const [percentageChange, setPercentageChange] = useState(0);
// //   const [showAlert, setShowAlert] = useState(false);

// //   // Fetch native token balance and calculate percentage change
// //   useEffect(() => {
// //     // Placeholder functions for fetching data (replace with actual implementations)
// //     const fetchNativeTokenBalance = async () => {
// //       // Fetch native token balance from the blockchain or API
// //       const balance = await getNativeTokenBalance();
// //       setNativeTokenBalance(balance);
// //     };

// //     const calculatePercentageChange = async () => {
// //       // Calculate percentage change based on historical data
// //       const change = await getPercentageChange();
// //       setPercentageChange(change);

// //       // Show alert if the balance reduces by 10%
// //       if (change < -10) {
// //         setShowAlert(true);
// //       }
// //     };

// //     fetchNativeTokenBalance();
// //     calculatePercentageChange();
// //   }, []);

// //   // Placeholder functions (replace with actual implementations)
// //   const getNativeTokenBalance = async () => {
// //     // Fetch native token balance from the blockchain or API
// //     // Replace with actual code
// //     return 1000; // Placeholder value
// //   };

// //   const getPercentageChange = async () => {
// //     // Calculate percentage change based on historical data
// //     // Replace with actual code
// //     return -5; // Placeholder value
// //   };

// //   return (
// //     <Container component="main" maxWidth="md" className="App">
// //       <Box mt={8} mb={4}>
// //         <Typography variant="h4" component="h1" gutterBottom>
// //           Native Token Balance
// //         </Typography>
// //         <Typography variant="h6" component="p" gutterBottom>
// //           Balance: {nativeTokenBalance}
// //         </Typography>
// //         <Typography variant="h6" component="p" gutterBottom>
// //           Percentage Change (last 12 hours): {percentageChange}%
// //         </Typography>
// //         {showAlert && (
// //           <Alert severity="error" sx={{ mt: 4 }}>
// //             <strong>Alert:</strong> Balance has reduced by 10% in the last 12 hours!
// //           </Alert>
// //         )}
// //       </Box>
// //     </Container>
// //   );
// // };

// // export default App;


// import React, { useState, useEffect } from 'react';
// import './App.css';

// const App = () => {
//   const [nativeTokenBalance, setNativeTokenBalance] = useState(0);
//   const [percentageChange, setPercentageChange] = useState(0);

//   useEffect(() => {
//     // Placeholder functions for fetching data (replace with actual implementations)
//     const fetchNativeTokenBalance = async () => {
//       const balance = await getNativeTokenBalance();
//       setNativeTokenBalance(balance);
//     };

//     const calculatePercentageChange = async () => {
//       const change = await getPercentageChange();
//       setPercentageChange(change);
//     };

//     fetchNativeTokenBalance();
//     calculatePercentageChange();
//   }, []);

//   const getNativeTokenBalance = async () => {
//     // Fetch native token balance from the blockchain or API
//     return 1000; // Placeholder value
//   };

//   const getPercentageChange = async () => {
//     // Calculate percentage change based on historical data
//     return -12; // Placeholder value
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Native Token Balance</h1>
//         <div className="Token-info">
//           <p className="Balance">Balance: {nativeTokenBalance} ETH</p>
//           <p className="Change">Change (last 12 hours): {percentageChange}%</p>
//         </div>
        // {percentageChange < -10 && (
        //   <div className="Alert">
        //     <strong>Alert:</strong> Balance has reduced by 10% in the last 12 hours!
        //   </div>
        // )}
//       </header>
//     </div>
//   );
// };

// export default App;


// src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import TokenBalance from './Components/TokenBalance';

const App = () => {
  const [balance, setBalance] = useState(0);
  const [percentageChange, setPercentageChange] = useState(0);

  // Fetch balance and percentage change data here...
  useEffect(() => {
    //     // Placeholder functions for fetching data (replace with actual implementations)
        const fetchBalance = async () => {
          const balance = await getBalance();
          setBalance(balance);
        };
    
        const calculatePercentageChange = async () => {
          const change = await getPercentageChange();
          setPercentageChange(change);
        };
    
        fetchBalance();
        calculatePercentageChange();
      }, []);
    
      const getBalance = async () => {
        // Fetch native token balance from the blockchain or API
        return 1000; // Placeholder value
      };
    
      const getPercentageChange = async () => {
        // Calculate percentage change based on historical data
        return -12; // Placeholder value
      };


  return (
    <div className="app-container">
      <h1>Blockchain Token Balance</h1>
      <TokenBalance balance={balance} percentageChange={percentageChange} />
    </div>
  );
};

export default App;
