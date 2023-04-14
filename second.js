// const numbers = [1, 2, 3, 4, 5];

// const filtered = numbers.filter((n) => n >= 0);
// const items = filtered.map((n) => "<li>" + n + "<li>");
// console.log(items);

// const mainBanner = document.getElementById("main");
// console.log(mainBanner);

// const card = [ {'<div class="card">
// <img
//   src="https://static.tvmaze.com/uploads/images/medium_portrait/424/1061886.jpg"
//   class="card-img-top"
//   alt="..."
// />
// <div class="card-body">
//   <h5 class="card-title">FBI</h5>
//   <p class="card-text">Obligation</p>
// </div>
// </div>'}];

// mainBanner.push(card);

const movies = [
  {
    imgUrl:
      "https://static.tvmaze.com/uploads/images/medium_portrait/456/1140585.jpg",
    title: "This Is Mark Rober",
    description: "Elephant Toothpaste ",
  },
  {
    imgUrl:
      "https://static.tvmaze.com/uploads/images/medium_portrait/424/1061065.jpg",
    title: "Grey's Anatomy",
    description: "Elephant Toothpaste",
  },
  {
    imgUrl:
      "https://static.tvmaze.com/uploads/images/medium_portrait/424/1060718.jpg",
    title: "Young Sheldon",
    description: "A German Folk Song and an Actual Adult",
  },
  {
    imgUrl:
      "https://static.tvmaze.com/uploads/images/medium_portrait/424/1061060.jpg",
    title: "Station 19",
    description: "Get It All Out",
  },
  {
    imgUrl:
      "https://static.tvmaze.com/uploads/images/medium_portrait/427/1068494.jpg",
    title: "CSI: Vegas",
    description: "Fractured",
  },
  {
    imgUrl:
      "https://static.tvmaze.com/uploads/images/medium_portrait/422/1055236.jpg",
    title: "Ghosts",
    description: "Ghost Father of the Bride",
  },
  {
    imgUrl:
      "https://static.tvmaze.com/uploads/images/medium_portrait/456/1140582.jpg",
    title: "Single Drunk Female",
    description: "Promotion",
  },
  {
    imgUrl:
      "https://static.tvmaze.com/uploads/images/medium_portrait/455/1139659.jpg",
    title: "'Til Death Do Us Part Kourtney & Travis",
    description: "Til Death Do Us Part Kourtney & Travis",
  },
  {
    imgUrl:
      "https://static.tvmaze.com/uploads/images/medium_portrait/456/1140584.jpg",
    title: "Headliners with Rachel Nichols",
    description: "TBD",
  },
  {
    imgUrl:
      "https://static.tvmaze.com/uploads/images/medium_portrait/441/1104117.jpg",
    title: "The Best of All the Smoke with Matt Barnes and Stephen Jackson",
    description: "Magic Johnson",
  },
];
const kob = "This Is Mark Rober";
const find = movies.find(function (search) {
  return search.title === kob;
});
console.log(find);
