const timeToSec = (time:number)=>{
    if(time<0) return '00:00';
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return( mins.toString().padStart(2, "0") + ' : ' + secs.toString().padStart(2, "0") );
};

const phaseToSeason = (phase:number,seasonsPerYear:number)=>{
    const year =1900 + Math.floor(phase/seasonsPerYear);
    const seasons = (seasonsPerYear === 2 ? ['Fall','Spring'] : ['Fall','Winter','Spring','Summer']);
    const season = seasons[phase % seasonsPerYear];
    console.log(phase,seasonsPerYear);
    return( `${season}  ${year}` );
};
export {timeToSec,phaseToSeason};