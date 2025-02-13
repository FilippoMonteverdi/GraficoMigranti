function leggiFile(input){
//presa in input del file
    let lettoreF = new FileReader() 
    lettoreF.readAsText(file);
    
    lettoreF.onload = function() {
        let contenuto = lettoreF.result; 
        creaTab(contenuto);
    }
}

function creaTab(contenuto){
    var conte = contenuto.split("\n");
    var c = document.getElementById("grafico");
    var ctx = c.getContext("2d");
    ctx.moveTo(50,0);
    ctx.lineTo(50, 800);
    ctx.stroke();
    ctx.lineTo(1880,800);
    ctx.stroke();
    ctx.font = "10px Arial";
    var max = 0;
    for (var i = 0; i < conte.length; i++){
        var contenitore = conte[i].split(",");
        if(parseInt(contenitore[1].replaceAll('"', "")) > max){
            max = parseInt(contenitore[1].replaceAll('"', ""));
        }
    }
    var s = max / 15;
    var c = true;
    var caccaro = 0;
    while (c == true){
        caccaro++;
        if(max/caccaro < 750){
            c = false;
        }
    }
    for (var i = 0; i < 15; i++){
        ctx.fillText(parseInt(s*i),5,800-((s*i)/caccaro));
        ctx.moveTo(50,795-(s*i)/caccaro);
        ctx.lineTo(45,795-(s*i)/caccaro);
        ctx.stroke();
    }
    var space = (1880-40)/conte.length;
    for (var i = 1; i < conte.length; i++){
        ctx.fillText(1996+i,40+space*i,815);
        ctx.moveTo(50+space*i,800);
        ctx.lineTo(50+space*i,805);
        ctx.stroke();
    }
    ctx.moveTo(50,800);
    var mucs = 50
    for (var j = 0; j < conte.length; j++){
        var contenitore = conte[j].split(","); 
        var tabella = document.getElementById("sus");
        var riga = document.createElement("tr"); 
        var ele_anno = document.createElement("th"); 
        ele_anno.innerHTML=contenitore[0].replaceAll('"', "");
        var ele_numero = document.createElement("th");
        ele_numero.innerHTML=contenitore[1].replaceAll('"', "");
        riga.appendChild(ele_anno); 
        riga.appendChild(ele_numero); 
        tabella.appendChild(riga); 
        ctx.lineTo(mucs, 800-(parseInt(contenitore[1].replaceAll('"', ""))/caccaro));
        ctx.font = "15px Arial";
        ctx.fillText(contenitore[1].replaceAll('"', ""),mucs + 15, 790-(parseInt(contenitore[1].replaceAll('"', ""))/caccaro));
        mucs+=space;
        ctx.stroke();
    }
}
