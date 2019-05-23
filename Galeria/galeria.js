
    lista=[{"id":1,"imagen":"https://www.pubg.com/wp-content/uploads/2018/06/sanhok__00005.jpg"},
    {"id":2,"imagen":"https://cnet1.cbsistatic.com/img/Rhgg5EZC74uw82s8YI4_ELpGp_Q=/1600x900/2018/01/23/a60fc398-8c80-4998-baad-d28a3ab40473/pubg-playerunknowns-battlegrounds-3.png"},
    {"id":3,"imagen":"https://img.elcomercio.pe/files/article_content_ec_fotos/uploads/2018/12/30/5c2976ea598f1.jpeg"},
    {"id":4,"imagen":"https://pbs.twimg.com/media/DvhsHU0XcAItRFK.jpg"},
    {"id":5,"imagen":"https://k61.kn3.net/taringa/F/3/C/6/E/5/20legend/D0D.jpg"},
    {"id":6,"imagen":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPRQrc2DowbzcTb8XUHNfK7JgsONOb5LfDOiTcjn2zFSjgXyAf"},
    {"id":7,"imagen":"https://i.pinimg.com/originals/9c/4a/51/9c4a519f11d7143c4b8e2e4f78c8bef8.jpg"},
    {"id":8,"imagen":"https://media.aweita.larepublica.pe/678x508/aweita/imagen/2018/02/08/noticia-las-sorprendentes-declaraciones-de-cristiano-ronaldo-sobre-lionel-messi-portada.jpg"},
    {"id":9,"imagen":"http://plantillo.net/uploads/U1ad04fcp2kR9Hux7JHm-1518420297.png"},
    {"id":10,"imagen":"https://media.metrolatam.com/2019/04/08/gameofthronesfjkladafkldkf-dd7fc66c338eb986fa7c44215bfd0c21-600x400.jpg"}];
    
    imag = [1,2,3,4,5];
    var cont=0;
    
    function inicio(){
        for (i=0 ; i<5; i++){
            
            imag[i] = Math.floor(Math.random() * (10));    
                      
        }
        cont = 0;
        
        verificar();
        imprimir();
    }
    
    //creo una función que muestre la imagen en una section ya creada en el archivo html,
    function imprimir(){
        console.log(imag);
        //creo codigo html como texto tomando el valor de la lista.
        var texto = "<img src="+lista[imag[cont]].imagen+">";
        //ingresa el codigo HTML al section con id imagen.
         window.document.getElementById("imagen").innerHTML =texto;
        
    }
    function verificar(){
        //Verfica si ya se esta en la ultima imagen para deshabilitar el boton siguiente
        if(cont==5){
             window.document.getElementById("btn_siguiente").disabled = true;
            window.document.getElementById("btn_anterior").disabled = false;
       
        }
        //conpruebo si se está mostrando la primera imagen par deshabilitar el boton anterior
        else if(cont == 0){
                  window.document.getElementById("btn_anterior").disabled = true;
                window.document.getElementById("btn_siguiente").disabled = false;
       
        }else{
             window.document.getElementById("btn_siguiente").disabled = false;
                  window.document.getElementById("btn_anterior").disabled = false;
            
       
        }
    }
    
    function anterior(){
        cont--;
        verificar();
        imprimir();
        
    }
    function siguiente(){
        
        cont++;
        verificar();
        imprimir();
        
        
    }