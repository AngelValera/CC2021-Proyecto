## Definición de las herramientas

Para la realización de este proyecto se van a utilizar diversas herramientas, a continuación se explica la elección de cada una de ellas:

### Lenguaje

En cuanto al lenguaje de programación, tras valorar lenguajes como Python, Node.js o Ruby he decidido finalmente realizar el proyecto en Node.js. El principal motivo es porque aunque Python me es más conocido y tengo mayor experiencia, **[Node.js](https://nodejs.org/es/)** me parece  muy interesante y me gustaría conocerlo más y tener más experiencia trabajando con él. 

Además, es un lenguaje muy conocido hoy día y tiene una gran cantidad de módulos y paquetes disponibles, así como una gran comunidad de desarrolladores detrás.

### Framework

En cuanto a frameworks a utilizar estuve valorando entre Next.JS y Express. Finalmente me decidí por usar **[Express](https://expressjs.com/es/)**. El motivo principal es porque me pareció que podría encontrar mayor documentación y me resultaría más sencillo de aprender a utilizar.


### Gestión de base de datos

En cuanto a la gestión de la base de datos, después de documentarme he podido ver que lo más usado con Node.js es usar la base de datos no relacional **[MongoDB](https://www.mongodb.com/es)**, por lo que he decidido hacer caso a la mayoría y utilizarlo, además, tengo poca experiencia usando este tipo de base de datos por lo que, si hago uso de ella podría tener una mayor experiencia.

### Configuración distribuida

Para el servicio de configuración distribuida, he podido ver distintas opciones como son Consul, etcd o Zookeeper. Después de ver qué puede ofrecer cada uno en este [artículo](https://technologyconversations.com/2015/09/08/service-discovery-zookeeper-vs-etcd-vs-consul/), creo que me decantaré por usa **[etcd](https://etcd.io/)** en gran parte por su sencillez y por la gran documentación existente, además de tener la posibilidad de acceder a este almacenamiento clave-valor a través de HTTP. 

### Servicio de Logs

En cuanto al servicio de [logging](https://freddyach.wordpress.com/2016/07/05/nodejs-logging-con-winston-morgan/) para Node.js he podido ver que uno de los más populares es **[Winston](https://www.npmjs.com/package/winston)** además, me ha parecido bastante sencillo el poder trabajar con él, por tanto, será mi elección. 

Conjuntamente, usaré **[Morgan](https://www.npmjs.com/package/morgan)** el cual es un middleware para la captura de solicitudes HTTP para Node.js para su posterior registro y seguimiento.

### Integración continua

Para la integración contínua, he decidido usar **[TravisCI](https://travis-ci.org/)** ya que tengo cierta experiencia con él y me parece muy sencillo de utilizar junto con Github.

