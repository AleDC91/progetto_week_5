let viewSection = document.querySelector("#new-releases .carousel-inner");

let films = viewSection.querySelectorAll("div");


let next = document.querySelector("#new-releases .carousel-control-next");
let prev = document.querySelector("#new-releases .carousel-control-prev");


let usr = document.querySelector('.right-nav-btns .user-avatar');

let src = document.querySelector('.right-nav-btns .search-nav');
let kids = document.querySelector('.right-nav-btns .kids');
let bell = document.querySelector('.right-nav-btns .bell');


window.addEventListener('load' , () => {

    let inner = window.innerWidth;
    viewSection.style.maxWidth = `${inner}px`;
    trendingSection.style.maxWidth = `${inner}px`;
    prev.style.left = "0px";
    next.style.left = `${inner - 70}px`;
    
    
    films.forEach((film) => {
        if (inner > 992) {
          film.style.width = `${(inner) / 6}px`;
          film.style.height = film.style.width / 3;
        }
        else if (inner > 992) {
          film.style.width = `${(inner) / 4}px`;
          film.style.height = film.style.width / 3;
        }
        else if (inner > 768) {
          film.style.width = `${(inner) / 3}px`;
          film.style.height = film.style.width / 3;
        } 
        else if (inner > 576) {
            film.style.width = `${(inner) / 2}px`;
            film.style.height = film.style.width / 3;
        }
        else {
          film.style.width = `${(inner)}px`;
          film.style.height = film.style.width / 3;

          
        }
        console.log(film.style.width)
      });
});

window.addEventListener('resize', () => {
    let inner = window.innerWidth;
    viewSection.style.maxWidth = `${inner}px`;
    prev.style.left = "0px";
    next.style.left = `${inner - 70}px`
    
    
    
    films.forEach((film) => {
        if (inner > 992) {
          film.style.width = `${(inner) / 6}px`;
          film.style.height = film.style.width / 3;
        }
        else if (inner > 992) {
          film.style.width = `${(inner) / 4}px`;
          film.style.height = film.style.width / 3;
        }
        else if (inner > 768) {
          film.style.width = `${(inner) / 3}px`;
          film.style.height = film.style.width / 3;
        } 
        else if (inner > 576) {
            film.style.width = `${(inner) / 2}px`;
            film.style.height = film.style.width / 3;
        }
        else {
          film.style.width = `${(inner)}px`;
          film.style.height = film.style.width / 3;
        }
        console.log(film.style.width)
      });
})




// console.dir(films);
// console.log(`${window.innerWidth / 6}px`)
next.addEventListener('click', () => {
    let inner = window.innerWidth;
    viewSection.style.scrollBehavior = 'smooth'
    viewSection.scrollLeft += inner;
    viewSection.style.transition = 'transform 0.3s linear'
    console.dir(viewSection.style.transition)
})

prev.addEventListener('click', () => {
    let inner = window.innerWidth;
    viewSection.style.scrollBehavior = 'smooth'
    viewSection.scrollLeft -= inner
    viewSection.style.transition = 'transform 0.3s linear'
    console.dir(viewSection.style.transition)
   
})



// TRENDING

let trendingSection = document.querySelector("#trending .carousel-inner");

let films2 = trendingSection.querySelectorAll("div");


let next2 = document.querySelector("#trending .carousel-control-next");
let prev2 = document.querySelector("#trending .carousel-control-prev");

console.log(prev2)




window.addEventListener('load' , () => {

    let inner = window.innerWidth;
    trendingSection.style.maxWidth = `${inner}px`;
    trendingSection.style.maxWidth = `${inner}px`;
    prev2.style.left = "0px";
    next2.style.left = `${inner - 70}px`;
    
    
    films2.forEach((film) => {
        if (inner > 992) {
          film.style.width = `${(inner) / 6}px`;
          film.style.height = film.style.width / 3;
        }
        else if (inner > 992) {
          film.style.width = `${(inner) / 4}px`;
          film.style.height = film.style.width / 3;
        }
        else if (inner > 768) {
          film.style.width = `${(inner) / 3}px`;
          film.style.height = film.style.width / 3;
        } 
        else if (inner > 576) {
            film.style.width = `${(inner) / 2}px`;
            film.style.height = film.style.width / 3;
        }
        else {
          film.style.width = `${(inner)}px`;
          film.style.height = film.style.width / 3;
        }
        console.log(film.style.width)
      });
});

