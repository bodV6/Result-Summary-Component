import data from "./data.json";
import "./style.css";

function renderData(data) {
  const container = document.getElementById("summary-details");

  data.forEach((item) => {
    if (item.category === "Reaction") {
      //   style.backgroundColor = red;
    }

    const div = document.createElement("div");
    div.classList.add("indicators");

    const img = document.createElement("img");
    img.setAttribute("src", item.icon);
    div.appendChild(img);

    const h4 = document.createElement("h4");
    h4.setAttribute("style", "red")
    const h4Text = document.createTextNode(item.category);
    //   h4Text.setAttribute("style", "red");
    h4.appendChild(h4Text);
    div.appendChild(h4);

    const p = document.createElement("p");
    const pText = document.createTextNode(`${item.score} / 100`);
    p.appendChild(pText);
    div.appendChild(p);

    container.appendChild(div);
  });
}

renderData(data);
