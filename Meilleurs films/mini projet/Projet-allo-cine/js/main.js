var section = document.querySelector("section");

for (var i = 0; i < movies.length; i++) {
  var myArticle = document.createElement("article");
  var myH2 = document.createElement("h2");
  var myPoster = document.createElement("img");
  var myPara1 = document.createElement("p");
  var myPara2 = document.createElement("p");
  var myPara3 = document.createElement("p");
  var myPara4 = document.createElement("p");
  var myPara5 = document.createElement("p");
  var myPara6 = document.createElement("p");
  var myPara7 = document.createElement("p");
  var myPara8 = document.createElement("p");
  var myPara9 = document.createElement("p");
  var myPara10 = document.createElement("p");
  var myPara11 = document.createElement("p");
  var myPara12 = document.createElement("p");
  var myPara13 = document.createElement("p");
  var myPara14 = document.createElement("p");
  var myPara15 = document.createElement("p");

  var myList = document.createElement("ul");
  var myDiv = document.createElement("div");
  var myDiv2 = document.createElement("div");

  myArticle.classList.add("card", "row");
  myDiv2.classList.add("row", "col-12");
  myPoster.classList.add("col-4", "img-fluid", "mx-auto");
  myDiv.classList.add("myDiv","col-8");

  myH2.textContent = movies[i].Title;
  myPoster.src = movies[i].Poster;
  myPara1.textContent = "Genre: " + movies[i].Genre;
  myPara2.textContent = "Year: " + movies[i].Year;
  myPara3.textContent = "Released: " + movies[i].Released;
  myPara4.textContent = "Runtime: " + movies[i].Runtime;
  myPara5.textContent = "Genre: " + movies[i].Genre;
  myPara6.textContent = "Director: " + movies[i].Director;
  myPara7.textContent = "Writer: " + movies[i].Writer;
  myPara8.textContent = "Actors: " + movies[i].Actors;
  myPara9.textContent = "Plot: " + movies[i].Plot;
  myPara10.textContent = "Language: " + movies[i].Language;
  myPara11.textContent = "Country: " + movies[i].Country;
  myPara12.textContent = "Awards: " + movies[i].Awards;
  myPara13.textContent = "Metascore: " + movies[i].Metascore;
  myPara14.textContent = "imdbRating: " + movies[i].imdbRating;
  myPara15.textContent = "Type: " + movies[i].Type;

  /*var Images = movies[i].Images;
    for (var j = 0; j < Images.length; j++) {

    myList.appendChild(list);
    }*/

  myArticle.appendChild(myH2);
  myArticle.appendChild(myDiv2);
  myArticle.appendChild(myPoster);
  myArticle.appendChild(myDiv);

  myDiv2.appendChild(myPoster);
  myDiv2.appendChild(myDiv);

  myDiv.appendChild(myPara1);
  myDiv.appendChild(myPara2);
  myDiv.appendChild(myPara3);
  myDiv.appendChild(myPara4);
  myDiv.appendChild(myPara5);
  myDiv.appendChild(myPara6);
  myDiv.appendChild(myPara7);
  myDiv.appendChild(myPara8);
  myDiv.appendChild(myPara9);
  myDiv.appendChild(myPara10);
  myDiv.appendChild(myPara11);
  myDiv.appendChild(myPara12);
  myDiv.appendChild(myPara13);
  myDiv.appendChild(myPara14);
  myDiv.appendChild(myPara15);

  section.appendChild(myArticle);
}

console.log(movies);
