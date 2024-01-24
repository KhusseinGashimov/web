const { Web3 } = require('web3');
const fs = require('fs');


const infuraApiKey = '18bf6c6f071d4f949e9ecc4a2525d260';
const web3 = new Web3('https://sepolia.infura.io/v3/18bf6c6f071d4f949e9ecc4a2525d260', { timeout: 60000 });

const contractAddress = '0xc3f423E5d0F409d88bEdF262CF1Dd9A392bDf6cf';

// Read ABI from JSON file
const abiFilePath = 'ABI.json';
const abiRawData = fs.readFileSync(abiFilePath);
const abi = JSON.parse(abiRawData);

const contract = new web3.eth.Contract(abi, contractAddress);

const userAddress = '0x318EED037F6B739524A1Bc663101eAa73f0c9f8C';


contract.methods.balanceOf(userAddress).call()
.then(balance => {
        console.log(`Balance of ${userAddress}: ${balance} tokens`);
    })
    .catch(error => {
        console.error('Error checking balance:', error);
    });