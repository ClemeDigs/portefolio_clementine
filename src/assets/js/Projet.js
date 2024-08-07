export default class Projet {
    constructor(img, title, desc, task, categorie, date, link, id) {
        this.img = img;
        this.title = title;
        this.desc = desc;
        this.task = task;
        this.categorie = categorie;
        this.date = date;
        this.link = link;
        this.id = id;
    }

    toGridHtml(){
        const cardHtml = document.createElement('div');
        const cardInfoHtml = document.createElement('div');
        const imgHtml = document.createElement('img');
        const titleHtml = document.createElement('h3');
        const descHtml = document.createElement('p');
        const taskHtml = document.createElement('p');
        const dateHtml = document.createElement('p');
        const linkHtml = document.createElement('a');
        const btnMore = document.createElement('button');

        cardHtml.setAttribute('data-filter', this.categorie.join(' '));
        imgHtml.setAttribute('src', this.img);
        imgHtml.setAttribute('alt', this.title);
        linkHtml.setAttribute('href', this.link);
        btnMore.setAttribute('data-dialog', ('#' + this.id));

        cardHtml.classList.add('div-projet');
        cardInfoHtml.classList.add('div-info');
        imgHtml.classList.add('img-projet');
        /* titleHtml.classList.add('');
        descHtml.classList.add('');
        taskHtml.classList.add('');
        dateHtml.classList.add('');
        linkHtml.classList.add('');
        btnMore.classList.add('');  */

        titleHtml.textContent = this.title;
        descHtml.textContent = this.desc;
        taskHtml.textContent = this.task;
        dateHtml.textContent = this.date;
        linkHtml.textContent = 'Visitez';
        btnMore.textContent = 'En savoir plus';

        cardHtml.appendChild(cardInfoHtml);
        cardHtml.appendChild(imgHtml);
        cardInfoHtml.appendChild(titleHtml);
        cardInfoHtml.appendChild(descHtml);
        cardInfoHtml.appendChild(taskHtml);
        cardInfoHtml.appendChild(dateHtml);
        cardInfoHtml.appendChild(linkHtml);
        cardInfoHtml.appendChild(btnMore);

        return cardHtml;
    }

    toDetailHtml() {
        const dialogDetail = document.createElement('div');
        const detailHtml = document.createElement('div');
        const btnCloseDetail = document.createElement('button');
        const btnNext = document.createElement('button');
        const btnPrevious = document.createElement('button');

        dialogDetail.classList.add('dialog');
        detailHtml.classList.add('card-detail');
        btnCloseDetail.classList.add('btn-close');
        btnNext.classList.add('btn-next');
        btnPrevious.classList.add('btn-previous');

        dialogDetail.id = this.id;

        btnCloseDetail.textContent = 'X';
        btnNext.textContent = '>';
        btnPrevious.textContent = '<';

        dialogDetail.appendChild(detailHtml);
        detailHtml.appendChild(btnCloseDetail);
        detailHtml.appendChild(btnPrevious);
        detailHtml.appendChild(btnNext);

        return dialogDetail;
    }
}