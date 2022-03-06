// let gymContent =
//     `

// <div class="btn-box">
//     <button class="btn-1 btn">Lite</button>
//     <button class="btn-2 btn">Middle</button>
//     <button class="btn-3 btn">Hard</button>
// </div>
// <div class="input-box">
//     <label>Введите текст</label>
//     <input type="text" placeholder="Начинай" autocomplete="off">
//     <!-- <input type="text" id="text" placeholder="Начинай" autocomplete="off"> -->
// </div>

// <div class="text-box">
//     <p class="text">Выбери свой уровень, нажав на кнопку выше</p>
// </div>

// `

// document.querySelector('.messenge-btn').addEventListener('click', () => {
//     gymRender()
// })

// document.querySelector('.header-heading').addEventListener('click', () => {
//     if (document.querySelector('.container-messenge-rules')) {
//         document.querySelector('.main-container').remove()
//     }
// })

// function gymRender() {
//     let cont = document.createElement('div')
//     cont.classList.add('container', 'main-container')
//     document.querySelector('.main').prepend(cont)
//     cont.innerHTML = gymContent
// }
