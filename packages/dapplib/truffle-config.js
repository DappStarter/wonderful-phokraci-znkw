require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz kiwi october slab chapter deny radar puppy half kitten symptom seminar'; 
let testAccounts = [
"0x7aaa0440534da1d1214063df7b0212a8cb9228d0c97c098bef834dc8679c14ec",
"0xae8a1ebda90d08723e30a21ad49c70fc5de3a5ef34884a433d1958d3c6a2449f",
"0x1c404d5df4db0236a45cfeb25fa41bb750880a3aa80653b3f1209d79f6d03f61",
"0xdbc188726da6e9d7009d095fa8201889698147e824033c7237ecc6144c909077",
"0x1125396046b8fb6cd61a4818dcff01b600c5e8342556971b3d296d47357580e7",
"0x0a03e0286cf291927c443cf71b0da88e6ca736812781235a6b4a61e1cee46379",
"0xe0aa55cf09120c38305b8c95e44276b33e580477d775321a33ca27baf7d2cf8a",
"0x2790fc0ae36345b0067b7cd1aa17634c2cf6b2ba5a770d207d4ee1a163cf7989",
"0x3d3889f6c35150b08f8efa3906749d523595e08440ee7bfa780d281ed075e0c1",
"0xc8514975dff48b8d4ef86d52351da1fe67db1ebb7c02fc5fc59ab09866f2d136"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


