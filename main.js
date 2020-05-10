
let styles = ["Jazz", "Blues"];
styles[2] = "Rock-n-Roll";
styles[1] = "Classic";
let first = styles.shift();
let newLenght = styles.unshift("Rap", "Reggae");
alert(styles);


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}  // copiat :(((

