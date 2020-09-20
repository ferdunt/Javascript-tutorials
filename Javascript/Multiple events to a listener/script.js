
/**
 * 💡 WAY 1 💡
 */
const button1 = document.querySelector('.btnAction_1');

// 💬 Events
button1.addEventListener('click', showEvent1);
button1.addEventListener('mouseover', showEvent1);

// 💬 Function
function showEvent1(e) {
    const result1 = document.querySelector('.btnResult_1');
    result1.textContent = e.type;
}

/**
 * 💡 WAY 2 💡
 */
const button2 = document.querySelector('.btnAction_2');

// 💬 Events
let myEvents = 'click mouseover'.split(' ');
myEvents.forEach(event => button2.addEventListener(event, showEvent2));

// 💬 Function
function showEvent2(e) {
    const result2 = document.querySelector('.btnResult_2');
    result2.textContent = e.type;
}

/**
 * 💡 WAY 3 💡
 */
const button3 = document.querySelector('.btnAction_3');

// 💬 Events
['click', 'mouseover'].forEach(event => button3.addEventListener(event, showEvent3));

function showEvent3(e) {
    const result3 = document.querySelector('.btnResult_3');
    result3.textContent = e.type;
}

// 🚧 RESET 🚧
const background = document.querySelector('.container');

background.addEventListener('mouseout', () => {
    const result1 = document.querySelector('.btnResult_1');
    const result2 = document.querySelector('.btnResult_2');
    const result3 = document.querySelector('.btnResult_3');

    result1.textContent = 'RESULT 1';
    result2.textContent = 'RESULT 2';
    result3.textContent = 'RESULT 3';
});