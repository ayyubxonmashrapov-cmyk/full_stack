class Movie {
    constructor(title){
        this.title = title;
    }
}

class Series extends Movie {
    constructor(title, episodes, episodesDuration){
        super(title);
        this.episodes = episodes;
        this.episodesDuration = episodesDuration;
    }

    getTotalDuration(){
        return this.episodes * this.episodesDuration + " min";
    }
}

const serial = new Series("something", 12 , 90)

console.log(serial.getTotalDuration())