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
    create_one(checks[i].text, checks[i].checked)
  }
}


function check(ev){
  let text = ev.path[0].innerText
  // console.log(text);
  for (let i = 0; i < checks.length; i++){

    if (checks[i].text == text){
      checks[i].checked = !(checks[i].checked)
      localStorage.setItem('checks', JSON.stringify(checks))
      break;
    }

    list_checks()
  }
}



async function create_one(text, checked){
  let div = document.createElement('div');
  div.addEventListener('click', check)

  let label = document.createElement("label");

  let input = document.createElement("input");
  input.type = 'checkbox'
  input.class = 'filled-in'


  let span = document.createElement("span");
  span.innerHTML = text


  if (checked){
    input.checked = 'checked'
  }
  else {
    input.checked = null
  }

  let i_el = document.createElement("a");
  i_el.innerHTML = ' X'
  i_el.href = '#'
  i_el.addEventListener('click', deletar_check, true)
  // i_el.onclick = 'deletar_check(this)'
  // <i class="material-icons tiny">close</i>

  label.appendChild(input)
  label.appendChild(span)

  div.appendChild(label)
  div.appendChild(i_el)

  document.querySelector('.checks_container').appendChild(div)
}



function deletar_check(el) {
  // console.log();
  // // console.log(el.path[0].parentNode.lastElementChild.innerText);
  let text = el.path[0].parentElement.firstElementChild.children[1].innerHTML
  for (let index = 0; index < checks.length; index++){
    if (text == checks[index].text){
      checks.splice(index,1)
      break
    }
  }
  localStorage.setItem('checks', JSON.stringify(checks))
  list_checks()
}
