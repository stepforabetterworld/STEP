function animateCounter(elementId, targetValue, duration, suffix = '') {
    const element = document.getElementById(elementId);
    const startValue = 0;
    const increment = targetValue / (duration / 16); // 60fps
    let currentValue = startValue;

    const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(timer);
        }

        const displayValue = Math.floor(currentValue).toLocaleString();
        element.textContent = displayValue + suffix;
    }, 16);
}

function startAnimation() {
    setTimeout(() => animateCounter('counter1', 668610, 2000), 200);
    setTimeout(() => animateCounter('counter2', 100000, 2500), 400);
    setTimeout(() => animateCounter('counter3', 202, 1500), 600);
    setTimeout(() => animateCounter('counter4', 4323, 2200), 800);
    setTimeout(() => animateCounter('counter5', 29000, 2200), 200);
}

function handleResize() {
    const container = document.querySelector('[style*="display: flex"]');
    const boxes = document.querySelectorAll('[style*="flex: 1"]');

    if (window.innerWidth <= 768) {
        container.style.flexDirection = 'column';
        boxes.forEach(box => {
            box.style.padding = '40px 20px';
            box.style.minWidth = 'auto';
        });
        document.querySelector('h1').style.fontSize = '2.5rem';
        document.querySelectorAll('[id^="counter"]').forEach(counter => {
            counter.style.fontSize = '2.8rem';
        });
    } else if (window.innerWidth <= 1200) {
        container.style.flexDirection = 'row';
        container.style.flexWrap = 'wrap';
        boxes.forEach(box => {
            box.style.flex = '1 1 calc(50% - 0px)';
            box.style.minWidth = '250px';
            box.style.padding = '60px 20px';
        });
    } else {
        container.style.flexDirection = 'row';
        container.style.flexWrap = 'nowrap';
        boxes.forEach(box => {
            box.style.flex = '1';
            box.style.minWidth = '250px';
            box.style.padding = '60px 20px';
        });
        document.querySelector('h1').style.fontSize = '3.5rem';
        document.querySelectorAll('[id^="counter"]').forEach(counter => {
            counter.style.fontSize = '3.5rem';
        });
    }
}

window.addEventListener('load', () => {
    document.getElementById('counter1').textContent = '0';
    document.getElementById('counter2').textContent = '0';
    document.getElementById('counter3').textContent = '0';
    document.getElementById('counter4').textContent = '0';
    document.getElementById('counter5').textContent = '0';
    setTimeout(startAnimation, 1000);
});

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);
