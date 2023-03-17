const tabs = document.querySelector(".tabs");

async function getData() {
  const data = await fetch("./data.json");
  const jsonData = await data.json();
  jsonData.map((el) => {
    const tab = document.createElement("div");
    tab.setAttribute("class", "tab");

    const title = document.createElement("div");
    title.setAttribute("class", "title");
    const img = document.createElement("img");
    img.setAttribute("src", `${el.icon}`);
    title.appendChild(img);
    const titleText = document.createTextNode(`${el.category}`);
    title.appendChild(titleText);

    const score = document.createElement("div");
    score.setAttribute("class", "score");
    const scoreText = document.createTextNode(" / 100");
    const scoreSpan = document.createElement("span");
    const scoreSpanText = document.createTextNode(`${el.score}`);
    scoreSpan.appendChild(scoreSpanText);
    score.appendChild(scoreSpan);
    score.appendChild(scoreText);

    tab.appendChild(title);
    tab.appendChild(score);
    tabs.appendChild(tab);
  });
}

getData();
