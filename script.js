//For Sell and Rent condition
document.addEventListener('DOMContentLoaded', function () {
    var statusElements = document.querySelectorAll('.status');

    statusElements.forEach(function (element) {
        if (element.textContent.toLowerCase() === 'sell') {
            element.style.backgroundColor = 'red';
        } else if (element.textContent.toLowerCase() === 'rent') {
            element.style.backgroundColor = 'green';
        }
    });
});


//for navigation slide in responsive
$('#menu-btn').click(function(){
    $('nav .navigation ul').addClass('active')
});
$('#menu-close').click(function(){
    $('nav .navigation ul').removeClass('active')
});
