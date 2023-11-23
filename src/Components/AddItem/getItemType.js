export default function getItemType(string){
    let typeNum;
    if(string === "Transportation"){
        typeNum = 0;
    }
    else if(string === "Accomodation"){
        typeNum = 1;
    }
    else {
        typeNum = 2;
    }
    return typeNum;
}