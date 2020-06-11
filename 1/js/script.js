var indicator = true,
    popup = document.querySelector('#ouibounce-modal'),
    close = popup.querySelector('.close-over.close-ex'),
    overlay = popup.querySelector('.underlay');
console.log(overlay)
window.document.addEventListener('mouseleave', function(event){
    if (event.clientY < 0) {
        if (indicator) {
            indicator = false;
            popup.style.display = 'block';
        }
    }
      $('.close-over').on('click', function() {
        $('#ouibounce-modal').hide();
        InWin(a);
      });
    close.addEventListener('click', function(){
        popup.style.display = 'none';
    });

    overlay.addEventListener('click', function(){
        popup.style.display = 'none';
    });

});