 if (window.innerWidth > 1025) {
       const scrollContainer = document.querySelector("main");

        scrollContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
        });
    } else {

}


// Contacto

