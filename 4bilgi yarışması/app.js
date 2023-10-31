const quiz_data = [
    {
        question:'Fatih Sultan Mehmetin Babası Kimdir ? ',
        a: '2.Murat',
        b: 'Yıldırım Beyazıd',
        c: '1.Mehmet',
        d: 'Abdülhamit Han',
        e: 'Cengiz Han',
        correct : 'a',
    },

    {
        question:'Magna Carta Hangi Ülkenin Kralıyla Yapılmış Bir Antlaşmadır ? ',
        a: 'Fransa',
        b: 'İngiltere',
        c: 'İspanya',
        d: 'Cezayir',
        e: 'Türkiye',
        correct : 'b',
    },

    {
        question:'Hangisi Tarihteki Türk Devletlerinden Birisi Değildir ? ',
        a: 'Avar Kağanlığı',
        b: 'Hun İmparatorluğu',
        c: 'Ak Hun İmparatorluğu',
        d: 'Göktürk İmparatorluğu.',
        e: 'Emevi Devleti',
        correct : 'e',
    },

    {
        question:'1 metre kaç milimetredir ? ',
        a: '10',
        b: '100',
        c: '1000',
        d: '10.000',
        e: '1.000.000',
        correct : 'c',
    },

    {
        question:'Galatasaray Hangi Yıl UEFA Kupasını Almıştır ? ',
        a: '2003',
        b: '2005',
        c: '2012',
        d: '2000',
        e: '2001',
        correct : 'd',
    },

    {
        question:'Hangisi En Üretken Twitter Kullanıcısıdır ? ',
        a: 'Barış Özcan',
        b: 'Didem Küçükkaraarslan',
        c: 'Pew Die Pie',
        d: 'Enes Batur',
        e: 'Haluk Levent Acil',
        correct : 'b',
    },

    {
        question:'Kıbrıs Barış Harekatı Hangi Tarigte Gerçekleşmiştir ? ',
        a: '1974',
        b: '1977',
        c: '1960',
        d: '1988',
        e: '1953',
        correct : 'a',
    },

    {
        question:'ABD Başkanlarından John Fitzgerald Kennedy e Suikast Düzenleyen Kimdi ? ',
        a: 'Clay Shaw',
        b: 'Jack Ruby',
        c: 'Ahmet Özcan',
        d: 'Lee Harvey Oswald',
        e: 'Justin Bieber',
        correct : 'd',
    },

    {
        question:'Osmanlıda Lale Devri Hangi Padişah Döneminde Yaşanmıştır ? ',
        a: 'Orhan Gazi',
        b: 'Kanuni Sultan Süleyman',
        c: '4.Murat',
        d: '3.Selim',
        e: '3.Ahmet',
        correct : 'e',
    },
    {
        question:'Hangisi Tarihteki Rus Devlet Yöneticilerindendir ? ',
        a: 'Kazıklı Voyvoda',
        b: 'Sezar',
        c: 'Deli Petro',
        d: 'Emmanuel Macron',
        e: 'Jan Jacques',
        correct : 'c'
    },
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer') 
// niye . ile bağladık

const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz(){
    const currentQuizData = quiz_data[currentQuiz]

    deselectedAnswers()
    questionEl.innerText = currentQuizData.question

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
}

function deselectedAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener("click", ()=>{
    const answer = getSelected()
    console.log(answer)

    if(answer === quiz_data[currentQuiz].correct){
        score ++ 
    }
    currentQuiz ++
    //değerin bize arttığını söylüyor.

    if(currentQuiz < quiz_data.length){
        loadQuiz()
    }
    else{
        quiz.innerHTML = `
        <h2> Test Tamamlandı, ${score*20} puan aldınız. 🥳 </h2>
        <button class="submit" onClick="location.reload()"> Tekrar Dene </button>
        `
    }
})

//innerHTML: Bir string içinde bulunan HTML etiketini (tag) işler.
//innerText: Bir string içindeki HTML etiketini (tag) işlemez.