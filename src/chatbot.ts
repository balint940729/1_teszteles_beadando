export class ChatBot{
    constructor(){}

    public greet(namese: string[]): string{
        let sentence:string = "Hello, ";
        let sentence2:string = "HELLO ";
        let upper: string[] = [];
        let lower: string[] = [];
        let names: string[] = [];
        let s: string[] = [];
        let shout, normal: boolean = false;

        // Ha több nevet kapunk inputként
        if (namese.length >= 1){

            for(let i=0; i < namese.length; i++){
                s = namese[i].split(',');
                for(let i=0; i < s.length; i++){
                    names.push(s[i].trim());
                }
            }

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