window.addEventListener('resize', () => {
    let inner = window.innerWidth;
    trendingSection.style.maxWidth = `${inner}px`;
    prev2.style.left = "0px";
    next2.style.left = `${inner - 70}px`
    
    
    
    films2.forEach((film) => {
        if (inner > 992) {
          film.style.width = `${(inner) / 6}px`;
          film.style.height = film.style.width / 3;
        }
        else if (inner > 992) {
          film.style.width = `${(inner) / 4}px`;
          film.style.height = film.style.width / 3;
        }
        else if (inner > 768) {
          film.style.width = `${(inner) / 3}px`;
          film.style.height = film.style.width / 3;
        } 
        else if (inner > 576) {
            film.style.width = `${(inner) / 2}px`;
            film.style.height = film.style.width / 3;
        }
        else {
          film.style.width = `${(inner)}px`;
          film.style.height = film.style.width / 3;
        }
        console.log(film.style.width)
      });
})




// console.dir(films);
// console.log(`${window.innerWidth / 6}px`)
next2.addEventListener('click', () => {
    let inner = window.innerWidth;
    trendingSection.style.scrollBehavior = 'smooth'
    trendingSection.scrollLeft += inner;
    trendingSection.style.transition = 'transform 0.3s linear'
    console.dir(trendingSection.style.transition)
})

prev2.addEventListener('click', () => {
    let inner = window.innerWidth;
    trendingSection.style.scrollBehavior = 'smooth'
    trendingSection.scrollLeft -= inner
    trendingSection.style.transition = 'transform 0.3s linear'
    console.dir(trendingSection.style.transition)
   
})



// watch


let watchSection = document.querySelector("#watchIt .carousel-inner");

let films3 = watchSection.querySelectorAll("div");


let next3 = document.querySelector("#watchIt .carousel-control-next");
let prev3 = document.querySelector("#watchIt .carousel-control-prev");





window.addEventListener('load' , () => {

    let inner = window.innerWidth;
    watchSection.style.maxWidth = `${inner}px`;
    trendingSection.style.maxWidth = `${inner}px`;
    prev3.style.left = "0px";
    next3.style.left = `${inner - 70}px`;
    
    
    films3.forEach((film) => {
        if (inner > 992) {
          film.style.width = `${(inner) / 6}px`;
          film.style.height = film.style.width / 3;
        }
        else if (inner > 992) {
          film.style.width = `${(inner) / 4}px`;
          film.style.height = film.style.width / 3;
        }
        else if (inner > 768) {
          film.style.width = `${(inner) / 3}px`;
          film.style.height = film.style.width / 3;
        } 
        else if (inner > 576) {
            film.style.width = `${(inner) / 2}px`;
            film.style.height = film.style.width / 3;
        }
        else {
          film.style.width = `${(inner)}px`;
          film.style.height = film.style.width / 3;
        }
        console.log(film.style.width)
      });
});

window.addEventListener('resize', () => {
    let inner = window.innerWidth;
    watchSection.style.maxWidth = `${inner}px`;
    prev3.style.left = "0px";
    next3.style.left = `${inner - 70}px`
    
    
    
    films3.forEach((film) => {
        if (inner > 992) {
          film.style.width = `${(inner) / 6}px`;
          film.style.height = film.style.width / 3;
        }
        else if (inner > 992) {
          film.style.width = `${(inner) / 4}px`;
          film.style.height = film.style.width / 3;
        }
        else if (inner > 768) {
          film.style.width = `${(inner) / 3}px`;
          film.style.height = film.style.width / 3;
        } 
        else if (inner > 576) {
            film.style.width = `${(inner) / 2}px`;
            film.style.height = film.style.width / 3;
        }
        else {
          film.style.width = `${(inner)}px`;
          film.style.height = film.style.width / 3;
        }
        console.log(film.style.width)
      });
})




// console.dir(films3);
// console.log(`${window.innerWidth / 6}px`)
next3.addEventListener('click', () => {
    let inner = window.innerWidth;
    watchSection.style.scrollBehavior = 'smooth'
    watchSection.scrollLeft += inner;
    watchSection.style.transition = 'transform 0.3s linear'
    console.dir(watchSection.style.transition)
})

prev3.addEventListener('click', () => {
    let inner = window.innerWidth;
    watchSection.style.scrollBehavior = 'smooth'
    watchSection.scrollLeft -= inner
    watchSection.style.transition = 'transform 0.3s linear'
    console.dir(watchSection.style.transition)
   
})






// 

// window.addEventListener('resize', () => {
//     if(inner < 450){
//         
//     }
// })

