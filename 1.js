
let english = ["car", "apple", "pen", "house", "bird"];
let viet = ["oto", "tao", "but", "nha", "chim"];
function searchW() {
    let counter = 0;
    let word = document.getElementById('txt').value;
for ( let i = 0; i < english.length; i ++){
    if (word === english[i]){
        document.write("The definition of " + english[i] + " in Vietnamese is  "+ viet[i] );
        break;
    } else {
        alert("Sorry! We don't have that word in the dictionary. Please come back for the new update");
        break;
    }

}
}