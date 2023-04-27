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
var encrypted_data = {
    key: '047780c52044feda9d6902aeb2b08ec0d4b2d72af5ef6a3e57227cc746c1d01ef902926cd7f91a06b600abff9148f6eb3d146912c3704c744e2e5528c596c754c4049708eb7cd3a71839abcaf143c5642b3ef29f9deabad80d2aca3246a9929b2773dfae4d8280aa8ac81facf5df5e47c103bb5e61b57b3b4fd6247d92eb2d98761892e5ef72e3e925efee580daa9c6c2ab1eb2fabe75c75780c0a2c0197503fb4e10407c336920d0583b781974a86aaa5f42d379b104550951dca65c7f1b95caea7d269ac54606bae5fbb3a95590fcb76daebb363a58dd1098ef57d55ea1a40d5e54a',
    cipher: 'mlD90zERVwfxMxyaNXzr0Peg+Cslpao0aHIQhXwWE6U='
  };


function decryptionData(){
    let decryptData = PRE.decryptData(reviewer_sk, encrypted_data)
    console.log(decryptData)
}


decryptionData();