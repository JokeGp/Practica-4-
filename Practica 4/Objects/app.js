let persona = {
  nombre: "Takuya",
  apellido: "Yamashiro",
  getName: function () {
    return `${this.apellido} ${this.nombre} `;
  },
  domicilio: {
    calle: `Madero #144`,
    colonia: `Centro`,
    cp: 28000,
    municipio: `Colima`,
  },
  getDomicilio: function () {
    return `${this.domicilio.calle} Colonia: ${this.domicilio.colonia} CP: ${this.domicilio.cp},Colima`;
  },
};
// console.log(persona.nombre);
// console.log(persona.apellido);
console.log(persona.getName());
// console.log(persona.domicilio);
console.log(persona.getDomicilio());
