function timeToWalk(steps, footprint_m, speed_km_h) {
    let speed_m_s =  speed_km_h * 1000 / 3600;
    let distance_m = steps * footprint_m;
    let time_s = distance_m / speed_m_s;
    let additional_time_s = Math.floor(distance_m / 500) * 60;
    let total_time_s = time_s + additional_time_s;

    let hours = Math.floor(total_time_s / 3600);
    let minutes = Math.floor((total_time_s - (hours * 3600)) / 60);
    let seconds = Math.ceil(total_time_s - (hours * 3600) - (minutes * 60));

    console.log(`${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);