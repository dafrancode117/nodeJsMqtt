const mosca = require('mosca'); // Importacion del modulo mosca

const broker = new mosca.Server({
   port: 9000
}); // Creamos un servidor MQTT con conexion en el puerto 9000

// Evento "ready" MQTT que indica que esta listo para aceptar conexiones de clientes
broker.on('ready', () =>{
   console.log("Broker mosca corriendo");
})
// Evento "clientConnected" MQTT que indica que un cliente se ha conectado a un servidor
broker.on('clientConnected', (client) =>{
   console.log(`Nuevo cliente ${client.id}`)
})
// Evento "published" MQTT que indica que se ha publicado un mensaje en el servidor
broker.on('published', (packet) => {
   console.log(packet.payload.toString())
})