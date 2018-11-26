var checks;
document.addEventListener('DOMContentLoaded', (ev) => {
  checks = localStorage.getItem('checks')

  if (checks !== null){
    checks = JSON.parse(checks)
    if (checks == 0){
      open_form(document.querySelector('#plus-sign'))
    }
    else{
      list_checks()
    }
  }

  else{
    // localStorage.setItem('checks', '[]');
    checks = []
    open_form(document.querySelector('#plus-sign'))
  }

  document.querySelector('form').addEventListener('submit', (e) => {
    // const formData = new FormData(e.target);
    send_form()
    // Now you can use formData.get('foo'), for example.
    e.preventDefault()// if you want to stop normal form .submission
  });

})

function open_form(el) {
  let form = document.querySelector('form')

  if (form.style.display==='none' || form.style.display==0){
    form.style.display='inherit'
    el.innerHTML = 'remove_circle_outline'
  }

  else if (form.style.display='inherit'){
    form.style.display='none'
    el.innerHTML = 'add_circle_outline'
  }
}

function close_form(el){
  let form = document.querySelector('#new_check')
  form.style.display='none'
  // form.preventDefault()
  form.reset()
  el.parentNode.parentNode.firstElementChild.innerHTML = 'add_circle_outline'
}

function send_form(){
  let form = document.querySelector('#new_check')
  create_check(form)
  form.reset()
  list_checks()
}


function create_check(form) {
  let text = document.getElementById("first_name").value;

  let obj = {text: text, checked: false}

  add_cond = true

  for (let object of checks){
    if (object.text == obj.text){
      add_cond = false
    }
  }
  if (add_cond){
  checks.push(obj)
  localStorage.setItem('checks', JSON.stringify(checks))
  // console.log(localStorage.getItem('checks'))
}}


function list_checks() {
  let container = document.querySelector('.checks_container')
  container.innerHTML = ''

  for (let i = checks.length - 1; i >= 0; i--){
    let div = document.createElement("div");

    let input = document.createElement("input");
    input.type = 'checkbox'
    input.id = 'filled-in-box'
    input.class = 'filled-in'
    div.onclick = 'check(this)'

    let span = document.createElement("span");
    let label = document.createElement("label");
    label.for='filled-in-box'
    label.style='font-size: 1.4rem'
    label.innerHTML = checks[i].text

    if (checks[i].checked){
      input.checked = 'checked'
    }

    span.appendChild(label)
    div.appendChild(input)
    div.appendChild(span)

    container.appendChild(div)
  }
}


function check(el){

  let text = el.children[1].innerHTML
  console.log(text);
  for (let i=0;i<checks.length;i++){
    if (checks[i].text==text){
      checks[i].checked = !(checks[i].checked)
      localStorage.setItem('checks', JSON.stringify(checks))
      break;
    }
  }
}
