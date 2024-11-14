 // Inicializar Parse
 Parse.initialize("3elBS1VQ2wWHPW9BNAJ3cvi1eihlseSv3olyP5xU", "frTFYgtSiLS6PyCVpUsJfXLq42fOZoi9hLMhHZjW");
 Parse.serverURL = 'https://parseapi.back4app.com';
 
 // Función para guardar el formulario en Back4App
 function guardarFormulario() {
   // Obtener el valor seleccionado del radio button
   const generoSeleccionado = document.querySelector('input[name="genero"]:checked').value;
 
   // Crear un nuevo objeto en la clase "Formulario"
   const Formulario = Parse.Object.extend("Formulario");
   const nuevoRegistro = new Formulario();
 
   // Asignar el valor del radio button al campo "genero" en la base de datos
   nuevoRegistro.set("genero", generoSeleccionado);
 
   // Guardar el registro en la base de datos
   nuevoRegistro.save()
     .then((registro) => {
       alert("Formulario guardado con éxito");
       console.log("Registro guardado:", registro);
     })
     .catch((error) => {
       alert("Error al guardar el formulario");
       console.error("Error al guardar el registro:", error);
     });
 }
 