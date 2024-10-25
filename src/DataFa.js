export const lineChartData = {
  labels: [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ],
  datasets: [
    {
      label: "Lineas",
      data: [300, 500, 600, 200, 800, 729, 450],
      borderColor: "rgb(75, 192, 192)",
    },

    {
      label: "Lineas",
      data: [600, 300, 400, 100, 700, 229, 560],
      borderColor: "red",
    },
  ],
};

export const pruebaCharData = {
    datasets: [{
      label: 'First Dataset',
      data: [{
        x: 19,
        y: 30,
        r: 15
      }, {
        x: 40,
        y: 10,
        r: 10
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }]
  };


export const bubbleChartData = {
    datasets: [{
      label: 'Diametro',
      data: [{
        y: 10,
        x: 12,
        r: 20,
      }, {
        y: 14,
        x: 14,
        r: 20,
      },{
        y: 15,
        x: 15,
        r: 20,
      }
    ],
      backgroundColor: 'rgb(255, 99, 132)'
    }]
  };




export const barChartData = {
  labels: ["Enero", "Febero", "Marzo", "Abril", "Mayo", "Junio", "Julio"],

  datasets: [
    {
      label: "Gastos",
      data: [300, 500, 600, 200, 800, 729, 400],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 205, 189, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",

        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(153, 102, 255)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
};
