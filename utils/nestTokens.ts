

function nestTokens(tokens: any[]){
    //最大的数组,用于存储当前一级的token
    let nestedTokens: any[] = [];

    //身份会发生改变,初始情况下是nestedTokens,当出现#之后,变成对应的那个token中用于收集子token的数组
    let collector: any[] = nestedTokens;

    //用于确定所有#嵌套之间的关系,例如[["#","roles",[]],["#","hobbies",[]]],此处的hobbies就是roles的子token
    let sections: any[] = [];

    for(let i = 0; i< tokens.length; i++){
        let token = tokens[i];

        switch(token[0]){
            case "#":
                //将当前token存入收集器中,第一次是nestedTokens
                collector.push(token);

                //将当前token存入栈中
                sections.push(token);

                //将收集器修改为#这个token中用于收集子token的数组
                collector = token[2] = [];
                break;
            case "/":
                //遇到/代表当前token的所有子token都收集完了,需要将该token从栈中弹出,返回上层token继续收集
                sections.pop();

                //如果栈中还有token,代表已检测到的层级嵌套#还没有结束,继续使用栈尾的token,使其可以继续收集子token
                //如果栈中没有token,代表已检测到的层级嵌套#全部结束,剩余的都存放到nestedTokens中
                collector = sections.length>0?sections[sections.length-1][2]:nestedTokens;
                break;
            default:
                //无论collector是谁,都将当前的token存入收集器中
                collector.push(token);
                break;
        }
    }
    return nestedTokens;
}

export default nestTokens