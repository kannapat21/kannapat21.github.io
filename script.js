// ฟังก์ชั่นเปลี่ยนหน้า
function goToPage(pageNumber) {
    const pages = document.querySelectorAll('.container');
    pages.forEach(page => page.classList.remove('active')); // ซ่อนทุกหน้า
    document.getElementById(`page${pageNumber}`).classList.add('active'); // แสดงหน้าใหม่ที่ต้องการ

    // เริ่มนับถอยหลังตามหน้า
    if (pageNumber === 5) {
        startCountdown();  // เริ่มนับถอยหลังหน้า 5
    } else if (pageNumber === 7) {
        startCountdownPage7();  // เริ่มนับถอยหลังหน้า 7
    } else if (pageNumber === 8) {
        startCountdownPage8();  // เริ่มนับถอยหลังหน้า 8
    } else if (pageNumber === 9) {
        startCountdownPage9();  // เริ่มนับถอยหลังหน้า 9
    } else if (pageNumber === 10) {
        startCountdownPage10();  // เริ่มนับถอยหลังหน้า 10
    } else if (pageNumber === 11) {
        startCountdownPage11();  // เริ่มนับถอยหลังหน้า 11
    } else if (pageNumber === 13) {
        startCountdownPage13();  // เริ่มนับถอยหลังหน้า 13
    } else if (pageNumber === 14) {
        startCountdownPage14();  // เริ่มนับถอยหลังหน้า 14
    }
    else if (pageNumber === 17) {
            startCountdownPage17();  // เริ่มนับถอยหลังหน้า 17
    }
    else if (pageNumber === 18) {
            startCountdownPage18();  // เริ่มนับถอยหลังหน้า 18
    }
    else if (pageNumber === 19) {
        startCountdownPage19();  // เริ่มนับถอยหลังหน้า 18
    }
    
 }


// ฟังก์ชั่นเริ่มนับถอยหลังหน้า 13
let countdownIntervalPage13;
function startCountdownPage13() {
    let timeLeft = 3; // ตั้งค่าเริ่มต้นให้เริ่มนับจาก 3
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = timeLeft;

    // เริ่มนับถอยหลัง
    countdownIntervalPage13 = setInterval(function() {
        timeLeft--;
        countdownElement.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(countdownIntervalPage13);
            goToPage(14); // ไปที่หน้าถัดไปหน้า 14
        }
    }, 1000);
}

// ฟังก์ชั่นเริ่มนับถอยหลังหน้า 14
let countdownIntervalPage14;
function startCountdownPage14() {
    let timeLeft = 3; // ตั้งค่าเริ่มต้นให้เริ่มนับจาก 3
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = timeLeft;

    // เริ่มนับถอยหลัง
    countdownIntervalPage14 = setInterval(function() {
        timeLeft--;
        countdownElement.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(countdownIntervalPage14);
            goToPage(15); // ไปที่หน้าถัดไปหน้า 15
        }
    }, 1000);
}


// ฟังก์ชั่นสำหรับการกรอกรหัส 4 หลัก
function moveFocus(current, nextId) {
    if (current.value.length === 1) {
        document.getElementById(nextId).focus();
    }
}

// ฟังก์ชั่นตรวจสอบรหัสและเปลี่ยนหน้า
function submitCode() {
    const correctCode = "2110"; // รหัสที่ถูกต้อง
    const code = document.getElementById('code1').value + 
                 document.getElementById('code2').value + 
                 document.getElementById('code3').value + 
                 document.getElementById('code4').value;

    // ตรวจสอบรหัส
    if (code === correctCode) {
        document.getElementById('nextButton').disabled = false;  // เปิดใช้งานปุ่ม "ถัดไป"
    } else {
        document.getElementById('nextButton').disabled = true;   // ปิดการใช้งานปุ่ม "ถัดไป"
        alert("คือจำวันครบรอบกันไม่ได้หรอ นอยแล้ว🥲");  // แสดงข้อความเมื่อกรอกรหัสผิด
    }
}

// ฟังก์ชั่นเริ่มนับถอยหลังหน้า 5
let countdownInterval;
function startCountdown() {
    let timeLeft = 3; // ตั้งค่าเริ่มต้นให้เริ่มนับจาก 3
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = timeLeft;

    // เริ่มนับถอยหลัง
    countdownInterval = setInterval(function() {
        timeLeft--;
        countdownElement.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(countdownInterval);
            goToPage(6); // ไปที่หน้าคำอวยพร
        }
    }, 1000);
}

// ฟังก์ชั่นเริ่มนับถอยหลังหน้า 7
let countdownIntervalPage7;
function startCountdownPage7() {
    let timeLeft = 3; // ตั้งค่าเริ่มต้นให้เริ่มนับจาก 3
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = timeLeft;

    // เริ่มนับถอยหลัง
    countdownIntervalPage7 = setInterval(function() {
        timeLeft--;
        countdownElement.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(countdownIntervalPage7);
            goToPage(8); // ไปที่หน้าถัดไปหน้า 8
        }
    }, 1000);
}

