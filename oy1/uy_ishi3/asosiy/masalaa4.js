const team = {
  wins: 10,
  draws: 4,
  losses: 2,
  getPoints() {
    return `${this.wins * 3 + this.draws * 1} ball`
  }
};


console.log(team.getPoints());