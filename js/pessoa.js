document.addEventListener('DOMContentLoaded', () => {
    porcentagem = document.querySelector('#porcentagem')
    let rand = Math.floor(Math.random() * 100)
    let m = rand.toString();
    porcentagem.innerText = m + '%'

  // let selects = document.querySelectorAll("select")
  //
  // for (let select of selects) {
  //   console.log(select.val);
  //   select.addEventListener('click', () => {
  //     alert()
  //   })
  //   $('#ItemId').click(function(){
  //     alert($('#ItemId option:selected').val());
  //   })
  //

})

$(document).ready(function() {
  $('select').formSelect();
});

// $(document).on('change', '.select-dropdown', function() {
//     console.log($(this).val());
// })
//
function avaliar() {
  porcentagem = document.querySelector('#porcentagem')

  let selects = document.querySelectorAll("select")

  let s = 0
  for (let select of selects) {
    s += select.selectedIndex - 1
  }
  s = Math.round((s / 3) * 20)
  let media = s
  // media = Math.round(s, 0),
  //
  let n = media.toString();
  porcentagem.innerText = n + '%'

}

function alterar(cname) {
  // document.querySelector('#'+name).innerText =
}
