let main = document.querySelector('.main'),
    logo = document.querySelector('.header-heading'),
    btnPage,
    mainText = `
<div class="messenge-rules-box">
            <div class="messenge-rules-box-container">
                <h2 class="messenge-rules-heading">BlindP</h2>
            </div>
        </div>

        <div class="messenge-rules-box">
            <p class="messenge-rules-text">
                BlindP - тренажёр Blind Print или так называемый тренажёр "слепой печати"
            </p>

            <p class="messenge-rules-text">
                [ Слепая печать ] - набор символов без взгляда на клавиатуру
            </p>

            <p class="messenge-rules-text">
                Этот тренажёр способен значительно развить этот полезный навык
            </p>

            <p class="messenge-rules-text">
                Жми на кнопку, выбирай уровень и начинай практиковаться
            </p>

            <div class="messenge-btn-box">
                <button class="messenge-btn">Начать</button>
            </div>
        </div>
`,
    gymContent =
        `
<div class="btn-box">
<button class="btn-1 btn">Lite</button>
<button class="btn-2 btn">Middle</button>
<button class="btn-3 btn">Hard</button>
</div>
<div class="input-box">
<label>Введите текст</label>
<input type="text" placeholder="Начинай" autocomplete="off">
<!-- <input type="text" id="text" placeholder="Начинай" autocomplete="off"> -->
</div>

<div class="text-box">
<p class="text">Выбери свой уровень, нажав на кнопку выше</p>
</div>
`

// start ---------
mainRender()

// addEventListener ---------

btnAddEventListener()

logo.addEventListener('click', () => {
    mainRender()
    btnAddEventListener()
})

// function ---------
function mainRender() {
    if (document.querySelector('.main-container')) {
        document.querySelector('.main-container').remove()
    }

    let cont = document.createElement('div')
    cont.classList.add('container', 'container-messenge-rules')
    main.prepend(cont)
    cont.innerHTML = mainText

    btnPage = document.querySelector('.messenge-btn')
}

function gymRender() {
    if (document.querySelector('.container-messenge-rules')) {
        document.querySelector('.container-messenge-rules').remove()
    }

    let cont = document.createElement('div')
    cont.classList.add('container', 'main-container')
    main.prepend(cont)
    cont.innerHTML = gymContent
}

function btnAddEventListener() {
    btnPage.addEventListener('click', () => {
        gymRender()
        animate()
    })
}

