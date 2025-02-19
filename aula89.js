const btn_imp=document.getElementById("btn_imp")

btn_imp.addEventListener("click",(evt)=>{
    const conteudo = document.getElementById("tabela").innerHTML;
    let estilo = "<style>";
    estilo = estilo + "table{width: 100%;font:25px Calibre;}";
    estilo = estilo + "table, th, td {border: solid 2px #888; border-collapse: collapse;";
    estilo = estilo + "padding: 4px 8px; text-align: center;}";
    estilo = estilo + "</style>";
    //window.print()//imprime a tela inteira
    const win = window.open("","","height=700,width=700");
    win.document.write("<html><head>");
    win.document.write("<title>Cfb Cursos</title>");
    win.document.write(estilo);
    win.document.write("</head>");
    win.document.write("<body>");
    win.document.write(conteudo);
    win.document.write("</body></html>");
    win.print()

})