interface IScanner{
    scanUtil: (str: string)=> string;
    scan: (str: string)=> string;
    eos: ()=> boolean;
}

class Scanner implements IScanner{
    templateStr:string;
    pos: number;
    tail: string;
    length: number;

    constructor(templateStr: string){
        this.templateStr=templateStr;
        this.length = this.templateStr.length;
        this.pos = 0;
        this.tail = this.templateStr;
    }
    scanUtil(str: string): string{
        const pos_back = this.pos;
        while(!this.eos()&&this.tail.indexOf(str)!==0){
            this.pos++;
            this.tail = this.templateStr.substring(this.pos);
        }
        return this.templateStr.substring(pos_back,this.pos).trim();
    }
    scan(str: string): string{
        const pos_back = this.pos;
        if(this.tail.indexOf(str)==0){
            this.pos += str.length;
            this.tail = this.templateStr.substring(this.pos);
        }
        return this.templateStr.substring(pos_back,this.pos);
    }
    eos(): boolean{
        return this.pos >= this.length;
    }
}

export default Scanner