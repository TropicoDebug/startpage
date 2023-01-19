function sleep(ms: number) : Promise<void>{
    return new Promise( resolve => setTimeout(resolve, ms) );
}

function getTime() : string{
    const currentTime:Date = new Date();
    var hours:string = currentTime.getHours().toString();
    if (hours.length == 1) hours = "0" + hours;
    
    var minutes:string = currentTime.getMinutes().toString();
    if (minutes.length == 1) minutes = "0" + minutes;
    
    const timeString:string = `${hours}:${minutes}`;
    return timeString;
}

function randomIntFromInterval(min:number, max:number) : number{ // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
