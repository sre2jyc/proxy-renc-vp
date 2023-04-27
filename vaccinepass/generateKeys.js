const Proxy = require("../index").Proxy;
const PRE = require("../index");

function generateKeysUser(){
    var kp_A = Proxy.generate_key_pair();
    // console.log(kp_A)
    var sk_A = Proxy.to_hex(kp_A.get_private_key().to_bytes());
    var pk_A = Proxy.to_hex(kp_A.get_public_key().to_bytes());
    console.log("Generated !!!");
    // Document.getElementById("new_keys").innerHTML = "Holaaaa !!!";
    // document.getElementById("pri_k").innerHTML = "Private !!!";
    console.log("Public Key : " + pk_A);
    console.log("Secret Key : " + sk_A);
}


generateKeysUser();