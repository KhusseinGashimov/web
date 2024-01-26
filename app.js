const { Web3 } = require('web3');
const fs = require('fs');


const infuraApiKey = '18bf6c6f071d4f949e9ecc4a2525d260';
const web3 = new Web3('https://sepolia.infura.io/v3/18bf6c6f071d4f949e9ecc4a2525d260', { timeout: 60000 });

const contractAddress = '0x6D10F5a04717C0249836d4feF9bdAa9865A83E08';

// Read ABI from JSON file
const abiFilePath = 'ABI.json';
const abiRawData = fs.readFileSync(abiFilePath);
const abi = JSON.parse(abiRawData);

const contract = new web3.eth.Contract(abi, contractAddress);

const userAddress = '0x2b1956F7DA27983355eF4FA275C48CD6366F7f64';


contract.methods.balanceOf(userAddress).call()
.then(balance => {
        console.log(`Balance of ${userAddress}: ${balance} tokens`);
    })
    .catch(error => {
        console.error('Error checking balance:', error);
    });