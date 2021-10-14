
// Modal windows for portfolio
let openButton = document.querySelectorAll('.portfolio__button'),
    closeButton = document.querySelectorAll('.modal__button'),
    modal = document.querySelectorAll('.modal'),
    modalFlashcards = document.querySelector('.modal-flashcards'),
    modalPiano = document.querySelector('.modal-piano'),
    body = document.querySelector('body');

openButton.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("portfolio__button_flashcards")) {
            modalFlashcards.style.display = "block";
            body.classList.add("body_no-scroll");
        } else if (btn.classList.contains("portfolio__button_virtual")) {
            modalPiano.style.display = "block";
            body.classList.add("body_no-scroll");
        }
    });
});

closeButton.forEach(btn => {
    btn.addEventListener("click", () => {
        modal.forEach(m => {
            closeModal(m);
        });
    });
})


modal.forEach(m => {
   m.addEventListener("click", (e) => {
      if (e.target === m) {
          closeModal(m);
      }
   });
});

function closeModal(modal) {
    modal.style.display = "none";
    body.classList.remove("body_no-scroll");
}


/* Hamburger menu for mobile devices */
let mobileModal = document.querySelector(".mobile-modal"),
    hamburgerButton = document.querySelector(".header__burger"),
    links = document.querySelectorAll(".header__item a");


hamburgerButton.addEventListener("click", () => {

    if (hamburgerButton.classList.contains("active")) {
        hamburgerButton.classList.remove("active");
        mobileModal.classList.remove("active");
        body.classList.remove("body_no-scroll");
    } else {
        hamburgerButton.classList.add("active");
        mobileModal.classList.add("active");
        body.classList.add("body_no-scroll");
    }

});

links.forEach(link => {
    link.addEventListener("click", () => {

           hamburgerButton.classList.remove("active");
           mobileModal.classList.remove("active");
           body.classList.remove("body_no-scroll");

    });
})
