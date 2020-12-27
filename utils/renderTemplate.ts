import lookup from './lookup'
import parseArray from './parseArray';

function renderTemplate(tokens: any[],data: object){
    let result: string = "";
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        if(token[0]==="text"){
            result+=token[1];
        }else if(token[0]==="name"){
            result+=lookup(data,token[1])
        }else if(token[0]==="#"){
            let arr = lookup(data,token[1]);
            result+=parseArray(token,arr)
        }
    }
    return result;
}

export default renderTemplate