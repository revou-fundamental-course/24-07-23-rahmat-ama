let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

const firstname = document.getElementById("fname")
const lastname = document.getElementById("lname")
const submitbutton = document.getElementById("buttonsub")
const firstnameout = document.getElementById("fnameout")
const lastnameout = document.getElementById("lnameout")

submitbutton.addEventListener("click", function(event) {
    event.preventDefault()
    if (firstname.value == "" || lastname.value == ""){
        alert("Please fill the form")
    }
    firstnameout.textContent = firstname.value
    lastnameout.textContent = lastname.value
});