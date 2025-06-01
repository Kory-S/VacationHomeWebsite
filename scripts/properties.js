const showAmenities = document.getElementsByClassName('show_all');

const toggleAmenities = document.getElementById('more_details');

showAmenities[0].addEventListener ('click', () => {
    toggleAmenities.classList.toggle('show_hidden');
    
});


window.onclick = (event) => {
    if(!event.target.matches('.show_all'))
        if(toggleAmenities.classList.contains('show_hidden')){
            toggleAmenities.classList.remove('show_hidden');
        }
}