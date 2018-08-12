
fetch('/template.html').then((response) => {
  return response.text()
}).then((html) => {
  document.getElementById('body').innerHTML = html
})