// ฟังก์ชั่นเริ่มนับถอยหลังหน้า 8
let countdownIntervalPage8;
function startCountdownPage8() {
    let timeLeft = 3; // ตั้งค่าเริ่มต้นให้เริ่มนับจาก 3
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = timeLeft;

    // เริ่มนับถอยหลัง
    countdownIntervalPage8 = setInterval(function() {
        timeLeft--;
        countdownElement.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(countdownIntervalPage8);
            goToPage(9); // ไปที่หน้าถัดไปหน้า 9
        }
    }, 1000);
}

// ฟังก์ชั่นเริ่มนับถอยหลังหน้า 9
let countdownIntervalPage9;
function startCountdownPage9() {
    let timeLeft = 3; // ตั้งค่าเริ่มต้นให้เริ่มนับจาก 3
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = timeLeft;

    // เริ่มนับถอยหลัง
    countdownIntervalPage9 = setInterval(function() {
        timeLeft--;
        countdownElement.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(countdownIntervalPage9);
            goToPage(10); // ไปที่หน้าถัดไปหน้า 10
        }
    }, 1000);
}

// ฟังก์ชั่นเริ่มนับถอยหลังหน้า 10
let countdownIntervalPage10;
function startCountdownPage10() {
    let timeLeft = 3; // ตั้งค่าเริ่มต้นให้เริ่มนับจาก 3
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = timeLeft;

    // เริ่มนับถอยหลัง
    countdownIntervalPage10 = setInterval(function() {
        timeLeft--;
        countdownElement.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(countdownIntervalPage10);
            goToPage(11); // ไปที่หน้าถัดไปหน้า 11
        }
    }, 1000);
}

// ฟังก์ชั่นเริ่มนับถอยหลังหน้า 11
let countdownIntervalPage11;
function startCountdownPage11() {
    let timeLeft = 3; // ตั้งค่าเริ่มต้นให้เริ่มนับจาก 3
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = timeLeft;

    // เริ่มนับถอยหลัง
    countdownIntervalPage11 = setInterval(function() {
        timeLeft--;
        countdownElement.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(countdownIntervalPage11);
            goToPage(12); // ไปที่หน้าถัดไปหน้า 12
        }
    }, 1000);
}

// ฟังก์ชั่นเริ่มนับถอยหลังหน้า 17
let countdownIntervalPage17;
function startCountdownPage17() {
    let timeLeft = 3; // ตั้งค่าเริ่มต้นให้เริ่มนับจาก 3
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = timeLeft;

    // เริ่มนับถอยหลัง
    countdownIntervalPage17 = setInterval(function() {
        timeLeft--;
        countdownElement.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(countdownIntervalPage17);
            goToPage(18); // ไปที่หน้าถัดไปหน้า 18
        }
    }, 1000);
}

// ฟังก์ชั่นเริ่มนับถอยหลังหน้า 18
let countdownIntervalPage18;
function startCountdownPage18() {
    let timeLeft = 3; // ตั้งค่าเริ่มต้นให้เริ่มนับจาก 3
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = timeLeft;

    // เริ่มนับถอยหลัง
    countdownIntervalPage18 = setInterval(function() {
        timeLeft--;
        countdownElement.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(countdownIntervalPage18);
            goToPage(19); // ไปที่หน้าถัดไปหน้า 19
        }
    }, 1000);
}

// ฟังก์ชั่นเริ่มนับถอยหลังหน้า 18
let countdownIntervalPage19;
function startCountdownPage19() {
    let timeLeft = 3; // ตั้งค่าเริ่มต้นให้เริ่มนับจาก 3
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = timeLeft;

    // เริ่มนับถอยหลัง
    countdownIntervalPage19 = setInterval(function() {
        timeLeft--;
        countdownElement.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(countdownIntervalPage19);
            goToPage(20); // ไปที่หน้าถัดไปหน้า 20
        }
    }, 1000);
}

// ฟังก์ชั่นเล่นเพลงจาก YouTube
function playVideo() {
    const youtubePlayer = document.getElementById('youtubePlayer');
    const videoPlayer = document.getElementById('videoPlayer');

    // เปลี่ยน URL ของ iframe เป็นลิงค์ YouTube ของคุณ
    videoPlayer.src = "https://www.youtube.com/embed/OYPiXBIgvJ8?si=sxGuuYKfmDubpC1H";  // ใส่ YouTube video ID แทนที่ YOUR_VIDEO_ID

    // แสดง iframe
    youtubePlayer.style.display = "block";  

    // ตั้งเวลาหลังจาก 4 นาที (240,000 มิลลิวินาที) เพื่อแสดงปุ่ม "ฟังจบแล้ว"
    setTimeout(function() {
        document.getElementById('finishButton').style.display = "block";  // แสดงปุ่ม "ฟังจบแล้ว"
    }, 30000);  // 30 วิ = 30,000 มิลลิวินาที
}

// ฟังก์ชั่นเมื่อกด "ฟังจบแล้ว"
function finishListening() {
    goToPage(13);  // หรือสามารถเปลี่ยนหน้าไปที่หน้าถัดไปได้
}
