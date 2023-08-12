import fs from "fs";

class Contenedor {
  constructor(file) {
    /*el contructor recibe un archivo file*/
    this.file = file; /*con el this hacemos referencia a ese archivo file*/
  }
  consultarObjetos = async () => {
    if (fs.existsSync(file)) {
      const datos = await fs.promises.readFile(this.file, "utf-8");
      console.log(datos);
      const objeto = JSON.parse(datos);
      return objeto;
    } else {
      return [];
    }
  };

  saveObjeto = async (objetoAgregado) => {
    const objetosAgregados = await this.consultarProduct();

    objetoAgregado.id = Date.now();

    objetosAgregados.push(objetoAgregado);

    await this.subirObjetos(objetosAgregados);
  };

  getById = async (id, objeto) => {
    const objetos = await this.consultarObjetos();

    const newObjetos = objetos.filter((objects) =>
      objects.id == id ? Object.assign(objects, objeto) : objects
    );

    await this.subirObjetos(newObjetos);
  };

  subirObjectos = async (id) => {
    await fs.promises.writeFile(this.file, JSON.stringify(objects, null, "\t"));
  };

  /*
  consultarObjeto = async (objects) => {
    await fs.promises.readFile(this.file, JSON.stringify(objects, null, "\t"));
  };

  deleteObject = async (id) => {
    const eliminarObject = await this.consultarObjetos();

    const objectEliminado = eliminarObject.filter(
      (Objects) => objects.id != id
    );
    console.log(objectEliminado);
    await this.subirObjetos(pobjectEliminado);*/
  // };
}
