const workEndTimeInput = document.getElementById('work-end-time');
const saveTimeButton = document.getElementById('save-time');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const messageElement = document.getElementById('message');

let workEndTime = '18:00';
let countdownInterval;

function initApp() {
    const savedEndTime = localStorage.getItem('workEndTime');
    if (savedEndTime) {
        workEndTime = savedEndTime;
        workEndTimeInput.value = workEndTime;
    }
    
    saveTimeButton.addEventListener('click', saveWorkEndTime);
    startCountdown();
}

function saveWorkEndTime() {
    workEndTime = workEndTimeInput.value;
    localStorage.setItem('workEndTime', workEndTime);
    startCountdown();
    alert('下班时间已更新！');
}

function startCountdown() {
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }
    
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    const now = new Date();
    
    const [hours, minutes] = workEndTime.split(':').map(Number);
    const endTime = new Date();
    endTime.setHours(hours, minutes, 0, 0);
    
    if (now >= endTime) {
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
        messageElement.textContent = '已经下班啦，快回家吧！';
        messageElement.classList.add('time-over');
        return;
    }
    
    const timeLeft = endTime - now;
    
    const hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    hoursElement.textContent = hoursLeft.toString().padStart(2, '0');
    minutesElement.textContent = minutesLeft.toString().padStart(2, '0');
    secondsElement.textContent = secondsLeft.toString().padStart(2, '0');
    messageElement.textContent = '距离下班还有...';
    messageElement.classList.remove('time-over');
}

document.addEventListener('DOMContentLoaded', initApp);