const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: src = "assets/img/jimmy.png",        
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam temporibus quisquam ullam illo ea, perferendis beatae eveniet ad pariatur eaque quo dolores,",
    },
    {
        id: 2,
        name: "anna jonson",
        job: "web designer",
        img: src="assets/img/ribeca.png",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam temporibus quisquam ullam illo ea, perferendis beatae eveniet ad pariatur eaque quo dolores,",
    },
    {
        id: 3,
        name: "sara jobes",
        job: "ux designer",
        img: src="assets/img/proffile img.png",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam temporibus quisquam ullam illo ea, perferendis beatae eveniet ad pariatur eaque quo dolores,",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img: src="assets/img/Mask.png",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam temporibus quisquam ullam illo ea, perferendis beatae eveniet ad pariatur eaque quo dolores,",
    },
]



const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");


const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");


//set starting item

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    showPerson();
})

//show person based on item

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

nextBtn.addEventListener("click", function () {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0
    }
    showPerson();
})

prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
})
 