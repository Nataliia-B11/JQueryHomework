/**
Знайдіть теги `<div>`, які стоять безпосередньо після `<h3>` 
і перемістіть ці `<div>`-елемент так, щоб кожен з них став
безпосередньо над відповідним елементом `<h3>`.
 */
$(document).ready(function () {
 function replace(i,h){
    let divH3 = $(h).next();
    h.before(divH3.html());
    divH3.remove();
 }
  $("h3").each(replace);
 
});
