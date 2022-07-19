document.addEventListener("DOMContentLoaded",function(e){
  let button = document.querySelector("#enter")
  let newname = document.querySelector("#newName")
  let name = document.querySelector("#namehere")

  newname.addEventListener("click",function(e){
    newname.textContent = "asdfads"
  })
  button.addEventListener("click",function(e){
    name.textContent = newname.value
  })

})