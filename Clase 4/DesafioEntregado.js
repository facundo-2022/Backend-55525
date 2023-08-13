import fs from "fs";

class Contenedor {
  constructor(file) {
    /*el contructor recibe un archivo file*/
    this.file = file; /*con el this hacemos referencia a ese archivo file*/
  }

  async save(obj) {
    try {
      const objects = await this.getAllObjects();
      const lastId =
        objects.length > 0
          ? objects[objects.length - 1].id
          : 0; /*alternario si es mayor a 0 volvemos a objects my incrementamos lo que esta entre corchete.*/
      const newId = lastId + 1;
      const newObj = {
        id: newId,
        ...obj,
      }; /*utilizamos el spread operator para traer lo que tenemos en obj.*/
      objects.push(newObj);
      await this.saveObjects(objects);
      return newId;
    } catch (error) {
      throw new Error("Error saving objects");
    }
  }

  async getById(id) {
    try {
      const objects = await this.getAllObjects();
      const obj = objects.find((o) => o.id === id);
      return obj || null;
    } catch (error) {
      throw new Error("Error al obtener el id");
    }
  }

  async getAll() {
    try {
      const objects = await this.getAllObjects();
      return objects;
    } catch (error) {
      throw new Error("Error al obtener los objectos");
    }
  }

  async deleteById(id) {
    try {
      let objects = await this.getAllObjects();
      objects = objects.filter((o) => o.id !== id);
      await this.saveObjects(objects);
    } catch (error) {
      throw new Error("Error al eliminar el objecto");
    }
  }

  async deleteAll() {
    try {
      await this.saveObjects([]);
    } catch (error) {
      throw new Error("Error al eliminar los objetos");
    }
  }

  async getAllObjects() {
    try {
      const data = await fs.promises.readFile(this.file, "utf8");
      return data ? JSON.parse(data) : [];
    } catch (error) {
      return [];
    }
  }

  async saveObjects(objects) {
    try {
      await fs.promises.writeFile(this.file, JSON.stringify(objects, null, 2));
    } catch (error) {
      throw new Error("Error al guardar objetos");
    }
  }
}

const main = async () => {
  const productos = new Contenedor("productos.txt");

  //obtener objetos por ID
  const obj = await productos.getById(4);
  console.log("Objeto Obtenido", obj);

  //guardar objetos
  const id = await productos.save(
    { title: "Producto 3", price: 100 },
    { title: "Producto 4", price: 400 }
  );
  console.log("Objeto guardado con ID:", id);

  //obtener todos los objetos
  //const allObjects = await productos.getAll();
  //console.log("Objetos guardados", allObjects);

  ///eliminar un Objeto
  //await productos.deleteById(1);
  //console.log("Objeto eliminado");
};

main().catch((error) => console.error(error));
