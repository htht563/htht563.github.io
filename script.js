// FPS 显示
let fps = 0;
let lastTime = performance.now();
let frameCount = 0;

function updateFPS() {
    frameCount++;
    const now = performance.now();
    if (now - lastTime >= 1000) {
        fps = frameCount;
        frameCount = 0;
        lastTime = now;
        document.querySelector('.fps').textContent = 'FPS: ' + fps;
    }
    requestAnimationFrame(updateFPS);
}

updateFPS();

// 获取按钮元素
const button = document.querySelector('.button.button5');

// 创建图片元素
const img = document.createElement('img');
img.src = './whiteqi.png';
img.alt = '为什么图片没了！是不是你吃了！';
img.style.width = '200px';
img.style.height = 'auto';
img.style.display = 'none'; // 初始隐藏

// 将图片添加到页面（可以添加到body或其他容器）
document.body.appendChild(button);
document.body.appendChild(img);

// 点击按钮显示图片
button.addEventListener('click', function() {
    img.style.display = 'block';
});
// 点击图片隐藏图片
img.addEventListener('click', function() {
    img.style.display = 'none';
});

// 获取 button6 按钮元素
const button6 = document.querySelector('.button.button6');

// 创建文字元素
const text = document.createElement('div');
text.textContent = '当当！';
text.style.display = 'none';

// 创建图片元素
const img2 = document.createElement('img');
img2.src = './mc.png';
img2.alt = '当当！';
img2.style.width = '200px';
img2.style.height = 'auto';
img2.style.display = 'none';

// 将元素添加到页面
document.body.appendChild(button6);
document.body.appendChild(text);
document.body.appendChild(img2);

// 点击按钮显示文字和图片
button6.addEventListener('click', function() {
    text.style.display = 'block';
    img2.style.display = 'block';
});

// 点击图片隐藏文字和图片
img2.addEventListener('click', function() {
    text.style.display = 'none';
    img2.style.display = 'none';
});

// 获取 button7 按钮元素
const button7 = document.querySelector('.button.button7');

// 创建文字元素
const text2 = document.createElement('div');
text2.textContent = '但是没有图片，因为我没图了';
text2.style.display = 'none';

// 将元素添加到页面
document.body.appendChild(button7);
document.body.appendChild(text2);

// 点击按钮显示文字
button7.addEventListener('click', function() {
    text2.style.display = 'block';
});

// 点击文字隐藏文字
text2.addEventListener('click', function() {
    text2.style.display = 'none';
});

/*

// 获取 button8 按钮元素
const button8 = document.querySelector('.button.button8');

// 点击按钮打开B站主页
button8.addEventListener('click', function() {
    window.open('https://space.bilibili.com/494280519', '_blank');
});

*/

// 获取 button11 按钮元素
const button11 = document.querySelector('.button.button11');

// 点击按钮打开GitHub主页
button11.addEventListener('click', function() {
    window.open('https://github.com/htht563', '_blank');
});


// 获取 button9 按钮元素
const button9 = document.querySelector('.button.button9');

// 创建 iframe 元素
const iframe = document.createElement('iframe');
iframe.src = 'https://player.bilibili.com/player.html?isOutside=true&aid=116593967235567&bvid=BV1W8LF62EMj&cid=38418517476&p=1';
iframe.scrolling = 'no';
iframe.border = '0';
iframe.frameborder = 'no';
iframe.framespacing = '0';
iframe.allowfullscreen = 'true';
iframe.style.width = '560px';
iframe.style.height = '315px';
iframe.style.display = 'none';

// 添加到页面
document.body.appendChild(iframe);

// 点击按钮切换显示/隐藏 iframe
button9.addEventListener('click', function() {
    if (iframe.style.display === 'none') {
        iframe.style.display = 'block';
    } else {
        iframe.style.display = 'none';
    }
});

// 获取 button10 按钮元素
const button10 = document.querySelector('.button.button10');

// 创建文字元素
const text3 = document.createElement('div');
text3.textContent = '其实没有哈哈哈';
text3.style.display = 'none';

//创建真故事元素
const text4 = document.createElement('div');
text4.textContent = '这是我仇人的故事：他是一个非常讨厌的人，从一年级开始就和他朋友一直欺负我，后来停了一段时间。五年级我们似乎又成为了好朋友，像是以前没有发生过一样，在2025年2月28日，老师发了零食，他有1个我有3个，在我写作业时他吃了自己的，又吃了我的，我发现我的零食没了，便问他：“你吃了我的零食吗？”他回答：“没有啊，我吃了自己的啊。”我又问：“那你吃了我的零食吗？”他回答：“没有啊，我吃了他（别人）的啊。”我当时就傻了，后来我指了指地上的垃圾，他为了不被揭穿，用脚踩住垃圾，我们因为这点小事再也不和好了。';
text4.style.display = 'none';

