function bonjour(nom){
    console.log("bonjour",nom);
}
function executer(x){
    x("all");
}
executer(bonjour);