const labels = document.querySelectorAll('.form-group label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((text, index) => `<span class="delay-[${index * 50}ms]">${text}</span>`)
        .join('');
})