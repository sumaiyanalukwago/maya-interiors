function loadingClock() {
      let sec = document.querySelector('.sec'),
         min = document.querySelector('.min'),
         hr = document.querySelector('.hr'),
         digital_clock = document.querySelector('.digital-clock'),
         deg = 6,
         date = new Date(),
         ss = date.getSeconds() * deg,
         mm = date.getMinutes() * deg,
         hh = (date.getHours() - 12) * 30;
         
         sec.style.transform = `translateX(-50%) rotateZ(${ss}deg)`;
         min.style.transform = `translateX(-50%) rotateZ(${mm}deg)`;
         hr.style.transform = `translateX(-50%) rotateZ(${hh}deg)`;
         
         digital_clock.textContent = date.toLocaleTimeString();
    }
    
   setInterval(loadingClock, 1000);