//还有后续
const text5 = document.createElement('div');
text5.textContent = '（后续）后来我又听说他在班里欺负其他同学，真是太可恶了！但是我觉得是我不对，应该早点揭穿他的谎言，这样他就不会继续欺负其他同学了。';
text5.style.display = 'none';

// 将元素添加到页面
document.body.appendChild(button10);
document.body.appendChild(text3);
document.body.appendChild(text4);
document.body.appendChild(text5);

// 点击按钮显示文字
button10.addEventListener('click', function() {
    text3.style.display = 'block';
});

// 点击文字隐藏文字，显示真故事
text3.addEventListener('click', function() {
    text3.style.display = 'none';
    text4.style.display = 'block';
});

//点击真故事，显示后续
text4.addEventListener('click', function() {
    text4.style.display = 'none';
    text5.style.display = 'block';
});

//点击后续，隐藏后续
text5.addEventListener('click', function() {
    text5.style.display = 'none';
});

// 获取颜色选择器和文本元素
const colorPicker = document.querySelector('.color');
const hexText = document.querySelector('.hex');

// 初始化显示当前颜色
colorPicker.style.boxShadow = `0 0 30px ${colorPicker.value}`;
colorPicker.style.backgroundColor = colorPicker.value;
hexText.textContent = colorPicker.value;
hexText.style.color = colorPicker.value;
hexText.style.textShadow = `0 0 5px ${colorPicker.value}`;

// 监听颜色变化
colorPicker.addEventListener('input', function() {
    colorPicker.style.backgroundColor = colorPicker.value;
    colorPicker.style.boxShadow = `0 0 30px ${colorPicker.value}`;
    hexText.textContent = colorPicker.value;
    hexText.style.color = colorPicker.value;
    hexText.style.textShadow = `0 0 5px ${colorPicker.value}`;
});

// 复制 hex 到剪切板
function copyHex() {
    navigator.clipboard.writeText(hexText.textContent).then(function() {
        alert('颜色值已复制到剪切板！');
    }).catch(function(err) {
        console.error('复制失败: ', err);
    });
}

// 获取滑块和文本元素
const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.slider-value');

// 初始化显示当前滑块值
sliderValue.textContent = slider.value + '%';

// 监听滑块变化
slider.addEventListener('input', function() {
    sliderValue.textContent = slider.value + '%';
});

// 获取 emoji 元素
const emojiElement = document.querySelector('.emoji');

// emoji 列表
const emojis = ['😀', '😂', '😍', '🤔', '😎', '🥳', '😴', '🤖', '🌟', '🍕', '🚀', '🎉', '❤️', '👍', '👀'];

// 创建音频对象
const coinAudio = new Audio('./Coin.wav');

// 点击 emoji 随机更换并播放音频
emojiElement.addEventListener('click', function() {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    emojiElement.textContent = randomEmoji;
    coinAudio.play();
});

// 获取 boom 元素
const boomElement = document.querySelector('.boom');

// 烟花颜色
const fireworkColors = ['#ff0000', '#ff8000', '#ffff00', '#00ff00', '#0000ff', '#8000ff', '#a0522d', '#000000', '#ffffff'];

// 点击放烟花
boomElement.addEventListener('click', function() {
    for (let i = 0; i < 20; i++) {
        createFirework();
    }
});
/*
function createFirework() {
    const firework = document.createElement('div');
    firework.style.position = 'fixed';
    firework.style.width = '10px';
    firework.style.height = '10px';
    firework.style.borderRadius = '50%';
    firework.style.backgroundColor = fireworkColors[Math.floor(Math.random() * fireworkColors.length)];
    firework.style.zIndex = '9999';
    document.body.appendChild(firework);

    let left = Math.random() < 0.5 ? -20 : window.innerWidth + 20;
    let top = 0;
    const targetLeft = Math.random() * window.innerWidth;

    const interval = setInterval(() => {
        // 移动 left 向 targetLeft
        if (left < targetLeft) left += 2;
        else if (left > targetLeft) left -= 2;
        // 增加 top
        top += 3;
        firework.style.left = left + 'px';
        firework.style.top = top + 'px';
        if (top > window.innerHeight) {
            clearInterval(interval);
            document.body.removeChild(firework);
        }
    }, 16); // 约60fps
}
*/
//以上是旧版
//以下是新版，增加了爆炸效果

