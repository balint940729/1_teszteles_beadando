export class ChatBot{
    constructor(){}

    public greet(names: string[]): string{
        let sentence:string = "Hello, ";
        let sentence2:string = "HELLO ";
        let upper: string[] = [];
        let lower: string[] = [];
        let shout, normal: boolean = false;

        // Ha csak egy nevet kapunk inputként
        if (names.length === 1) {
            if (names[0] === names[0].toUpperCase()) 
                return "HELLO " + names + "!";
            return "Hello, " + names + ".";
        }

        // Ha több nevet kapunk inputként
        if (names.length > 1){

            // Felbontom két csoportra a neveket nagy/kis-re
            for(let i=0; i < names.length; i++){
                if(names[i] === names[i].toUpperCase()){
                    shout = true;
                    upper.push(names[i]);
                    continue;
                }
                normal = true;
                lower.push(names[i]);
            }

            // Ha van legalabb 1-1 név mindkettőnel
            if (shout && normal) 
                sentence2 = " AND HELLO ";

            // Kisbetűs inputok üdvözlések 
            if (normal && lower.length > 1)
                sentence = this.mondat(lower, sentence) + ".";

            if (normal && lower.length === 1)
                sentence += lower + ".";

            // Nagybetűs inputok üdvözlése
            if (shout && upper.length > 1)
                sentence2 = this.mondat(upper, sentence2).toUpperCase() + "!";

            if (shout && upper.length === 1)
                sentence2 += upper + "!";

            // Ha csak kisbetűs inputok vannak
            if (normal && !shout)
                return sentence;

            // Ha csak nagybetűs inputok vannak
            if (shout && !normal)
                return sentence2;

            // Ha mindkettő inputból van
            return sentence + sentence2;
        }

        return "Hello, my friend.";
    }

    // Létrehozza a mondatokat 
    private mondat(words: string[], sentence: string): string{
        for(let i=0; i < words.length; i++){
            if(i === words.length-1){
                sentence += "and " + words[i];
                break;
            }
            sentence += words[i] + ", ";
        }
        return sentence;
    }

}