var fs = require('fs');
var path = require('path');

var folderPath = path.join(__dirname, 'mi_carpeta');
var filePath = path.join(folderPath, 'mi_archivo.txt');

fs.mkdir(folderPath, function(err) {
  if (err) {
    console.error('Error al crear la carpeta:', err);
  } else {
    console.log('Carpeta creada');
    
    fs.writeFile(filePath, 'Este es el contenido inicial del archivo.', function(err) {
      if (err) {
        console.error('Error al crear el archivo:', err);
      } else {
        console.log('Archivo creado y contenido escrito');
        
        fs.readFile(filePath, 'utf8', function(err, data) {
          if (err) {
            console.error('Error al leer el archivo:', err);
          } else {
            console.log('Contenido del archivo leído:', data);

            fs.unlink(filePath, function(err) {
              if (err) {
                console.error('Error al eliminar el archivo:', err);
              } else {
                console.log('Archivo eliminado');

                fs.rmdir(folderPath, function(err) {
                  if (err) {
                    console.error('Error al eliminar la carpeta:', err);
                  } else {
                    console.log('Carpeta eliminada');
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});

