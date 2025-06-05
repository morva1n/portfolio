
const skills = document.querySelector('.technologies__list');



fetch('skills.json')
      .then(response => response.json())
      .then(data => {
        data.forEach(e => {
            skills.insertAdjacentHTML('beforeend', `<div class="techology" style= "box-shadow: 0px 0px 5px 1px black" ><img width="45px" height="45px" src=${e.path} alt=""><p>${e.name}</p></div>`)
        });
      })



