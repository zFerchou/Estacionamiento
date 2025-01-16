function actualizarReloj() {
    const currentTime = document.getElementById('current-time') as HTMLParagraphElement;
    const currentDate = document.getElementById('current-date') as HTMLParagraphElement;
  
    setInterval(() => {
      fetch('/api/hora') // Hacer una petición GET a la API para obtener la hora y la fecha
        .then((response) => response.json())
        .then((data) => {
          currentTime.textContent = 'Hora: ' + data.hora;
          currentDate.textContent = 'Fecha: ' + data.fecha;
        })
        .catch((error) => {
          console.error('Error al obtener la hora:', error);
        });
    }, 1000); // Actualizar cada segundo
  }
  
  function crearAlarma() {
    const alarmTime = (document.getElementById('alarm-time') as HTMLInputElement).value;
  
    fetch('/api/alarms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ time: alarmTime }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Alarma creada:', data.alarm);
        // Aquí podrías realizar alguna acción adicional, como mostrar un mensaje de éxito o actualizar la lista de alarmas
      })
      .catch((error) => {
        console.error('Error al crear la alarma:', error);
      });
  }
  
  window.onload = function() {
    actualizarReloj();
  };
  