//STEP 1
var myFavMovies = ["Topgun","Despicable me","Rush hour","Harry potter","Inception"]
console.log(myFavMovies[1]);
window.console.log("\n");
//STEP 2
var movies = new Array(5);
movies[0] = "Jurassic park";
movies[1] = "Batman";
movies[2] = "Ironman";
movies[3] = "Titanic";
movies[4] = "Forrest Gump";
console.log(movies[0]);
window.console.log("\n");
//STEP 3
var movies_1 = new Array(5);
movies_1[0] = "Jurassic park";
movies_1[1] = "Batman";
movies_1[2] = "Ironman";
movies_1[3] = "Titanic";
movies_1[4] = "Forrest Gump";
movies_1.splice(2,0,"Avengers")
console.log(movies_1.length);
window.console.log("\n");
//STEP 4
var movies_2 = [];
movies_2[0] = "Gladiator";
movies_2[1] = "Avatar";
movies_2[2] = "Spiderman";
movies_2[3] = "The Dark knight";
movies_2[4] = "Joker";
delete movies_2[0];
console.log(movies_2);
window.console.log("\n");
//STEP 5
var movies_3 = [];
movies_3[0] = "Gladiator";
movies_3[1] = "Avatar";
movies_3[2] = "Spiderman";
movies_3[3] = "The Dark knight";
movies_3[4] = "Joker";
movies_3[5] = "Batman";
movies_3[6] = "Jurassic park";

for(var index = 0; index < movies_3.length; index++){
    window.console.log(movies_3[index]);
}
window.console.log("\n");
//STEP 6
var movies_4 = [];
movies_4[0] = "Gladiator";
movies_4[1] = "Avatar";
movies_4[2] = "Spiderman";
movies_4[3] = "The Dark knight";
movies_4[4] = "Joker";
movies_4[5] = "Batman";
movies_4[6] = "Jurassic park";

for(index in movies_4){
    window.console.log(movies_4[index]);
}
window.console.log("\n");
//STEP 7
var movies_5 = [];
movies_5[0] = "Gladiator";
movies_5[1] = "Avatar";
movies_5[2] = "Spiderman";
movies_5[3] = "The Dark knight";
movies_5[4] = "Joker";
movies_5[5] = "Batman";
movies_5[6] = "Jurassic park";
movies_5.sort();
for(index in movies_5){
    window.console.log(movies_5[index]);
}
window.console.log("\n");
//STEP 8
var movies_6 = [];
movies_6[0] = "Gladiator";
movies_6[1] = "Avatar";
movies_6[2] = "Spiderman";
movies_6[3] = "The Dark knight";
movies_6[4] = "Joker";
movies_6[5] = "Batman";
movies_6[6] = "Jurassic park";

var leastFavMovies = [];
leastFavMovies[0] = "Nope";
leastFavMovies[1] = "Barbarian";
leastFavMovies[2] = "Race 3";

window.console.log("\nMovies I like:\n\n");
for(var index = 0; index < movies_6.length; index++){
    window.console.log(movies_6[index]);
}
window.console.log("\n");

window.console.log("Movies I regret watching:\n\n");
for (var index = 0; index < leastFavMovies.length; index++) {
    window.console.log(leastFavMovies[index]);
}
window.console.log("\n");
//STEP 9
var movies_7 = movies_6.concat(leastFavMovies);
movies_7.sort();
movies_7.reverse();
for (var index = 0; index < movies_7.length; index++) {
    window.console.log(movies_7[index]);
}
window.console.log("\n");
//STEP 10
window.console.log(movies_7.pop());
