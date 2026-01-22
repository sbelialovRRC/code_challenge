interface Player {
    id: number,
    name: string,
    wins: number,
    losses: number,
    totalScore: number
}

let playerData: Player[] = [
    {
        id: 1,
        name: "ShadowStrike",
        wins: 15,
        losses: 5,
        totalScore: 2850
    },
    {
        id: 2,
        name: "NoobMaster",
        wins: 3,
        losses: 12,
        totalScore: 4200
    }
    , {
        id: 3,
        name: "ProGamer99",
        wins: 0,
        losses: 0,
        totalScore: 0
    }
];