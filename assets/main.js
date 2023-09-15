var container = document.getElementById('container');

for (var i = 0; i < cardData.length; i++) {
    var card = document.createElement('section');
    card.className = 'card';

    var img = document.createElement('img');
    img.src = cardData[i].imgSrc;
    img.alt = cardData[i].imgAlt;

    var cardContent = document.createElement('aside');
    cardContent.className = 'card-content';

    var cardTitle = document.createElement('div');
    cardTitle.className = 'card-title';

    var h3 = document.createElement('h3');
    var a1 = document.createElement('a');
    a1.href = cardData[i].titleLink;
    a1.target = '_blank';
    a1.textContent = cardData[i].title;
    h3.appendChild(a1);

    var h4 = document.createElement('h4');
    var a2 = document.createElement('a');
    a2.href = cardData[i].sourceLink;
    a2.target = '_blank';
    a2.textContent = 'Código fonte';
    h4.appendChild(a2);

    cardTitle.appendChild(h3);
    cardTitle.appendChild(h4);

    var cardTechnology = document.createElement('div');
    cardTechnology.className = 'card-technology';

    for (var j = 0; j < cardData[i].technology.length; j++) {
        var span = document.createElement('span');
        span.className = cardData[i].technology[j].toLowerCase();
        span.textContent = cardData[i].technology[j];
        cardTechnology.appendChild(span);
    }

    var cardDescription = document.createElement('div');
    cardDescription.className = 'card-description';

    var p = document.createElement('p');
    p.textContent = cardData[i].description;

    cardDescription.appendChild(p);

    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardTechnology);
    cardContent.appendChild(cardDescription);

    card.appendChild(img);
    card.appendChild(cardContent);

    container.appendChild(card);
}