/*global console, window, document, select*/

var students = [{
    name: "Anais Araya",
    prom: "4° Promoción - Chile",
    path: "assets/images/4-chile/anais-araya.jpg"
}, {
    name: "Andrea Miranda",
    prom: "4° Promoción - Chile",
    path: "assets/images/4-chile/andrea-miranda.jpg"
}, {
    name: "Berenisse Ríos",
    prom: "4° Promoción - Chile",
    path: "assets/images/4-chile/berenisse-ríos.jpg"
}, {
    name: "Caterina Da Silva",
    prom: "4° Promoción - Chile",
    path: "assets/images/4-chile/caterina-da-silva.jpg"
}, {
    name: "Daniela Sanchez",
    prom: "4° Promoción - Chile",
    path: "assets/images/4-chile/daniela-sanchez.jpg"
}, {
    name: "Francisca Ojeda",
    prom: "4° Promoción - Chile",
    path: "assets/images/4-chile/francisca-ojeda.jpg"
}, {
    name: "Katerina Sandoval",
    prom: "4° Promoción - Chile",
    path: "assets/images/4-chile/katerine-sandoval.jpg"
}, {
    name: "Andrea Cabrera",
    prom: "5° Promoción | Lima - Perú",
    path: "assets/images/5-lima/andrea-cabrera.jpg"
}, {
    name: "Ariadna-izaguirre",
    prom: "5° Promoción | Lima - Perú",
    path: "assets/images/5-lima/ariadna-izaguirre.jpg"
}, {
    name: "Carito Juarez",
    prom: "5° Promoción | Lima - Perú",
    path: "assets/images/5-lima/carito-juarez.jpg"
}, {
    name: "Cristy Castro",
    prom: "5° Promoción | Lima - Perú",
    path: "assets/images/5-lima/cristy-castro.jpg"
}, {
    name: "Karol Orrillo",
    prom: "5° Promoción | Lima - Perú",
    path: "assets/images/5-lima/karol-orrillo.jpg"
}, {
    name: "Paola Ortiz",
    prom: "5° Promoción | Lima - Perú",
    path: "assets/images/5-lima/paola-ortiz.jpg"
}, {
    name: "Teresa Lara",
    prom: "5° Promoción | Lima - Perú",
    path: "assets/images/5-lima/teresa-lara.jpg"
}, {
    name: "Arantza Burga",
    prom: "6° Promoción | Lima - Perú",
    path: "assets/images/6-lima/arantza-burga.jpg"
}, {
    name: "Daguiana Revoredo",
    prom: "6° Promoción | Lima - Perú",
    path: "assets/images/6-lima/daguiana-revoredo.jpg"
}, {
    name: "Elizabeth Condori",
    prom: "6° Promoción | Lima - Perú",
    path: "assets/images/6-lima/elizabeth-condori.jpg"
}, {
    name: "Grecia Rayme",
    prom: "6° Promoción | Lima - Perú",
    path: "assets/images/6-lima/grecia-rayme.jpg"
}, {
    name: "Janine Vega",
    prom: "6° Promoción | Lima - Perú",
    path: "assets/images/6-lima/janine-vega.jpg"
}, {
    name: "Michelle More",
    prom: "6° Promoción | Lima - Perú",
    path: "assets/images/6-lima/michelle-more.jpg"
}, {
    name: "Mishel Velasquez",
    prom: "6° Promoción | Lima - Perú",
    path: "assets/images/6-lima/mishel-velasquez.jpg"
}, {
    name: "Rosario Felix",
    prom: "6° Promoción | Lima - Perú",
    path: "assets/images/6-lima/rosario-felix.jpg"
}];

function allImagesDisplay(path, name, prom) {
    'use strict';
    var display = document.getElementById('coders-display'),
        parent = document.createElement("div"),
        img = document.createElement("img"),
        nameNode = document.createTextNode(name),
        promNode = document.createTextNode(prom),
        nameTitle = document.createElement("h2"),
        promSpan = document.createElement("span");

    if (prom === "4° Promoción - Chile") {
        parent.classList.add("chile-4");
    } else if (prom === "5° Promoción | Lima - Perú") {
        parent.classList.add("lima-5");
    } else if (prom === "6° Promoción | Lima - Perú") {
        parent.classList.add("lima-6");
    }

    img.setAttribute("src", path);
    parent.classList.add("gallery-item");
    parent.classList.add("show");
    nameTitle.appendChild(nameNode);
    promSpan.appendChild(promNode);
    parent.appendChild(img);
    parent.appendChild(nameTitle);
    parent.appendChild(promSpan);
    display.appendChild(parent);
}

var allPhotos = students.map(function (e) {
    'use strict';
    return e.path;
});

var allNames = students.map(function (e) {
    'use strict';
    return e.name;
});

var allProm = students.map(function (e) {
    'use strict';
    return e.prom;
});

var i;

for (i = 0; i < allPhotos.length; i += 1) {
    allImagesDisplay(allPhotos[i], allNames[i], allProm[i]);
}

function display(prom, clss) {
    'use strict';
    var i;

    for (i = 0; i < prom.length; i += 1) {
        prom[i].setAttribute('class', clss);
    }
}

var chileprom = document.getElementsByClassName('chile-4'),
    limFifth = document.getElementsByClassName('lima-5'),
    limSixth = document.getElementsByClassName('lima-6');

select.onchange = function () {
    'use strict';
    if (select.value === "1") {
        display(chileprom, 'chile-4 show');
        display(limFifth, 'lima-5 hide');
        display(limSixth, 'lima-6 hide');
    } else if (select.value === "2") {
        display(chileprom, 'chile-4 hide');
        display(limFifth, 'lima-5 show');
        display(limSixth, 'lima-6 gallery-item hide');
    } else if (select.value === "3") {
        display(chileprom, 'chile-4 hide');
        display(limFifth, 'lima-5 hide');
        display(limSixth, 'lima-6 show');
    }
};