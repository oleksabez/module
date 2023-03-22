export class MRTX{
    txt;
    constructor(inp){
        this.txt = inp;
    }
    makeElement(){
        let el = document.createElement('p');
        el.innerText = this.txt;
        document.getElementsByTagName('body')[0].appendChild(el);
    }
}