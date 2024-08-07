const projectsDetails = document.querySelectorAll('.card-detail');
const btnsNext = document.querySelectorAll('.btn-next');
const btnsPrevious = document.querySelectorAll('.btn-previous');
const modalsContents = document.querySelectorAll('.project-details-container'); 

let currentIndex = 0;


btnsNext.forEach(btnNext => {
    btnNext.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % projectsDetails.length;
        updateModalContent(currentIndex);
    });
});


btnsPrevious.forEach(btnPrevious => {
    btnPrevious.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + projectsDetails.length) % projectsDetails.length;
        updateModalContent(currentIndex);
    });
});


function updateModalContent(index) {
    const projectDetail = projectsDetails[index].innerHTML;
    modalsContents.forEach(modalContent => {
        modalContent.innerHTML = projectDetail;
    })
}
