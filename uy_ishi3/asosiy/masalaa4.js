const team = {
  wins: 10,
  draws: 4,
  losses: 2,
  getPoints() {
    if (this.wins) {
      return `G'alaba: ${this.wins * 3} BALL`;
    } else if (this.draws) {
      return `Durrang: ${this.draws * 1} BALL`;
    }
  },
};


console.log(team.getPoints());