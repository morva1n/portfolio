
const skills = document.querySelector('.technologies');



fetch('skills.json')
      .then(response => response.json())
      .then(data => {
        data.forEach(e => {
            skills.insertAdjacentHTML('beforeend', `<div class="techology" style= "border: 2px solid ${e.color}; box-shadow: 0px 0px 8px 1px ${e.color};" ><img width="45px" height="45px" src=${e.path} alt=""><p>${e.name}</p></div>`)
        });
      })



