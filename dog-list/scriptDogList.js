const generateDogs = async (destination = 1) => {
    const dogs = await getDogs(destination)
    console.log(dogs);
    displayDogs(dogs)
}

const getDogs = async (page) => {
    console.log(page);
    console.log(typeof(page))
    if(page==1)
    {
        const response = await fetch('./profile/dogs.json');
        const dogs = await response.json();
        return dogs;
    }
    if(page==2)
    {
        const response = await fetch('./profile/dogs2.json');
        const dogs = await response.json();
        return dogs;
    }
    
    
};

const displayDogs = (dogs) => {
    const dogsContainer = document.querySelector(".dogs-container");
    dogsContainer.innerHTML = "";

    const usersHtmlContent = dogs.map((dog, index) => `
        <div class="card">
            <img class="card-image" src="${dog.image}">
            <div class="card-body">
                <h4 class="card-title">Breed:</h4>
                <p class="card-text">${dog.breed}</p>
                <h4 class="card-title">Name:</h4>
                <p class="card-text">${dog.name}</p>
                <div class="card-button">
                    <a href="./profile/?id=${dog.id}"><button class="navyButton">Adopt</button></a>
                </div>
            </div>
            </div>
    `);

    const containerDivs = [];
    for (let i = 0; i < usersHtmlContent.length; i += 4) {
        const containerDiv = document.createElement("div");
        containerDiv.classList.add("row");
        containerDiv.innerHTML = usersHtmlContent.slice(i, i + 4).join("");
        containerDivs.push(containerDiv);
    }

    containerDivs.forEach(containerDiv => {
        dogsContainer.appendChild(containerDiv);
    });
}


const initApp = async () => {
    const paginationLinks = document.querySelectorAll(".pagination .page-link")

    paginationLinks.forEach(link => {
        link.addEventListener("click", async function () {
            const destination = this.dataset.page
            generateDogs(destination)
        })
    })

    generateDogs()
}

initApp()
document.getElementById("mobile-menu-button").addEventListener("click", function () {
    var topnav = document.querySelector(".topnav");
    if (topnav.classList.contains("active")) {
      topnav.classList.remove("active");
    } else {
      topnav.classList.add("active");
    }
  });
