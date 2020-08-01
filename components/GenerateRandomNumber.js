var GenerateRandomNumber = ()=>{
    var fourChar = ()=> {
        return ( (1 + Math.random()) * 0x10000 ).toString(16).substring(1);
    }
    return fourChar() + '-' + fourChar() + '-' + fourChar() + '-' + fourChar() + fourChar();
};

export default GenerateRandomNumber;