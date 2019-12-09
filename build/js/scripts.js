window.onload = () => {
  const data = [
    {
      geometry: {
        type: 'Point',
        coordinates: [55.45, 37.37],
      },
      properties: { name: 'Москва' },
    }, {
      geometry: {
        type: 'Point',
        coordinates: [59.57, 30.19],
      },
      properties: { name: 'Санкт-Петербург' },
    }, {
      geometry: {
        type: 'Point',
        coordinates: [55.01, 82.55],
      },
      properties: { name: 'Новосибирск' },
    }, {
      geometry: {
        type: 'Point',
        coordinates: [56.5, 60.35],
      },
      properties: { name: 'Екатеринбург' },
    }, {
      geometry: {
        type: 'Point',
        coordinates: [56.19, 44.0],
      },
      properties: { name: 'Нижний Новгород' },
    }, {
      geometry: {
        type: 'Point',
        coordinates: [55.47, 49.06],
      },
      properties: { name: 'Казань' },
    }, {
      geometry: {
        type: 'Point',
        coordinates: [55.09, 61.24],
      },
      properties: { name: 'Челябинск' },
    }, {
      geometry: {
        type: 'Point',
        coordinates: [54.58, 73.23],
      },
      properties: { name: 'Омск' },
    }, {
      geometry: {
        type: 'Point',
        coordinates: [53.11, 50.07],
      },
      properties: { name: 'Самара' },
    }, {
      geometry: {
        type: 'Point',
        coordinates: [47.14, 39.42],
      },
      properties: { name: 'Ростов-на-Дону' },
    }, {
      geometry: {
        type: 'Point',
        coordinates: [54.44, 55.58],
      },
      properties: { name: 'Уфа' },
    }, {
      geometry: {
        type: 'Point',
        coordinates: [56.0, 92.52],
      },
      properties: { name: 'Красноярск' },
    }, {
      geometry: {
        type: 'Point',
        coordinates: [51.4, 39.12],
      },
      properties: { name: 'Воронеж' },
    }, {
      geometry: {
        type: 'Point',
        coordinates: [58.0, 56.14],
      },
      properties: { name: 'Пермь' },
    }, {
      geometry: {
        type: 'Point',
        coordinates: [48.42, 44.3],
      },
      properties: { name: 'Волгоград' },
    },
  ];

  function initialize() {
    const options = {
      center: [0, 0],
    };
    const earth = new WE.map('globe', options);
    earth.setView([0, 40], 2);
    WE.tileLayer(
      'https://webglearth.github.io/webglearth2-offline/{z}/{x}/{y}.jpg',
      {
        tileSize: 256,
        bounds: [
          [-85, -180], [85, 180],
        ],
        minZoom: 0,
        maxZoom: 16,
        attribution: 'WebGLEarth example',
        tms: true,
      },
    ).addTo(earth);

    data.forEach((item) => {
      const marker = WE.marker(item.geometry.coordinates).addTo(earth);
      marker.bindPopup(item.properties.name, {
        maxWidth: 150,
        closeButton: true,
      });
    });
  }
  initialize();
};