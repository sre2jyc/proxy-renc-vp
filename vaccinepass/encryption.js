const Proxy = require("../index").Proxy;
const PRE = require("../index");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    });

function test() {
    
    var kp_A = Proxy.generate_key_pair();
    console.log(kp_A)
    var sk_A = Proxy.to_hex(kp_A.get_private_key().to_bytes());
    var pk_A = Proxy.to_hex(kp_A.get_public_key().to_bytes());

    var kp_B = Proxy.generate_key_pair();
    var sk_B = Proxy.to_hex(kp_B.get_private_key().to_bytes());
    var pk_B = Proxy.to_hex(kp_B.get_public_key().to_bytes());

    let obj = PRE.encryptData(pk_A, "test data")
    console.log(obj)
    let rk = PRE.generateReEncrytionKey(sk_A, pk_B);
    PRE.reEncryption(rk, obj)

    let decryptData = PRE.decryptData(sk_B, obj)
    console.log(decryptData)
}



var citizen_sk = "2bbc33cbed4757c2dac9e0e945ae2469c0384a9e733811c87dbab80b55e91300";
var citizen_pk = "0448f61a043a2725ddfb51b516868bca6a45caaadb65e8b5a5be5427a00b4cba599088737407b7985edb86b96c3ac8f47521426492740ef53c2d8278bb9e7775ce";
var reviewer_sk = "3f4a8b848b10e68e80dfafff378f88ccc445387674515d0cd9a054e9feff816e";
var reviewer_pk = "0434b0c0d61892f373d4a90c0b90783e1b235e3319e4851796a5563b13c4cddb0f5a49e10e525e297eb6dfabc0960082e5da37e19ed3948202e1a7d999e66d55a4";
var message = "there is a big match !!!";
var encrypted_data;



function encryptionData(){
    let obj = PRE.encryptData(citizen_pk, message);
    console.log(obj);
    let renc_k = PRE.generateReEncrytionKey(citizen_sk, reviewer_pk);
    PRE.reEncryption(renc_k, obj);
    console.log(renc_k);
    encrypted_data = obj;
    console.log(encrypted_data);
}


encryptionData();
