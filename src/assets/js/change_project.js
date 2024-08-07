const projectsDetails = document.querySelectorAll('.card-detail');
const btnsNext = document.querySelectorAll('.btn-next');
const btnsPrevious = document.querySelectorAll('.btn-previous');

btnsNext.forEach(btnNext => {
    btnNext.addEventListener('click', () => {
        changeCard();
    });
})

/* function changeCard() {
    projectsDetails.forEach(projectDetail, index => {
        const projectDetail = projectsDetails[index];
    })
} */