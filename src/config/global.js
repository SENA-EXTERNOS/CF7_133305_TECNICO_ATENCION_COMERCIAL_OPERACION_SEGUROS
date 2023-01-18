export default {
  global: {
    componenteFormativo:
      'Resultados y conclusiones cuantitativas sobre la analítica de datos',
    descripcionCurso:
      'Las organizaciones, en sus procesos del manejo de datos, deben incorporar herramientas como: la analítica de datos, los modelos matemáticos, las herramientas tecnológicas y la aplicación de la estadística en la <em>Big data</em>, con el fin de obtener resultados en la identificación de relaciones cuantitativas de los datos procesados y, asimismo, poder interpretar los patrones identificados y presentar los informes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Analítica de datos: herramientas, algoritmos y modelos matemáticos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Herramientas tecnológicas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Aplicación de la estadística',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Uso de tecnologías para el análisis de grandes volúmenes de datos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Uso de tecnologías para el análisis de grandes volúmenes de datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). <em>Técnicas para el análisis de datos</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=pjTI4UOgkM8',
    },
    {
      tema: 'Uso de tecnologías para el análisis de grandes volúmenes de datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). <i>Analítica de datos</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=bXdteqmjs2o',
    },
    {
      tema: 'Uso de tecnologías para el análisis de grandes volúmenes de datos',
      referencia:
        'Sánchez, M. (2021). Técnicas e instrumentos de recolección de información: análisis y procesamiento realizado por el investigador cualitativo. <em>UISRAEL Revista Científica</em>, 8(1), 107-121.',
      tipo: 'Artículo',
      link: 'https://doi.org/10.35290/rcui.v8n1.2021.400',
    },
    {
      tema: 'Uso de tecnologías para el análisis de grandes volúmenes de datos',
      referencia:
        'Hernández, E., Duque, N. & Moreno, J. (2017). Big Data: una exploración de investigaciones, tecnologías y casos de aplicación. <em>TecnoLógicas</em>, 20(39), 17-24.',
      tipo: 'Artículo',
      link: 'https://www.redalyc.org/journal/3442/344251476001/html/',
    },
  ],
  glosario: [
    {
      termino: '<em>Big data</em>',
      significado:
        'se refiere a los datos que incluyen gran variedad, se presentan en altos volúmenes y manejan una gran velocidad.',
    },
    {
      termino: 'Código abierto',
      significado:
        'se utiliza con los principios de la cooperación entre pares y masiva, apuntando a un proceso para desarrollar un <em>software</em> sustentable para los usuarios finales. ',
    },
    {
      termino: 'Código cerrado',
      significado:
        'el <em>software</em> de código cerrado (CSS) es un programa con patente o licencia, que es comercializado.',
    },
    {
      termino: 'Corel',
      significado:
        'es una empresa que se dedica a producir y comercializar herramientas profesionales para ilustración vectorial, diseño de páginas, edición de fotografías, tipografía y colaboración.',
    },
    {
      termino: 'Office 365',
      significado:
        'es un paquete de <em>software</em> que incluye las aplicaciones comunes de Office, como Word, Excel y PowerPoint; además de almacenamiento de archivos (<em>OneDrive</em>), colaboración (<em>SharePoint Online</em>) y comunicación (<em>Exchange Online</em>).',
    },
    {
      termino: 'Plotly',
      significado:
        'es una librería disponible en varios lenguajes de programación, especialmente en Python, en Java, R, Julia, Matlab, entre otros. Se pueden realizar gráficos complejos.',
    },
    {
      termino: 'Powerpoint',
      significado:
        'es un aplicativo de Microsoft Office para la realización de presentaciones. ',
    },
    {
      termino: 'Star Office',
      significado:
        'es una suite integrada que incluye los aplicativos de procesamiento de textos, hojas de cálculo, presentaciones, dibujo vectorial y bases de datos.',
    },
    {
      termino: 'Stata',
      significado:
        'es un <em>software</em> estadístico integrado, enfocado para el análisis de datos, gestión de datos y gráficos.',
    },
    {
      termino: 'Word',
      significado:
        'es un aplicativo de Microsoft Office que funciona como procesador de textos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Camargo, J., Camargo, J. & Joyanes, L. (2015). <i>Conociendo Big Data</i>. ',
      link: 'https://www.redalyc.org/pdf/4139/413940775006.pdf',
    },
    {
      referencia:
        'Martínez, R. (2017). <i>Cuestiones de ética jurídica al abordar proyectos de Big Data</i>. El contexto del Reglamento general de protección de datos.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=6066833',
    },
    {
      referencia:
        'Microsoft Learn. (2022). <i>Especificación de categorías de datos en Power BI Desktop</i>. Learn.',
      link:
        'https://docs.microsoft.com/es-es/power-bi/transform-model/desktop-data-categorization',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
