document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('main-envelope');
    const message = document.getElementById('message');
    const leftImage = document.getElementById('left-image');
    const rightImage = document.getElementById('right-image');
    const bottomImage = document.getElementById('bottom-image');

    envelope.addEventListener('click', function () {
        message.classList.toggle('hidden');
        message.style.transform = 'translate(-50%, -50%) scale(1)';

        // Mostramos las imágenes con un efecto de delay
        setTimeout(function () {
            leftImage.classList.remove('hidden-image');
            rightImage.classList.remove('hidden-image');
            bottomImage.classList.remove('hidden-image');
            bottomImage.classList.add('visible');
        }, 500);
    })

    document.addEventListener('click', function (event) {
        if (!envelope.contains(event.target) && !message.contains(event.target)) {
            message.classList.add('hidden');
            message.style.transform = 'translate(-50%, -50%) scale(0)';

            // Quitamos a los finics
            leftImage.classList.add('hidden-image');
            rightImage.classList.add('hidden-image');
            bottomImage.classList.add('hidden-image')
        }
    });
});