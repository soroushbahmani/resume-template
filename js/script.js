// typing...
var typed = new Typed(".typing", {
    loop: true,
    backDelay: 1000,
    strings: ["Web Developer", "Front-End Developer"],
    typeSpeed: 150,
    backSpeed: 100,
})

// aside =>  nav => a => active
const navLink = document.querySelectorAll(".aside .nav a");
// navLink.forEach(e=>{
//     e.addEventListener("click",()=>{
//         navLink.forEach(el=>{
//             el.classList.remove("active")
//         })
//         e.classList.add("active")
//     })
// })

// scrool


document.addEventListener("scroll", (e) => {
    if (document.scrollingElement.scrollTop >= 0 && document.scrollingElement.scrollTop < 668) {
        navLink.forEach(e => {
            e.classList.remove("active")
        })
        navLink[0].classList.add('active')
    }
    else if (document.scrollingElement.scrollTop >= 668 && document.scrollingElement.scrollTop < 4200) {
        navLink.forEach(e => {
            e.classList.remove("active")
        })
        navLink[1].classList.add('active')
    }
    else if (document.scrollingElement.scrollTop >= 4200 && document.scrollingElement.scrollTop < 5200) {
        navLink.forEach(e => {
            e.classList.remove("active")
        })
        navLink[2].classList.add('active')
    }
    else if (document.scrollingElement.scrollTop >= 5200 && document.scrollingElement.scrollTop < 6000) {
        navLink.forEach(e => {
            e.classList.remove("active")
        })
        navLink[3].classList.add('active')
    } else if (document.scrollingElement.scrollTop >= 6000) {
        navLink.forEach(e => {
            e.classList.remove("active")
        })
        navLink[4].classList.add('active')
    }
})



let open = false;
const modal = (img) => {
    const modal_elemant = document.getElementById('modal');
    const image_modal = document.getElementById('image_modal');
    
    if (img) {
        const image_element = document.getElementById(img);
        const image_element_value = image_element.attributes.getNamedItem('src').nodeValue;
        image_modal.setAttribute('src',image_element_value)
    }

    modal_elemant.classList.toggle('hide')

}