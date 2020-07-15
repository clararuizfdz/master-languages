console.log("************** JAVASCRIPT FUNDAMENTALS *********************");
console.log("************** ZZCRYPT *********************");
// Descifra el siguiente secreto:
var secret =
    "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function decrypt(secret) {
    const newString = "";
    secret.split('').forEach((char) => {
        if (char != " ") {
            const index = cipher.indexOf(char, 0);
            newString = newString.concat(plain[index]);
        } else {
            newString = newString.concat(char);
        }
    });
    return newString;
}

console.log("Zzcrypt:", decrypt(secret));