export class ChatBot{
    constructor(){}

    public greet(inputs: string[]): string{
        let sentence:string = "Hello, ";
        let sentence2:string = "HELLO ";
        let upper: string[] = [];
        let lower: string[] = [];
        let names: string[] = [];
        let shout, normal: boolean = false;

        // Ha több nevet kapunk inputként
        if (inputs.length >= 1){

            // Szétválasszuk vesszők mentén az inputot
            inputs.forEach(item => {
                let s = item.split(',');
                for(let i=0; i < s.length; i++){
                    names.push(s[i].trim());
                }
            });

            // Felbontom két csoportra a neveket nagy/kis-re
            names.forEach(name => {
                if(name === name.toUpperCase()){
                    shout = true;
                    upper.push(name);
                }
                else{
                    normal = true;
                    lower.push(name);
                }
            });

            // Ha van legalabb 1-1 név mindkettőnel, akkor átalakítom nagybetűset
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