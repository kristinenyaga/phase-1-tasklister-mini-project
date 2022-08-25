document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form= document.querySelector('form')
  form.addEventListener('submit',(e) => {
    e.preventDefault()
    
    showTodo(form.querySelector('#new-task-description').value)
    // getDuration(form.querySelector('#duration').value)
    form.reset()
   })

  
});
function showTodo(todo){
  console.log(todo)
  let p=document.createElement('p')
  p.textContent=`${todo}  `
  let button=document.createElement('button')
  button.addEventListener("click", (e)=>{
    e.target.parentNode.remove()
  })
  let div=document.querySelector('#list')
  button.textContent='remove'
  button.style.fontSize='14px'
  button.style.width='70px'
  div.appendChild(p)
  p.appendChild(button)
 

}
