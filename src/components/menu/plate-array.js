


export const plateArray = (array) => {

    if(Array.isArray(array)) {
            
        const arr = []
        array.map(p => {

            const sec = p.time.indexOf("seconds");
            const hour = p.time.indexOf("hour");
            let arrayTime = p.time.split(" ");
            let time = "";
            if(sec !== -1) time = "1 min"; 
            else if(hour !== -1) {
              if(arrayTime[2] > 0 && arrayTime[2] < 10) {                 
                time = arrayTime[0] + "h0" + arrayTime[2];
              }
              else if(arrayTime[2] == 0) time = arrayTime[0] + "h";
              else time = arrayTime[0] + "h" + arrayTime[2];
            }
            else time = arrayTime[0] + " min";
            if(!p.paid && p.time.indexOf("hour") !== -1) time += " min"; 
            p.time = time;
             
            arr.push(p);
        });
        return arr.reverse();      
    }
    else return [];
}