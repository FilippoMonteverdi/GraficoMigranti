function leggiFile(input){

    let file = input.files[0] 
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
    for (var i = 0; i < 20; i++){
        ctx.fillText(10000*i,5,800-((10000*i)/250));
        ctx.moveTo(50,795-(800/20)*i);
        ctx.lineTo(45,795-(800/20)*i);
        ctx.stroke();
    }
    for (var i = 1; i < conte.length; i++){
        ctx.fillText(1996+i,38+75*i,815);
        ctx.moveTo(50+75*i,800);
        ctx.lineTo(50+75*i,805);
        ctx.stroke();
    }
    ctx.moveTo(50,800);
    var an = 50
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
        console.log(parseInt(contenitore[1].replaceAll('"', "")))
        ctx.lineTo(an, 800-(parseInt(contenitore[1].replaceAll('"', ""))/250));
        ctx.font = "15px Arial";
        ctx.fillText(contenitore[1].replaceAll('"', ""),an + 15, 790-(parseInt(contenitore[1].replaceAll('"', ""))/250));
        an+=75;
        ctx.stroke();
    }
}
