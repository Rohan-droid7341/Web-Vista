window.onload = function colourchange(){
    const features = document.getElementById('key');
    const colours = ['#cdcdcc', '#ACDDDE', '#CAF1DE', '#E1F8DC','#FFE7C7', '#C0E7D7', '#B5C6ED'];
    let index = 0;
   
    setInterval(() => {
       features.style.backgroundColor = colours[index];
       index = (index + 1) % colours.length;
    }, 500);
   }


   const stbuttons = document.querySelectorAll('.but')

   stbuttons.forEach((but) => {
       but.addEventListener("click", () => {
           alert('This feature will be added soon!')
       })
   })
   
   const subjects = document.querySelectorAll(".subject");
   
   subjects.forEach((subject) => {
       subject.addEventListener("mouseover", () => {
           subject.style.border = "2px solid yellow"
       });
   
       subject.addEventListener("mouseout", () => {
           subject.style.border = "none"
       })
   })
   
   
   document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('keydown', (e) => {
    if (e.key === 'F12') {
        e.preventDefault();
    }
});



scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { 
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});