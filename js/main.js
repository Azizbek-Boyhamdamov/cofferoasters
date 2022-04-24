const elFormGroup = document.querySelector(".form-group-inner");
const elToggleButton = document.querySelector(".form-group-toggler");


  elToggleButton.addEventListener('click', function(){
      elFormGroup.classList.toggle('visually-hidden');
    });
