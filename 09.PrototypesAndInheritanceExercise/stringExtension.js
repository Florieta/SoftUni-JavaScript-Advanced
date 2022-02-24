(function(){
    String.prototype.ensureStart = function(str){
        let toStr = this.toString();
        if(toStr.startsWith(str)){
            return toStr;
        }else{
            return str + toStr;
        }
    }
    
    String.prototype.ensureEnd = function(str){
        let toStr = this.toString();
        if(toStr.endsWith(str)){
            return toStr;
        }else{
            return toStr + str;
        }
    }
    String.prototype.isEmpty = function(str){
        return this.length == 0;
    }
    String.prototype.truncate = function(n){
        let toStr = this.toString();
        if (this.length <= n){
            return toStr;
        }
        if(this.length < 4){
            let str = toStr.substring(0, this.length - n);
            str = str + ".".repeat(n);
            return str;
        }else{
            const splitted = toStr.split(" ");
            if(splitted.length == 1){
                return toStr.substring(0, n-3) + "...";
            }else{
                let result = "";
                for(let i = 0; i < splitted.length; i++){
                    
                    if(result.length + splitted[i].length <= n - 3){
                        result +=" " + splitted[i];
                    }else{
                        return result.trim() + "...";
                    }
                }
                return result + "...";
            }
        }
    }
    String.format = function(str,...params){
        let result = str;
        for (let i = 0; i < params.length; i++){
            result = result.replace(`{${i}}`, params[i]);
        }
        return result;
    }
    })();