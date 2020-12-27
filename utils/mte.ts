import parseTemplateToTokens from "./parseTemplateToTokens"
import renderTemplate from './renderTemplate'

interface MyTemplateEngine{
    render:(templateStr: string,data: object) => string
}

let mte: MyTemplateEngine = {
    render:(templateStr: string,data: object): string=>{
        // console.log(templateStr,data)
        let tokens: any[] = parseTemplateToTokens(templateStr);
        let result: string = renderTemplate(tokens,data);
        return result;
    }
}
export default mte