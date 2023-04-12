// const numbers = [1, 2, 3, 4, 5];

// const filtered = numbers.filter((n) => n >= 0);
// const items = filtered.map((n) => "<li>" + n + "<li>");
// console.log(items);

const mainBanner = document.getElementById("main");
console.log(mainBanner);

const card = ['<div class="card">
<img
  src="https://static.tvmaze.com/uploads/images/medium_portrait/424/1061886.jpg"
  class="card-img-top"
  alt="..."
/>
<div class="card-body">
  <h5 class="card-title">FBI</h5>
  <p class="card-text">Obligation</p>
</div>
</div>'];

mainBanner.push(card);
