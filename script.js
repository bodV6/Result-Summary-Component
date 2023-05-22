// import data from "./data.json";
// import "./style.css";




function renderData() {

  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {

      const container = document.getElementById("summary-details");

      data.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("indicators");

        const img = document.createElement("img");
        img.setAttribute("src", item.icon);
        div.appendChild(img);

        const h4 = document.createElement("h4");
        const h4Text = document.createTextNode(item.category);
        h4.appendChild(h4Text);
        div.appendChild(h4);

        const p = document.createElement("p");
        p.innerHTML = `<span>${item.score}</span> / 100`;
        div.appendChild(p);

        item == data[0] && (div.setAttribute("style", "background-color:hsl(0, 100%, 96%)"),
          (h4.style.color = "var(--Light-red)"));
    
        item == data[1] && (div.setAttribute("style", "background-color:hsl(39, 100%, 96%)"),
          (h4.style.color = "hsl(39, 100%, 56%)"));
    
        item == data[2] && (div.setAttribute("style", "background-color:hsl(166, 100%, 96%)"),
          (h4.style.color = "hsl(166, 100%, 37%)"));
    
        item == data[3] && (div.setAttribute("style", "background-color:hsl(234, 85%, 96%);"),
          (h4.style.color = "hsl(234, 85%, 45%)"));
    
    
        container.appendChild(div);
      }
  )
    })
  }
renderData();

