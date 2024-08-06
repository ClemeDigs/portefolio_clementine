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
        const cardHoverHtml = document.createElement('div');
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


        cardHtml.classList.add('div-projet');
        cardHoverHtml.classList.add('div-info');
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
        btnMore.textContent = 'En svoir plus';

        cardHtml.appendChild(cardHoverHtml);
        cardHtml.appendChild(imgHtml);
        cardHoverHtml.appendChild(titleHtml);
        cardHoverHtml.appendChild(descHtml);
        cardHoverHtml.appendChild(taskHtml);
        cardHoverHtml.appendChild(dateHtml);
        cardHoverHtml.appendChild(linkHtml);

        return cardHtml;
    }

    toDetailHtml() {
        const detailHtml = document.createElement('div');

    }
}