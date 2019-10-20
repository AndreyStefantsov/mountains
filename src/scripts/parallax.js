const parallaxTop = document.querySelector('.parallax_top');
const layersTop = [].slice.call(parallaxTop.children);

const parallaxDown = document.querySelector('.parallax_down');
const layersDown = [].slice.call(parallaxDown.children);

window.addEventListener('scroll', ()=> {
    let offset = window.pageYOffset;
    let downOffset = parallaxDown.getBoundingClientRect().top;
    moveLayers(offset, layersTop, 5)
    moveLayers(-downOffset, layersDown, 10)

})

function moveLayers(offset, arr, catalyst) {
    arr.forEach(layer => {
        let speed = layer.dataset.speed;
        let posY = offset * speed / catalyst;
        layer.style.transform = `translateY(-${posY}%)`;
    });
}