document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const message = document.getElementById('message');

    envelope.addEventListener('click', function () {
        message.classList.toggle('hidden');
        message.style.transform = 'translate(-50%, -50%) scale(1)';
    })

    document.addEventListener('click', function (event) {
        if (!envelope.contains(event.target) && !message.contains(event.target)) {
            message.classList.add('hidden');
            message.style.transform = 'translate(-50%, -50%) scale(0)';
        }
    });
});