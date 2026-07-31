const observer = new IntersectionObserver(entries => {

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".fade").forEach(section=>{

observer.observe(section);

});

const galleryItems=document.querySelectorAll(".galleryItem");

galleryItems.forEach(item=>{

item.addEventListener("mouseenter",()=>{

item.style.boxShadow="0 0 30px rgba(184,139,29,.4)";

});

item.addEventListener("mouseleave",()=>{

item.style.boxShadow="none";

});

});