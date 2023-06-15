const cars = document.querySelector('.cars')

const apiResult = [
    {
      title: "Chevrolet Camaro",
      engine: "300",
      year: "1966",
      images: "./img/chevrolet.jpeg",
    },
    {
      title: "Ford Mustang Boss 429",
      engine: "375",
      year: "1969",
      images: "./img/ford.jpg",
    },
    {
      title: "Mercedes-Benz W198",
      engine: "240",
      year: "1960",
      images: "./img/mercedes.jpg",
    },
  ];

const res = apiResult.map( elem => {
    return `
    <div class="car">
    <img  src="${elem.images}" alt="">   
    <div class="car__name">${elem.title}</div> 
    <div class="car__year">${elem.year} year</div>
    <div class="car__eng">${elem.engine} hp</div>
    </div>
    `
})
cars.innerHTML = res;


