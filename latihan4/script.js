const tombol = document.getElementById('tombol');

tombol.addEventListener('click', function () {
    document.body.classList.toggle('biru-muda');
});

const tombolAcak = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tombolAcak.appendChild(teksTombol);
tombolAcak.setAttribute('type', 'button');

tombol.after(tombolAcak);

tombolAcak.onclick = function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}

const red = document.querySelector('input[name=red]');
const green = document.querySelector('input[name=green]');
const blue = document.querySelector('input[name=blue]');

red.addEventListener('input', function () {
    const merah = red.value;
    const biru = blue.value;
    const hijau = green.value;
    document.body.style.backgroundColor = 'rgb(' + merah + ',' + hijau + ',' + biru + ')';
});

green.addEventListener('input', function () {
    const merah = red.value;
    const biru = blue.value;
    const hijau = green.value;
    document.body.style.backgroundColor = 'rgb(' + merah + ',' + hijau + ',' + biru + ')';
});

blue.addEventListener('input', function () {
    const merah = red.value;
    const biru = blue.value;
    const hijau = green.value;
    document.body.style.backgroundColor = 'rgb(' + merah + ',' + hijau + ',' + biru + ')';
});


document.body.addEventListener('mousemove', function (event) {
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerWidth) * 255);

    document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ', 100)';
}); 