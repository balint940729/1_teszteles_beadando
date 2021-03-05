export class ChatBot{
    constructor(){}

    public greet(names: string[]): string{
        let sentence:string = "Hello, ";
        let sentence2:string = "HELLO ";
        let upper: string[] = [];
        let lower: string[] = [];
        let both, shout, normal: boolean = false;

        if (names.length === 1) {
            if (names[0] === names[0].toUpperCase()) 
                return "HELLO " + names + "!";
            return "Hello, " + names + ".";
        }

        if (names.length > 1){

            // Szétbontom két csoportra a neveket nagy/kis-re
            for(let i=0; i < names.length; i++){
                if(names[i] === names[i].toUpperCase()){
                    shout = true;
                    upper.push(names[i]);
                    continue;
                }
                normal = true;
                lower.push(names[i]);
            }

            // Ha van legalabb 1-1 név mindkettőnel akkor
            if (shout && normal) {
                both = true;
                sentence2 = " AND HELLO ";
            }

            if (normal && lower.length > 1){
                for(let i=0; i < lower.length; i++){
                    if(i === lower.length-1){
                        sentence += "and " + lower[i] + ".";
                        break;
                    }
                    sentence += lower[i] + ", ";
                }
            }

            if (normal && lower.length === 1){
                sentence += lower + ".";
            }

            if (shout && upper.length > 1){
                for(let i=0; i < upper.length; i++){
                    if(i === upper.length-1){
                        sentence2 += "AND " + upper[i] + "!";
                        break;
                    }
                    sentence2 += upper[i] + ", ";
                }
            }

            if (shout && upper.length === 1){
                sentence2 += upper + "!";
            }

            if (both){
                return sentence + sentence2;
            }

            if (shout && !normal){
                return sentence2;
            }

            return sentence;

        }

        return "Hello, my friend.";
    }

}