function lookup(dataObj: any,propName: string){
    let index=propName.indexOf('.');
    if(index!==-1&&index!==0){
        let props = propName.split('.');
        let data: any = dataObj;
        for (let i = 0; i < props.length; i++) {
            let prop: string = props[i];
            if(prop!=="item"){
                data = data[prop];
            }
        }
        return data;
    }else{
        return dataObj[propName];
    }
}

export default lookup