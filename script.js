let h1 = document.createElement("h1");

let div = document.createElement("div");
div.className = "main";
div.classList.add("d-flex", "align-items-center", "justify-content-around");
div.style.backgroundColor = "#51656B";
div.append(h1);

h1.className = "first_tag";
h1.innerHTML = "LOGO";
h1.style.cursor="pointer";

let body = document.querySelector("body");
body.append(div);

body.style.backgroundColor = "black";

h1.style.padding = "10px";
h1.style.color = "white";

let ul = document.createElement("ul");
div.append(ul);
ul.className = "list";
ul.classList.add("d-flex", "gap-5", "mb-0");

let links = ["home", "contact", "feedback", "FAQ'S", "LogIn"];

for (let i = 0; i < links.length; i++) {
  let li = document.createElement("li");
  li.className = "sub_list";
  li.classList.add("list-style-type-none");
  let btn = document.createElement("a");
  btn.className = "button";
  btn.classList.add("text-decoration-none");
  btn.style.color="white";
  ul.append(li);
  li.append(btn);
  btn.href = links[i];
  btn.append(links[i]);
  li.style.fontSize = "26px";
  li.style.listStyleType = "none";

  li.addEventListener("mouseover", () => {
    li.firstElementChild.style.color = "black";
  });
  btn.addEventListener("mouseout", () => {
    li.firstElementChild.style.color = "white";
  });
}

let div2 = document.createElement("div");
div2.className = "sub_div";
div2.style.height = "calc(100vh - 76px)";
div2.classList.add("d-flex", "align-items-center", "justify-content-center");

let h2 = document.createElement("h2");
h2.className = "heading";
h2.classList.add("text-white")
h2.innerText = "Harish Joshi";

body.append(div2);

div2.append(h2);