function animate() {
    if (document.querySelector('.main-container')) {

        let input = document.querySelector('input'),
            textStart = document.querySelector('.text'), // text
            textStartLvl = 'Выбери свой уровень, нажав на кнопку выше'

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
                'При создании стиля абзаца для задания атрибутов шрифта используются поле размер шрифта, кнопки "Ж" - жирный шрифт, "К" - курсив, "Ч" - подчёркивание.'
            ],
            hard: [
                'I like to go to visual studio code and make up original websites',
                'Многие писатели предпочитают излагать повествование в своих произведениях с помощью простых и коротких предложений. К ним относятся Чехов ("краткость – сестра таланта"), Бабель, О. Генри и другие.',
                'Сочинительная и бессоюзная связи: "Большие снежинки вначале медленно опустились на тротуар, а затем посыпались быстрее – метель началась".',
                '"Девушка ускорила шаг (1): состав, пыхтя, подъезжал к станции (2), и гудок паровоза это подтвердил (3)".',
                'Кузнечики – лапками по крыльям: на лапках у них зацепочки, а на крыльях зазубринки.',
                'Информатика – это совокупность дисциплин, изучающих свойства информации, а также способы представления, накопления, обработки и передачи информации с помощью технических средств. На западе применяют другой термин – computer science (компьютерная наука).',
                'Выделите слова «Ядро информатики», замените шрифт на полужирный и измените высоту букв (кегль 14 пунктов).'
            ]
        }

        let btnLite = document.querySelector('.btn-1'),
            btnMiddle = document.querySelector('.btn-2'),
            btnHard = document.querySelector('.btn-3'),
            btnBox = document.querySelector('.btn-box')

        // work text ================================== 
        input.maxLength = 0

        // addEventListener input
        input.addEventListener('click', () => {
<<<<<<< HEAD
=======

>>>>>>> 2e5119e432a64057771cbcaf67ca3f5076c4cf29
            if (textStart.textContent == textStartLvl) {

                const animateTextPromise = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        textStart.classList.add('text-translateY-top')
                        textStart.classList.remove('text-translateY-down')
                        textStart.classList.remove('text-translateY-start')
                        resolve()
                    }, 300)
                })

                animateTextPromise.then(() => {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            textStart.classList.remove('text-translateY-top')
                            textStart.classList.add('text-translateY-down')
                            resolve()
                        }, 100)
                    })
                }).then(() => {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            textStart.classList.add('text-translateY-top')
                            textStart.classList.remove('text-translateY-down')
                            textStart.classList.remove('text-translateY-start')
                            resolve()
                        }, 100)
                    })
                }).then(() => {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            textStart.classList.remove('text-translateY-top')
                            textStart.classList.add('text-translateY-down')
                            resolve()
                        }, 100)
                    })
                }).then(() => {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            textStart.classList.add('text-translateY-top')
                            textStart.classList.remove('text-translateY-down')
                            textStart.classList.remove('text-translateY-start')
                            resolve()
                        }, 100)
                    })
                }).then(() => {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            textStart.classList.add('text-translateY-start')
                            textStart.classList.remove('text-translateY-top')
                            resolve()
                        }, 100)
                    })
                })

                // setTimeout(() => {
                //     textStart.classList.add('text-translateY-top')
                //     textStart.classList.remove('text-translateY-down')
                //     textStart.classList.remove('text-translateY-start')
                //     setTimeout(() => {
                //         textStart.classList.remove('text-translateY-top')
                //         textStart.classList.add('text-translateY-down')
                //         setTimeout(() => {
                //             textStart.classList.add('text-translateY-top')
                //             textStart.classList.remove('text-translateY-down')
                //             textStart.classList.remove('text-translateY-start')
                //             setTimeout(() => {
                //                 textStart.classList.remove('text-translateY-top')
                //                 textStart.classList.add('text-translateY-down')
                //                 setTimeout(() => {
                //                     textStart.classList.add('text-translateY-top')
                //                     textStart.classList.remove('text-translateY-down')
                //                     textStart.classList.remove('text-translateY-start')
                //                     setTimeout(() => {
                //                         textStart.classList.remove('text-translateY-top')
                //                         textStart.classList.add('text-translateY-down')
                //                     }, 100)
                //                     textStart.classList.add('text-translateY-start')
                //                 }, 100)
                //             }, 100)
                //         }, 100)
                //     }, 100)
                // }, 300) // 300

                setTimeout(startInput, 1600)
                $.mobile.zoom.enable();
            }
        })

        input.addEventListener('input', () => {
            keydown.addEventListenerKeydown()

            if (input.value.length == textStart.children.length && input.value != '') {
                showEnd()
            }

            if (input.value[input.value.length - 1] === textStart.children[input.value.length - 1].textContent) {
                changeTextColor.blue()
            } else {
                changeTextColor.red()
            }
        })

        // addEventListener btn 
        btnBox.addEventListener('click', (event) => {
            if (event.target === btnLite)
                createSpan(objText.lite)
            else if (event.target === btnMiddle)
                createSpan(objText.middle)
            else if (event.target === btnHard)
                createSpan(objText.hard)
        })
        // function
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

        function createSpan(btnLvl) {
            textStart.textContent = btnLvl[Math.round(Math.random(0, btnLvl.length - 1) * btnLvl.length - 1)]

            let arrayNewText = textStart.textContent.split(''), // text arr
                newText = textStart.textContent
            textStart.innerHTML = '' // text null
            input.maxLength = newText.length

            for (let i = 0; i < newText.length; i++) { // add span
                textStart.innerHTML = textStart.innerHTML + `<span>${arrayNewText[i]}</span>`

                if (arrayNewText[i] === ' ') {
                    textStart.children[i - 1].classList.add('space')
                }
            }
        }


        function textColorNull() {
            for (let i = 0; i < input.value.length; i++) {
                textStart.children[i].style.color = ''
            }
        }

        function textColorRedDelete() {
            for (let i = 0; i < textStart.children.length; i++) {
                if (textStart.children[i].style.color === 'red')
                    textStart.children[i].style.color = ''
            }
        }

        function showEnd() {
            input.value = ''
            textStart.innerHTML = ''

            let main = document.querySelector('.main')
            let container = document.createElement('div')
            container.classList.add('container')
            container.classList.add('container-win')
            main.append(container)

            let p = document.createElement('p')
            p.textContent = objWay.end
            p.classList.add('text-win')
            container.append(p)
            input.maxLength = 0
            setTimeout(() => {
                container.remove()
                textStart.textContent = textStartLvl
            }, 3000)
        }


        // keydown
        // function textColorNull() {
        //     for (let i = 0; i < input.value.length; i++) {
        //         textStart.children[i].style.color = ''
        //         console.log(i, 'key')
        //     }
        // }

        // function textColorRedDelete() {
        //     for (let i = 0; i < textStart.children.length; i++) {
        //         if (textStart.children[i].style.color === 'red')
        //             textStart.children[i].style.color = ''
        //     }
        // }

        // function addEventListenerKeydown() {
        //     input.addEventListener('keydown', (event) => {
        //         if (event.code === 'Backspace') {
        //             textColorRedDelete()
        //             textColorNull()
        //         }
        //     })
        // }
        const keydown = {
            addEventListenerKeydown: () => {
                input.addEventListener('keydown', (event) => {
                    if (event.code === 'Backspace') {
                        keydown.textColorRedDelete()
                        keydown.textColorNull()
                    }
                })
            },
            textColorNull: () => {
                for (let i = 0; i < input.value.length; i++) {
                    textStart.children[i].style.color = ''
                }
            },
            textColorRedDelete: () => {
                for (let i = 0; i < textStart.children.length; i++) {
                    if (textStart.children[i].style.color === 'red')
                        textStart.children[i].style.color = ''
                }
            }


        }
        // changeTextColor 
        // Заменил object на function, что внизу (можно удалить)
        // function textColorRed() {
        //     input.value = input.value.slice(0, -1)
        //     textStart.children[input.value.length].style.color = 'red'
        // }

        // function textColorBlue() {
        //     for (let i = 0; i < input.value.length; i++) {
        //         textStart.children[i].style.color = 'blue'
        //     }
        // }

        const changeTextColor = {
            blue: () => {
                for (let i = 0; i < input.value.length; i++) {
                    textStart.children[i].style.color = 'blue'
                }
            },
            red: () => {
                input.value = input.value.slice(0, -1)
                textStart.children[input.value.length].style.color = 'red'
            }
        }


    }

}

//  jQuery zoom
// $.mobile.zoom.enable();

// $("input[type=text], textarea").mouseover(zoomDisable).mousedown(zoomEnable);
// function zoomDisable() {
//     $('head meta[name=viewport]').remove();
//     $('head').prepend('<meta name="viewport" content="user-scalable=0" />');
// }
// function zoomEnable() {
//     $('head meta[name=viewport]').remove();
//     $('head').prepend('<meta name="viewport" content="user-scalable=1" />');
// }