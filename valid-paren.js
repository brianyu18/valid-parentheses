var isValid = function(s) {
   let hash = {
       '(':')',
       '{':'}',
       '[':']'
   }

    let stack = []
    for(let i = 0; i<s.length; i++){
        var check = s[i]
        if(hash[check]){
            stack.push(hash[check])
        } else {
            if(s[i] !== stack.pop()){
                return false
            }
        }
    }
    if(stack.length !== 0){
        return false
    } else {
        return true
    }
};
