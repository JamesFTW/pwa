
fetch('https://api.github.com/users/google/repos').then((response) => {
  response.json().then((json) => {
    console.log(json)
  })
})
