import renderTemplate from './renderTemplate'
function parseArray(token: any[],arr: any[]){
    let resultStr: string = "";
    for (let i = 0; i < arr.length; i++) {
        let currentData = arr[i];
        resultStr+=renderTemplate(token[2],{
            ".":currentData,
            ...currentData
        });
    }
    return resultStr;
}

export default parseArray