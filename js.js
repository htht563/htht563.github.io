(function() {
    const header = document.querySelector('.header');
    if (header) {
        let headerHideTimer = null;
        header.addEventListener('mousemove', (e) => {
            const rect = header.getBoundingClientRect();
            const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
            const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
            header.style.setProperty('--mx', xPercent + '%');
            header.style.setProperty('--my', yPercent + '%');
            // 增加光强并延长可见时间，使光斑更明显
            header.style.setProperty('--glow', '0.95');
            if (headerHideTimer) clearTimeout(headerHideTimer);
            headerHideTimer = setTimeout(() => header.style.setProperty('--glow', '0'), 1000);
        });

        header.addEventListener('mouseleave', () => {
            if (headerHideTimer) clearTimeout(headerHideTimer);
            header.style.setProperty('--glow', '0');
        });
    }
})();