const h2 = document.createElement(`h2`);

const h3 = document.createElement(`h3`)

h2.textContent = `This content added by Javascript`;

h3.textContent = `This was added with append to see where it goeas exactly`

document.querySelector(`body`).append(h3)

document.querySelector(`body`).appendChild(h2)

