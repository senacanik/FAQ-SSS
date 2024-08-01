let accordionBtn = document.querySelectorAll('.accordion-btn');

accordionBtn.forEach(btn => {
    btn.addEventListener('click' , function(){
        this.classList.toggle('active');
        let accordionDesc = this.nextElementSibling;
        let minusIcon = this.querySelector('.minus-icon');
        let plusIcon = this.querySelector('.plus-icon')

        if(accordionDesc.style.maxHeight)
        {
           accordionDesc.style.maxHeight = null;
           minusIcon.style.display = "none";
           plusIcon.style.display = "block";
        }
        else{
            accordionDesc.style.maxHeight = accordionDesc.scrollHeight + "px";
            minusIcon.style.display = "block";
            plusIcon.style.display = "none";
        }
    });
})
   

    
