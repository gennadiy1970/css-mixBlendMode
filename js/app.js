const menu =  document.querySelector('.menu');
const blendMode =  document.querySelector('.blend-mode');
const set = [
    'unset', 
    'multiply', 
    'screen', 
    'overlay', 
    'darken', 
    'lighten',
    'color-dodge',
    'color-burn',
    'hard-light',
    'soft-light',
    'difference',
    'exclusion',
    'hue',
    'saturation',
    'color',
    'luminosity'
]

// const li = arr => arr.map(elem => `<li> <a href="#${elem}">${elem}</a></li>`).join('')
menu.innerHTML = set.map(elem => `<li> <a href="#${elem}">${elem} ⤵</a></li>`).join('')
blendMode.innerHTML = set
    .filter(elem => elem !==  'unset')
    .map(elem => `
    <h4 id="${elem}">
    <a href="#up">${elem} ⤴</a>
</h4>
<div class="box-wrp">
    <div class="red box ${elem}"></div>
    <div class="green box ${elem}"></div>
    <div class="blue box ${elem}"></div>
</div>
    `).join('');
const on = document.querySelector('.on-off');
const  elements = {
    red: document.querySelectorAll('.red'),
    green: document.querySelectorAll('.green'),
    blue: document.querySelectorAll('.blue')
}

on.addEventListener('click', toggle, false);

const state = {
    red: 1,
    green: 1,
    blue: 1,
}

function toggle (e) {
    const className = e.target.dataset.color;
    state[className] = state[className] === 1 ? 0: 1;
    Array.from (elements[className], elem => elem.style.opacity = state[className])
}

