window.onload = function () {
    show(0);
    let nameCont = document.querySelector('.nameCont');
    nameCont.classList.add('event');
}

// Form Function
function fromSubmit(e) {
    e.preventDefault();
    let userName = document.forms["welcomeForm"]["name"].value;
    sessionStorage.setItem('name', userName);
    location.href = 'quizApp.html';
}
let arrayIndex = 0;
let userPoint = 0;
// Next Funtion 
function next() {
    let answer = document.querySelector('li.option.active').innerHTML;
    if (answer == quizQuestions[arrayIndex].answer) {
        userPoint += 10;
        sessionStorage.setItem("points", userPoint);
    }
    if (arrayIndex == quizQuestions.length - 1) {
        location.href = 'end.html';
        return;
    }
    arrayIndex++;
    show(arrayIndex);
}
// Show all the elements
function show(count) {
    const wrapper = document.querySelector('.wrapper');
    let questionAns = quizQuestions[count];
    wrapper.innerHTML = `
    <div class="quizCont">
            <h2 class="question">Q${arrayIndex + 1}: ${questionAns.question}</h2>
            <ul>
                <li class="option">${questionAns.options[0]}</li>
                <li class="option">${questionAns.options[1]}</li>
                <li class="option">${questionAns.options[2]}</li>
                <li class="option">${questionAns.options[3]}</li>
            </ul>
            <button class="btn" onclick="next()">Next</button>
        </div>
    `
    toggleActive();
}
// toggle the elements
function toggleActive() {
    let options = document.querySelectorAll('.option');
    for (let i = 0; i < options.length; i++) {
        options[i].addEventListener('click', () => {
            for (let j = 0; j < options.length; j++) {
                if (options[j].classList.contains('active')) {
                    options[j].classList.remove('active');
                }
            }
            options[i].classList.add('active');
        })
    }
}