function CountDown() {
    const date = document.getElementById('date1');
            const someday = new Date(date.value); 
            const today = new Date();

            if (someday > today) {
                let diff = someday - today;

                let days = Math.floor(diff / (1000 * 60 * 60 * 24));
                diff %= (1000 * 60 * 60 * 24);
                let hours = Math.floor(diff / (1000 * 60 * 60));
                diff %= (1000 * 60 * 60);
                let minutes = Math.floor(diff / (1000 * 60));
                diff %= (1000 * 60);
                let seconds = Math.floor(diff / 1000);

                hours = hours.toString().padStart(2, '0');
                minutes = minutes.toString().padStart(2, '0');
                seconds = seconds.toString().padStart(2, '0');
                days = days.toString();

                document.getElementById('da').textContent = days;
                document.getElementById('hou').textContent = hours;
                document.getElementById('min').textContent = minutes;
                document.getElementById('sec').textContent = seconds;
            }
        }

CountDown();
setInterval(CountDown, 1000);
