function attachEventsListeners() {

    const ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };


    function convert(value, unit) {
        const inDays = value / ratios[unit];
        return {
            days: inDays,
            hours: inDays * ratios.hours,
            minutes: inDays * ratios.minutes,
            seconds: inDays * ratios.seconds
        }
    }

    let days = document.querySelector('#days');
    let hours = document.querySelector('#hours');
    let minutes = document.querySelector('#minutes');
    let seconds = document.querySelector('#seconds');

    document.querySelector('#daysBtn').addEventListener('click', change);
    document.querySelector('#hoursBtn').addEventListener('click', change);
    document.querySelector('#minutesBtn').addEventListener('click', change);
    document.querySelector('#secondsBtn').addEventListener('click', change);

    function change(ev) {
        const input = ev.target.parentElement.querySelector('input[type="text"]')
        const time = convert(Number(input.value), input.id)
        days.value = time.days;
        hours.value = time.hours;
        minutes.value = time.minutes;
        seconds.value = time.seconds;
    }
}