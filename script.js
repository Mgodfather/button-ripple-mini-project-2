const btn = document.querySelector('.btn')

btn.addEventListener('mouseover', (e) => {
    const x = e.clientX - btn.offsetLeft
    const y = e.clientY - btn.offsetTop

    btn.style.setProperty('--posX', `${x}px`)
    btn.style.setProperty('--posY', `${y}px`)
    
})
