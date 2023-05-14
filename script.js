import data from "./data.json";

function renderData(data) {
  const container = document.getElementById("summary-details");
  const html = data
    .map(
      (item) => `
      <div class="item">
        <img src="${item.icon}"/>
        <h4>${item.category}</h4>
        <p>${item.score} / 100</p>
      </div>
    `
    )
    .join("");
  container.innerHTML = html;
}

renderData(data);


