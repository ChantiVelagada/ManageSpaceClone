let faq = document.querySelectorAll('.faq');
let plus = document.querySelectorAll(".fa-solid")

for(let i = 0; i < faq.length ; i++) {
    faq[i].addEventListener('click', function() {
        this.classList.toggle('active');
        plus[i].classList.toggle('fa-plus');
        plus[i].classList.toggle('fa-xmark')
    })
}
