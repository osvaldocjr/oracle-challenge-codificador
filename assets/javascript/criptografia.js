* {
    padding:0px;
    margin:0px;
    font-family:Arial, Helvetica, sans-serif;
    box-sizing:border-box;
}


/*Body*/
.white-theme body {
    display:flex;
    flex-direction:column;
    background:#f3f5fc;
}
.container {
    display:flex;
    justify-content:center;
    margin:auto;
}

.dark-theme body {
    background:#000;
}


/*Aside*/
.white-theme aside {
    height:calc(100vh - 110px);
    width:350px;
    border-radius:30px;
    background:#fff;
    margin-top:20px;
    margin-left:10px;

    display:flex;
    align-items:center;
    justify-content:center;
}

.texto-espera {
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}
.procurando {
    height:250px;
    width:250px;
}

.white-theme .esperando-mensagem {
    color:#000;
    margin:10px 0;
    text-align:center;
    font-size:24px;
}

.white-theme .digite-texto {
    color:#6d6d6d;
    font-weight:500;
    text-align:center;
    font-size:14px;
}

.resultadoCriptografado {
    height:150px;
    height:250px;
    margin:0px;
}


.white-theme .aside-texto-final {
    height:auto;
    width:350px;
    border-radius: 30px;
    background:#fff;
    margin-top: 20px;
    margin-left: 10px;

    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
}

.white-theme .textoFinal {
    height:95%;
    width:90%;
    margin-top:20px;

    word-wrap:break-word;
    font-size:18px;
    font-weight:400;
    line-height:27px;
    color:#333;
    
    background:none;
    border:none;
    outline:0;
}


.white-theme button.copia.copiado {
    border:none;
    font-size: 20px;
    background:#a1a1a1;
    border: 1px solid #000;
    color: #000;
  }
  

.white-theme .copia {
    margin:20px 0;

    border-radius:30px;
    font-size:16px;
    font-weight:700;
    height:60px;
    width:300px;
    cursor:pointer;

    color:#0A3871;
    background:none;
    border:1px solid #0A3871;
}

/*Dark theme*/
.dark-theme aside {
    background:none;
    border:2px solid #fff;
}

.dark-theme .esperando-mensagem {
    color:#fff;
}

.dark-theme .digite-texto {
    color:#ddd;
}

.dark-theme .aside-texto-final {
    background:#ccc;
    border:none
}

.dark-theme .textoFinal {
    color:#222;
}

.dark-theme .copia {
    color:#222;
    background:#eee;
    border:1px solid #000;
}

/*Main*/

main {
    height:auto;
    margin-bottom:20px;
}
.white-theme .inserir-texto {
    height:auto;
    width:100%;
    font-size:28px;
    font-weight:400;
    line-height:35px;
    color:#0A3871;

    margin:20px 0;
    box-shadow:1px 1px 10px #000;
    background:none;
    border:none;
    outline:0;
    resize:none;
}

.texto-vazio::placeholder {
    text-align:center;
    color:#f00;
    font-weight:bold;
    font-size:26px;
}

.white-theme .regras {
    display:flex;
    font-size:12px;
    gap:5px;
    color:#000;
}

.exclamacao {
    text-align:center;
    color:#fff;
    font-size:13px;
    height:15px;
    width:15px;
    border-radius:10px;
    background-color:#777;
}


.buttons {
    margin-top:5px;
}
.button {
    border-radius:30px;
    font-size:16px;
    font-weight:700;
    height:60px;
    width:300px;
    cursor:pointer;
}
.white-theme .criptografar {
    border:none;
    color:#fff;
    background:#0A3871;
}
.white-theme .descriptografar {
    color:#0A3871;
    background:none;
    border:1px solid #0A3871;
}

.white-theme button.descriptografar.nao-enviado,
.white-theme button.criptografar.nao-enviado {
    font-size:18px;
    border:none;
    color:#000;
    background-color:#f00;
    transform: rotate(2deg);
    animation: shake 0.2s linear infinite;
}

@keyframes shake {
    0% { transform: rotate(5deg); }
    50% { transform: rotate(-5deg); }
    100% { transform: rotate(5deg); }
}

/*Dark theme*/
.dark-theme .inserir-texto {
    box-shadow:1px 1px 10px #fff;
    color:#fff;
}

.dark-theme .regras {
    color:#fff;
}

.dark-theme .criptografar {
    border:1px solid #fff;
    color:#fff;
    background:#222;
}

.dark-theme .descriptografar {
    color:#bbb;
    background:#333;
    border:1px solid #fff;
}




@media (max-width:1000px) {
    .container {
        height:100%;
        flex-direction:column;
        margin-top:20px;
    }
    main {
        height:100%;
        margin:auto;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .white-theme .inserir-texto {
        height:100%;
    }
    .buttons {
        margin-bottom:20px;
    }

    .procurando {
        display:none;
    }
    .white-theme aside {
        width:100%;
        height:150px;
    }
    .white-theme .aside-texto-final {
        margin: auto;
        width: 90%;
        height: 100%;
    }
    .white-theme aside {
        margin-bottom:20px;
    }
    


    .white-theme footer {
        margin-top:0px;
        bottom:0;
        width: 100%;
        z-index: 1000; 
    } 
}

@media (max-width: 650px) {
    .white-theme .inserir-texto {
        height:100%;
        padding:0 2px;
        margin:20px 20px 20px 0;
    }
    .white-theme .regras {
        justify-content:center;
    }
    .white-theme .buttons {
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    .white-theme .criptografar {
        margin-bottom:10px;
    }

    .white-theme aside {
        width:100%;
        margin-left:0;
        margin-top:20px;
        margin-bottom:20px;
    }

}

@media (max-width:500px) {
    .white-theme aside {
        width:95%;
        margin:20px auto;
    }
    .white-theme .inserir-texto {
        margin:20px 10px;
        width:90%;
    }
}
