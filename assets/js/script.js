const d = document,
    c = console.log,
    close = d.getElementById('close'),
    links = d.querySelectorAll('.list a');

const animateFadeOutUp = e => {

    e.preventDefault();

    let container = d.getElementById('container');

    if(container != null) {
        
        // Eliminar clases y agregarlas nuevamente para que haga la animación
    
        container.classList.remove("animated", "fadeInDown");
    
        container.classList.add("animated", "fadeOutUp");
    
        setTimeout(() => {
            location.href = e.target.href;
        }, 600);
    }

}

if (close != null) {
    close.addEventListener('click', e => {
       animateFadeOutUp(e);
    });
}

if (links != null) {

    links.forEach(link => {
        link.addEventListener('click', e => {
            animateFadeOutUp(e);
        });
    });


}
