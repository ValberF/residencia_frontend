const url =
  "https://newsapi.org/v2/everything?q=science&apiKey=67be9d1df077449ba24c6070e7804af8&language=pt";

const url1 =
  "https://newsapi.org/v2/everything?q=technology&apiKey=67be9d1df077449ba24c6070e7804af8&language=pt";

let containerMenu = document.querySelector(".container-menu");
let containerNews = document.querySelector(".container-news");
let containerServices = document.querySelector(".container-services");
let containerResults = document.querySelector(".container-results");

let news = document.createElement("div");
news.className = "news";

let results = document.createElement("div");
results.className = "results";

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    news.innerHTML = `
        ${data.articles.slice(0, 5).map(
          (elem) => `<h4>${elem.title}</h4>
        <a
          href=${elem.url}
          >${elem.url}</a
        >`
        )}
      `;

    containerNews.appendChild(news);
    console.log(data);
  })
  .catch((error) => {
    console.error("Erro ao obter os dados:", error);
  });

fetch(url1)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    results.innerHTML = `
        ${data.articles.slice(0, 5).map(
          (elem) => `<h4>${elem.title}</h4>
        <a
          href=${elem.url}
          >${elem.url}</a
        >`
        )}
      `;

    containerResults.appendChild(results);
    console.log(data);
  })
  .catch((error) => {
    console.error("Erro ao obter os dados:", error);
  });
