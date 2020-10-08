import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type RandomDie {
    numSides: Int!
    rollOnce: Int!
    roll(numRolls: Int!): [Int]
  }

  type Query {
    getDie(numSides: Int): RandomDie
  }

  type Mutation {
    setMessage(message: String): String
  }
`);

class RandomDie {
    public numSides;

    constructor(numSides: number) {
        this.numSides = numSides;
    }

    rollOnce() {
        return 1 + Math.floor(Math.random() * this.numSides);
    }

    roll(args: any) {
        const numRolls:number = args.numRolls
        var output = [];
        for (var i = 0; i < numRolls; i++) {
            output.push(this.rollOnce());
        }
        return output;
    }
}

export const rootResolver = {
    getDie({numSides}: {numSides: number}) {
        return new RandomDie(numSides || 6);
    }
}