
let input = document.querySelector('input'),
    textStart = document.querySelector('.text') // text

let objWay = {
    end: 'Отлично ! Текст набран'
}

let objText = {
    lite: [
        'Я люблю писать',
        'дождливым утром',
        'легкомысленный человек',
        'трудная дорога',
        'у соседнего двора',
        'с веселой песней',
        'перед цветущим полем',
        'опавшей листвой',
        'запеченное яблоко',
        'беспрерывная беседа',
        'разбросанные вещи.',
        'на седьмое небо',
        'первая скрипка',
        'каждый человек',
        'в белой ванной',
        'дуб-великан.'
    ],
    middle: [
        'Я люблю кодить в visual studio code и верстать оригинальные сайты',
        'Солнечные лучи уходили и сумерки наступали, как обычно бывает.',
        'Когда Миша закончил уроки, Паша уже ждал его во дворе; они договаривались поиграть в футбол.',
        'Мама в саду посадила много всего и даже цветы росли; они скоро начнут распускаться, так что скоро станет совсем красиво.',
        'Дети во дворе делали горку, поэтому папа Саши предложил помочь.',
        'Он встал, не обращая внимания учительница продолжила урок, класс удивился.',
        'На улице холодно, я одела шапку и вышла, на уроки успеваю. (На улице холодно. Я одела шапку и вышла. На уроки успеваю.)',
        'Погода все больше хмурилась, дождь не утихал: большие капли били жестко и неумолимо по лицу.',
        'Рома одел куртку несмотря на теплый осенний день дул прохладный ветер и моросил дождь можно и простыть.',
        'Литературному произношению учит семья: в культурной среде нормы языка передаются от родителей к детям.',
        'Категория времени глагола в данном предложении указывает на настоящее время.',
        'Если в предложении есть и подлежащее, и сказуемое, оно называется двусоставным.',
        'В роли подлежащего может выступать как одно слово, так и несколько.',
        'Dota — глубочайшая многопользовательская стратегия всех времён',
        'Власти обсудят общественные работы для помощи рынку труда',
        'При создании стиля абзаца для задания атрибутов шрифта используются поле размер шрифта, кнопки «Ж» - жирный шрифт, «К» - курсив, «Ч» - подчёркивание.'
    ],
    hard: [
        'I like to go to visual studio code and make up original websites',
        'Многие писатели предпочитают излагать повествование в своих произведениях с помощью простых и коротких предложений. К ним относятся Чехов («краткость – сестра таланта»), Бабель, О. Генри и другие.',
        'Сочинительная и бессоюзная связи: "Большие снежинки вначале медленно опустились на тротуар, а затем посыпались быстрее – метель началась".',
        '"Девушка ускорила шаг (1): состав, пыхтя, подъезжал к станции (2), и гудок паровоза это подтвердил (3)".',
        'Кузнечики – лапками по крыльям: на лапках у них зацепочки, а на крыльях зазубринки.',
        'Информатика – это совокупность дисциплин, изучающих свойства информации, а также способы представления, накопления, обработки и передачи информации с помощью технических средств. На западе применяют другой термин – computer science (компьютерная наука).',
        'Выделите слова «Ядро информатики», замените шрифт на полужирный и измените высоту букв (кегль 14 пунктов).'
    ]
}

let btnLite = document.querySelector('.btn-1'),
    btnMiddle = document.querySelector('.btn-2'),
    btnHard = document.querySelector('.btn-3')

btnLite.addEventListener('click', () => {
    textStart.textContent = objText.lite[Math.round(Math.random(0, objText.lite.length - 1) * objText.lite.length - 1)]
    createSpan()
})

btnMiddle.addEventListener('click', () => {
    textStart.textContent = objText.middle[Math.round(Math.random(0, objText.middle.length - 1) * objText.middle.length - 1)]
    createSpan()
})

btnHard.addEventListener('click', () => {
    textStart.textContent = objText.hard[Math.round(Math.random(0, objText.hard.length - 1) * objText.hard.length - 1)]
    createSpan()
})

// work text ================================== 
let count = 0
input.maxLength = 0
function startInput() {
    setTimeout(animateBtn(btnLite, 0, 600), 0)
    setTimeout(animateBtn(btnMiddle, 900, 600), 0)
    setTimeout(animateBtn(btnHard, 1800, 600), 0)
}
function animateBtn(btn, start, end) {
    setTimeout(() => {
        if (document.documentElement.clientWidth >= 768) {
            btn.classList.remove('animate-end')
            btn.classList.add('animate-start-translate')
        } else {
            btn.classList.add('animate-start')
            btn.classList.remove('animate-end')
        }
        setTimeout(() => {
            if (document.documentElement.clientWidth >= 768) {
                btn.classList.remove('animate-start')
                btn.classList.remove('animate-start-translate')
            } else {
                btn.classList.remove('animate-start')
                btn.classList.add('animate-end')
            }
        }, end)
    }, start)
}



input.addEventListener('click', (event) => {
    if (textStart.textContent == 'Выбери свой уровень нажав на кнопку выше') {
        startInput()
    }
})

input.addEventListener('input', (event) => {
    if (input.value.length == textStart.children.length && input.value != '') {
        input.value = ''
        textStart.innerHTML = ''
        showEnd()
    }

    if (input.value[input.value.length - 1] === textStart.children[input.value.length - 1].textContent) {
        textColorBlue()
        count++
    } else {
        input.value = input.value.slice(0, -1)
        textStart.children[input.value.length].style.color = 'red'
    }
})
input.addEventListener('keydown', (event) => {
    if (event.code === 'Backspace') {
        textColorRedDelete()
        textColorNull()
    }
})

function createSpan() {
    let mass = textStart.textContent.split(''), // text arr
        textStartSave = textStart.textContent
    textStart.innerHTML = '' // text null
    input.maxLength = textStartSave.length

    for (let i = 0; i < textStartSave.length; i++) { // add span
        textStart.innerHTML = textStart.innerHTML + `
        <span>${mass[i]}</span>
        `
        if (mass[i] === ' ') {
            textStart.children[i - 1].classList.add('space')
        }
    }
}

function textColorBlue() {
    for (let i = 0; i < input.value.length; i++) {
        textStart.children[i].style.color = 'blue'
        console.log(i, 'input')
    }
}

function textColorNull() {
    for (let i = 0; i < input.value.length; i++) {
        textStart.children[i].style.color = ''
        console.log(i, 'key')
    }
}

function textColorRedDelete() {
    for (let i = 0; i < textStart.children.length; i++) {
        if (textStart.children[i].style.color === 'red')
            textStart.children[i].style.color = ''
    }
}

function showEnd() {
    let container = document.querySelector('.container')
    let cont = document.createElement('div')
    cont.classList.add('container')
    container.after(cont)

    let contDiv = document.createElement('div')
    contDiv.textContent = objWay.end
    cont.append(contDiv)
    input.maxLength = 0
    setTimeout(() => {
        cont.remove()
        textStart.textContent = 'Выбери свой уровень нажав на кнопку выше'
    }, 3000)
}