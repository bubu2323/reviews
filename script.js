const reviews = [
  {
    id: 1,
    name: "Susan Smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// dom elements
let b_left = document.querySelector("#left");
let b_right = document.querySelector("#right");
let reviewer_name = document.querySelector("#reviewer-name");
let description = document.querySelector("#description");
let job = document.querySelector("#job");
let img_rew = document.querySelector(".img_rew");

let counter = 0;
//on windows load random review
window.addEventListener('DOMContentLoaded', randomReview);



b_right.addEventListener("click", () => {
  counter++;// incrementa
  if (counter > reviews.length - 1) counter = 0; //se contatore e maggiore di 3 , counter = 0
  changeData(); // mostra utenti

});

b_left.addEventListener("click", () => {
  counter--;// incrementa
  if (counter > reviews.length - 1 || counter < 0) counter = 0; 
  changeData(); 
});

function changeData() {
  //img
  let reviewer = reviews[counter];
  img_rew.src = reviewer.img;
  //job
  job.innerText = reviewer.job.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
  //name
  reviewer_name.innerText = reviewer.name.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
  //description
  description.innerText = reviewer.text;
}

function randomReview() {
  counter = Math.floor(Math.random() * reviews.length);
  changeData();
}

document.getElementById("random_rw").addEventListener("click", randomReview);


