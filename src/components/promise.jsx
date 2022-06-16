let APIPromise = new Promise(
    function(resolve,reject){
        setTimeout(
            () => {
                if (randomError){
                    reject("Error en le promesa")
                }
                resolve ("Hola")
            },
            2000
        )
    }
);

APIPromise.then(
    (respuesta) => {
        console.log(respuesta);
    }
).catch{
    (error) => {
        console.error(errorMsj);
    }
}