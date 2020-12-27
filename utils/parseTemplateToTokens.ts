import Scanner from "./Scanner"
import nestTokens from "./nestTokens"

function parseTemplateToTokens(templateStr: string): any[]{
    //创建Scanner的实例,内部提供许多API,用于解析template字符串->token
    let scanner: Scanner = new Scanner(templateStr);

    //用于收集所有的token
    let tokens: any[] = [];

    //用于接受当前匹配到的token
    let words: string;

    while(!scanner.eos()){
        //获取到{{之前的所有文本内容
        words=scanner.scanUtil("{{");
        if(words[0]!==""){
            //创建一个文本token
            tokens.push(["text",words]);
        }
        scanner.scan("{{");

        
        //获取到{{...}}之前的所有文本内容
        words =scanner.scanUtil("}}");
        if(words!==""){
            if(words[0]==="#"){
                //创建循环开始token
                tokens.push(["#",words.substring(1)]);
            }else if(words[0]==="/"){
                //创建循环结束token
                tokens.push(["/",words.substring(1)]);
            }else{
                //创建普通属性token
                tokens.push(["name",words]);
            }
        }
        scanner.scan("}}");
    }
    tokens = nestTokens(tokens)
    return tokens;
}

export default parseTemplateToTokens