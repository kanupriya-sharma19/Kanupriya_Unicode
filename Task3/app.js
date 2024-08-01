const url = "https://se-tasks.vercel.app/events";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });

function appendData(data) {
  let mainContainer = document.getElementById("myData");

  for (let i = 0; i < 3; i++) {
    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.src = `${i}.jpg`;

    let h1 = document.createElement("h1");
    h1.innerHTML = `${data[i].name}<hr>`;

    let venue = document.createElement("h2");
    venue.innerHTML = `Venue: ${data[i].venue}<hr>`;
    venue.classList.add("venue");
    let dt = document.createElement("h3");
    dt.innerHTML = `${new Date(data[i].date).toLocaleDateString()} ${
      data[i].time
    }`;

    let btn = document.createElement("button");
    btn.innerHTML = "Tickets Detail";
    btn.addEventListener("click", () => loadMore(data[i]._id, card));

    card.appendChild(img);
    card.appendChild(h1);
    card.appendChild(venue);
    card.appendChild(dt);
    card.appendChild(btn);
    mainContainer.appendChild(card);
  }
}

function loadMore(eventId, card) {
  const idurl = "https://se-tasks.vercel.app/events/";

  fetch(idurl + eventId)
    .then(function (response) {
      return response.json();
    })
    .then(function (newdata) {
      addMore(newdata, card);
    })
    .catch(function (err) {
      console.log("error: " + err);
    });
}

function addMore(newdata, card) {
  let add = document.createElement("div");
  add.classList.add("additional-content");

  let h2 = document.createElement("h2");
  h2.innerHTML = `${newdata.description}`;

  let price = document.createElement("h2");
  price.innerText = `Price : $${newdata.ticketPrice}`;

  let total = document.createElement("h2");
  total.innerText = `Total Tickets: ${newdata.totalTickets}`;

  let Available = document.createElement("h2");
  Available.innerText = `Total Tickets Available: ${newdata.availableTickets}`;

  let btn = document.createElement("button");
  btn.innerHTML = "Get Your Tickets";

  add.appendChild(h2);
  add.appendChild(price);
  add.appendChild(total);
  add.appendChild(Available);
  add.appendChild(btn);
  card.appendChild(add);
  card.classList.add("expand");
}
