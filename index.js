const moongose =  require("mongoose");

const app = require("./app");

const PORT_SERVER = process.env.PORT || 3977;




const {  API_VERSION,IP_SERVER,portDb} = require("./config");


moongose.connect(`mongodb://${IP_SERVER}:${portDb}/bunkandb`,{useNewUrlParser:true,useUnifiedTopology:true},
(err,res) => {

    if(err){
        throw err;
    }else{
        console.log("La coneccion a la BD es correcta");

        app.listen(portDb,() => {
            console.log("##########");
            console.log("#### BIENVENIDO A TU API REST####");
            console.log(`http://${IP_SERVER}:${portDb}/api/${API_VERSION}/`);
        } )
    }

}
)










