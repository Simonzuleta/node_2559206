//PASOS DE INSTALACION DE PROYECTO NODE
//npm init -y
//npm install express
//npm install hbs
//siempre se siguen estos pasos para crear un proyecto
//DESCARGAR ADMIN LTE
//configurar las carpetas que se necesitenç
//copiar el CODIGO QUE NECESITO Y METERLO DENTRO DE LA CARPETA DE HOME !!!

const express = require ('express')
const path = require ('path')
const hbs = require('hbs')
const app = express()



const puerto = 8581

//Servidor de contenido estatico
app.use(express.static('public'))


//CONFIGURACION DEL DIRECTORIO DE LAS VISTAS HBS
app.set('views',path.join(__dirname+'/public/views'))
app.set('view engine','hbs')

//CONFIGURACION DEL DIRECTORIO QUE GUARDARA LOS ARCHIVOS PARTIALS HBS
hbs.registerPartials(__dirname + '/public/views/partials');






app.get('/',(req,res) => {
    //res.write('Home')
    //res.end()//siempre poner esto SI NO la pagina no va cargar
    res.render('home',
    {
    titulo: 'Home',
    nombre: 'Simon Zuleta'
    
    
    
})
})

app.get('/productos',(req,res) => {
    //res.write('Home')
    //res.end()//siempre poner esto SI NO la pagina no va cargar
    res.render('productos',
    {
    home:'Home',
    titulo: 'Listado productos',
    nombre: 'Simon Zuleta',
    rol1: 'Admin'
    
    
    
})
})



app.listen(puerto,()=>{
    console.log(`escuchando por el puerto ${puerto}`)
})
