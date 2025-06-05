const projects = document.querySelector('.projects__list');



fetch('projects.json')
      .then(response => response.json())
      .then(data => {
        data.forEach(e => {
            projects.insertAdjacentHTML('beforeend',
                `<div class="project" style= "box-shadow: 0px 0px 5px 1px black" >
                    <div class="project__img" style=""></div>
                    <p>${e.name}</p>
                </div>`)
        });
      })