function clearElements(arr) {
  for (const id of arr) {
    document.getElementById(id).innerHTML = "";
  }
}

function getValue(id) {
  return parseInt(document.getElementById(id).value);
}

function setHTML(id, content) {
  return document.getElementById(id).innerHTML = content;
}

function setColor(id, color) {
  return document.getElementById(id).style.color = color;
}

function mod(n, p) {
  return ((n % p) + p) % p;
}