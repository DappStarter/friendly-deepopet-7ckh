require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remain million grace lock swing slide'; 
let testAccounts = [
"0x36bb10402791a02008d4dc9cc2bf7bfe5d93337b29c6f3df445fbb58649d536b",
"0x647f69901bf60b01a5f11f938dc05bd4845f9c57887a6625bd902b2e2a43bf08",
"0xbd11f3a0cccf0817a7480cf1ba25e9ddaecf93ceb86af53678d66d8d17f6b739",
"0xfbb75b1c3fb4c4abcbefb82baaac30f4e04e0d1e0949e56f095cdd38713fe654",
"0x200cd8c595be6e8164688d195843fca975e2c98ac639dc786db9367bcdd6440c",
"0x5398d08039ff93e2dcf9c90eb329335832771bf28abf774ece889ddebd9e3a6e",
"0xac132d3df1fe3c0a573df30157fb96cd970987e63c09135072d3475e78b107d0",
"0xc2d35b06e0b4b339b50c9f315859429554f5c0ace8c39c623c3211e1c14019f2",
"0xac220765482edfaf0e080fe3eef0e29f55ae3109a4587b641d304d2344f6bb87",
"0x83d1e951ea5b266d6d67f1d75963384b6a8794b208152244eac470575a67c9e9"
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