function createFirework() {
    const firework = document.createElement('div');
    firework.style.position = 'fixed';
    firework.style.width = '10px';
    firework.style.height = '10px';
    firework.style.borderRadius = '50%';
    firework.style.backgroundColor = fireworkColors[Math.floor(Math.random() * fireworkColors.length)];
    firework.style.zIndex = '9999';
    document.body.appendChild(firework);

    const fromLeft = Math.random() < 0.5;
    let left = fromLeft ? 30 : window.innerWidth - 40;
    let top = window.innerHeight - 30;
    const targetLeft = Math.random() * (window.innerWidth * 0.6) + window.innerWidth * 0.2;
    const apexTop = Math.random() * (window.innerHeight * 0.3) + window.innerHeight * 0.15;
    const speedX = fromLeft ? 3 : -3;
    const speedY = -4;

    firework.style.left = left + 'px';
    firework.style.top = top + 'px';

    const interval = setInterval(() => {
        left += speedX;
        top += speedY;
        firework.style.left = left + 'px';
        firework.style.top = top + 'px';

        if ((fromLeft && left >= targetLeft) || (!fromLeft && left <= targetLeft) || top <= apexTop) {
            clearInterval(interval);
            explodeFirework(left, top, firework.style.backgroundColor, firework);
        }
    }, 16);
}

function explodeFirework(x, y, color, firework) {
    const particleCount = 12;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '8px';
        particle.style.height = '8px';
        particle.style.borderRadius = '50%';
        particle.style.backgroundColor = color;
        particle.style.zIndex = '9999';
        particle.style.opacity = '1';
        document.body.appendChild(particle);

        const angle = (Math.PI * 2 / particleCount) * i;
        const speed = Math.random() * 2 + 2;
        particles.push({ element: particle, angle, speed, distance: 0 });
    }

    const explodeInterval = setInterval(() => {
        particles.forEach((particleData) => {
            particleData.distance += particleData.speed;
            const px = x + Math.cos(particleData.angle) * particleData.distance;
            const py = y + Math.sin(particleData.angle) * particleData.distance + particleData.distance * 0.2;
            particleData.element.style.left = px + 'px';
            particleData.element.style.top = py + 'px';
            particleData.element.style.opacity = Math.max(0, 1 - particleData.distance / 120);
        });

        const finished = particles.every((particleData) => particleData.distance > 120);
        if (finished) {
            clearInterval(explodeInterval);
            particles.forEach((particleData) => document.body.removeChild(particleData.element));
            document.body.removeChild(firework);
        }
    }, 16);
}

// 顶栏鼠标跟随光效脚本
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

    // 为所有 .sbo 元素添加光效跟随
    const sbos = document.querySelectorAll('.sbo');
    if (sbos.length) {
        sbos.forEach((sbo) => {
            // 初始化变量（可选）
            sbo.style.setProperty('--mx', '50%');
            sbo.style.setProperty('--my', '50%');
            sbo.style.setProperty('--glow', '0');

            let hideTimer = null;
            sbo.addEventListener('mousemove', (e) => {
                const rect = sbo.getBoundingClientRect();
                const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
                const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
                sbo.style.setProperty('--mx', xPercent + '%');
                sbo.style.setProperty('--my', yPercent + '%');
                // 更大的光效与更长的保持时间
                sbo.style.setProperty('--glow', '0.95');
                if (hideTimer) clearTimeout(hideTimer);
                hideTimer = setTimeout(() => sbo.style.setProperty('--glow', '0'), 1000);
            });

            sbo.addEventListener('mouseleave', () => {
                if (hideTimer) clearTimeout(hideTimer);
                sbo.style.setProperty('--glow', '0');
            });

            sbo.addEventListener('click', () => {
                const rect = sbo.getBoundingClientRect();
                const count = 4;
                for (let i = 0; i < count; i++) {
                    const pop = document.createElement('img');
                    pop.src = './7ab549c571009811a069b07c0831799941538595.png';
                    pop.alt = '';
                    pop.className = 'popout-image';
                    const startX = rect.left + rect.width / 2;
                    const startY = rect.top + rect.height / 2;
                    pop.style.left = `${startX}px`;
                    pop.style.top = `${startY}px`;
                    pop.style.opacity = '0';
                    pop.style.transform = 'translate(-50%, -50%) scale(0.8)';
                    document.body.appendChild(pop);

                    const angle = Math.PI * 1.2 + (i / (count - 1)) * Math.PI * 0.6;
                    const distance = 180 + Math.random() * 40;
                    const dx = Math.cos(angle) * distance;
                    const dy = Math.sin(angle) * distance * -1;

                    requestAnimationFrame(() => {
                        pop.style.opacity = '1';
                        pop.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(1)`;
                    });

                    setTimeout(() => {
                        pop.style.opacity = '0';
                        pop.style.transform = `translate(calc(-50% + ${dx * 1.1}px), calc(-50% + ${dy * 1.1}px)) scale(0.6)`;
                    }, 700 + i * 50);
                    setTimeout(() => {
                        if (pop.parentNode) pop.parentNode.removeChild(pop);
                    }, 1100 + i * 50);
                }
            });
        });
    }
})();
