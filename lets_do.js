let fs = require('fs');
var file = fs.readFileSync('./1-node-farm/starter/txt/start.txt', 'utf8');
var write = fs.writeFileSync('./1-node-farm/starter/txt/start.txt', textWritten);
/* console.log(file); */

function display(){
    let i=1;
    while(i===1){
        var textShown = document.getElementById("display");
        var textWritten = document.getElementById("here").value;
        var update = document.getElementById("update").value;
        textShown.innerHTML = file;
        if(textWritten!=null){
            textShown.innerHTML = write;
        }
        if(update=='y'){
            return display();
        }
        
      
    }
}
