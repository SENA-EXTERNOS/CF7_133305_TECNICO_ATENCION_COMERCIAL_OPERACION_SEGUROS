<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-md-5.pt-4.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Analítica de datos: herramientas, algoritmos y modelos matemáticos
    
    .BGIMG01.px-md-5.p-4
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-6.col-4.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema1/img01.png")
        .col-lg-6(data-aos="fade-left")
          p En esta época de grandes avances en la tecnología, las herramientas disponibles para desempeñarse como analista de datos dependen, en parte, del rol que se va a desempeñar y de las necesidades del negocio. Algunas de estas herramientas, se utilizan para realizar tareas como ejecutar algoritmos y visualizar datos y resultados, mientras que otras pueden estar diseñadas para la preparación de datos en el análisis, evaluar resultados, o desarrollar hipótesis o predicciones. 
          p.mb-0 Las herramientas para el análisis de datos, también se pueden utilizar para automatizar tareas complejas, proporcionando a los analistas de datos, más tiempo para el análisis real. 

      .row.justify-content-center.mb-5(data-aos="flip-up")
        .col-lg-10.cajon.color-secundario.p-4
          p La herramienta Excel de Microsoft Office encabeza la lista, como una herramienta universal, para aprender lo concerniente al manejo y análisis de datos; es masivo y fácil de aprender, desde el empleo de fórmulas, hasta la creación de tablas dinámicas.
          p.mb-0 En otro orden de ideas y accediendo a herramientas más sofisticadas, se puede hacer uso de algunas de las más utilizadas: SQL, Python, Git y se incluyen herramientas para la gestión de datos como R, SAS y SPSS.

      p Aunque hay muchas opciones en el mercado, es importante que los analistas de datos seleccionen cuidadosamente las suyas y trabajen con un buen programa de análisis de datos. Los diferentes tipos de herramientas utilizadas en la analítica de datos son variados; a continuación, se hace una descripción de cada una de ellas con su funcionalidad.

      .BGR01.p-4.mb-4
        .h4.text-center Herramientas de analítica de datos
        .row.justify-content-center
          .col-lg-10(data-aos="zoom-in")
            ImagenInfografica.color-acento-botones
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/img02.svg')
              .tarjeta.color-acento-contenido.p-3(x="32%" y="41%" numero="1")
                .h5.text-white.mb-2 SQL
                p.text-white.mb-0 Es un lenguaje de programación que se creó inicialmente, para administrar datos de una base de datos relacional y es utilizado por ingenieros en el desarrollo de #[em software]. Esta herramienta es sencilla de aprender y se puede utilizar para análisis de datos complejos y desafiantes. Además, permite recopilar datos de manera similar a Excel, pero en grandes conjuntos de datos y en varias tablas al mismo tiempo.
              .tarjeta.color-acento-contenido.p-3(x="57%" y="41%" numero="2")
                .h5.text-white.mb-2 Python
                p.text-white.mb-0 Es una herramienta versátil que admite la manipulación de datos, el análisis de los mismos y la representación de información. Muchas empresas que tienen presencia en línea, usan Python para analizar la actividad de los usuarios, lo que permite visualizar los datos recopilados, presentándolos en cuadros o gráficos, y también se puede utilizar para interpretar grandes conjuntos de datos.
              .tarjeta.color-acento-contenido.p-3(x="82%" y="41%" numero="3")
                .h5.text-white.mb-2 Excel
                p.text-white.mb-0 Es un programa sencillo de aprender, y los analistas de datos deben dominar todos los aspectos de Excel, desde el uso de fórmulas hasta la creación de tablas dinámicas.
              .tarjeta.color-acento-contenido.p-3(x="20%" y="85%" numero="4")
                .h5.text-white.mb-2 VBA
                p.text-white.mb-0 Los analistas de datos más experimentados pueden necesitar VBA - Visual Basic para aplicaciones. Es un lenguaje de programación diseñado específicamente para Excel y se usa con frecuencia en el análisis financiero.
              .tarjeta.color-acento-contenido.p-3(x="44%" y="85%" numero="5")
                .h5.text-white.mb-2 Matlab
                p.text-white.mb-0 Es una herramienta útil diseñada para crear algoritmos, construir modelos y analizar datos.
              .tarjeta.color-acento-contenido.p-3(x="69%" y="85%" numero="6")
                .h5.text-white.mb-2 R
                p.text-white.mb-0 Es una herramienta de gestión de datos, la cual permite producir elementos visuales como diagramas y gráficos para representar datos y está disponible en varias bibliotecas como Plotly. Se utiliza en finanzas y ventas, pero también en algunos campos científicos como la medicina y la tecnología. Se necesita tener conocimientos de estadística y programación en general, para poder trabajar con esta herramienta de análisis de datos.
              .tarjeta.color-acento-contenido.p-3(x="94%" y="85%" numero="7")
                .h5.text-white.mb-2 SAS
                p.text-white.mb-0 Es una herramienta altamente segura y está disponible en una amplia gama de bibliotecas de codificación estadística. SAS Studio es una pieza estable de #[em software] que aloja funciones SAS. Puede manejar fácilmente grandes volúmenes de datos y es compatible con plataformas que manejan #[em Big data]. La conversión de archivos externos a un formato SAS, también es sencilla, ya sea un archivo de Excel, SPSS o Stata. Se debe tener en cuenta que SAS no es un #[em software] de código abierto, por lo que se necesita una licencia para aprovechar esta herramienta de análisis de datos.

    p Ahora bien, las #[b herramientas de gestión de datos] constituyen un paso importante en el análisis de datos, debido a que es posible que la información pueda estar disponible al instante, actualizada y accesible para diversas funciones analíticas. La gestión de datos es el proceso de organizar, almacenar y mantener datos, dentro de una organización o empresa.
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img03.jpg')})`}"
          )(data-aos="fade-right")
          .bloque-texto-g__texto.p-4(data-aos="fade-left")
            p.mb-0 Las herramientas de análisis y gestión de datos, son utilizadas para solucionar problemas, a través de la creación de algoritmos. En la analítica de datos se utilizan, principalmente, tres algoritmos:<br>
            ul.lista-ul--color
              li
                <i class="fas fa-chevron-right" style="color:#54AA13"></i>
                | Algoritmos de proceso.
              li
                <i class="fas fa-chevron-right" style="color:#54AA13"></i>
                | Algoritmos de optimización.
              li
                <i class="fas fa-chevron-right" style="color:#54AA13"></i>
                | Algoritmos de aprendizaje automático.

    p A continuación, se podrá entender el concepto, #[b funcionalidad], los propósitos y utilidades relacionados con los algoritmos.

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      TabsB.color-acento-contenido
        .py-md-5.p-4(titulo="Algoritmo" :icono="require('@/assets/curso/tema1/img04.svg')")
          .row.justify-content-center
            .col-lg-7.order-lg-1.order-2
              .h4 Algoritmo
              p.mb-0 Un algoritmo es un procedimiento utilizado para resolver un problema o realizar un cálculo. Actúa como una lista exacta de instrucciones que realiza acciones específicas paso a paso, en rutinas basadas en #[em hardware] o #[em software]. Un algoritmo es diseñado independiente del idioma, es decir, las instrucciones pueden implementarse en cualquier idioma y, sin embargo, el resultado será el mismo.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img04.png")
        .py-md-5.p-4(titulo="Utilidad de los algoritmos" :icono="require('@/assets/curso/tema1/img05.svg')")
          .row.justify-content-center
            .col-lg-7.order-lg-1.order-2
              .h4 Utilidad de los algoritmos
              p Sabiendo que los algoritmos son utilizados para solucionar problemas, a continuación, se presentan algunas de las funcionalidades que estos tienen en diferentes áreas:
              ul.lista-ul--color.mb-0
                li
                  <i class="fas fa-chevron-right" style="color:#54AA13"></i>
                  | Existe una variedad de algoritmos de aprendizaje automático y minería de datos, que permite crear valiosas plataformas analíticas. Los objetivos establecidos, determinan qué algoritmos se utilizan para ordenar y procesar la información disponible. 
                li
                  <i class="fas fa-chevron-right" style="color:#54AA13"></i>
                  | Se han desarrollado varios algoritmos para tratar específicamente problemas de negocios. Se diseñaron otros algoritmos para aumentar los algoritmos existentes actuales, o para funcionar de nuevas maneras.
                li
                  <i class="fas fa-chevron-right" style="color:#54AA13"></i>
                  | Los modelos de algoritmos toman diversas formas, dependiendo de su propósito. El uso de diferentes algoritmos para proporcionar comparaciones, puede ofrecer algunos resultados sorprendentes sobre los datos que se utilizan. Hacer estas comparaciones le aportará, al gerente, más información sobre el problema comercial y las soluciones. Pueden presentarse como una colección de escenarios, un análisis matemático avanzado o, incluso, un árbol de decisiones.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img05.png")
        .py-md-5.p-4(titulo="Ejemplo de un algoritmo" :icono="require('@/assets/curso/tema1/img06.svg')")
          .row.justify-content-center
            .col-lg-7.order-lg-1.order-2
              .h4 Ejemplo de un algoritmo
              p Un claro ejemplo se puede representar en la forma de cocinar una nueva receta. 
              p.mb-0 Para cocinar una nueva receta, primero se deben leer las instrucciones. Esta receta está compuesta por una serie de pasos que deben ser ejecutados uno a uno, en su debido orden, para obtener el resultado deseado. Es, de esta manera, como está compuesto un algoritmo: una serie de funciones o instrucciones que se deben ir desarrollando paso a paso y, a su vez, se van ejecutando, con el fin de solucionar un problema.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img06.png")
        .py-md-5.p-4(titulo="Algoritmos en la TI" :icono="require('@/assets/curso/tema1/img07.svg')")
          .row.justify-content-center
            .col-lg-7.order-lg-1.order-2
              .h4 Algoritmos en la TI
              p.mb-0 Los algoritmos se utilizan ampliamente en todas las áreas de TI. En matemáticas e informática, un algoritmo, generalmente, se refiere a un pequeño procedimiento que resuelve un problema recurrente. Los algoritmos también se utilizan como especificaciones para realizar el procesamiento de datos y juegan un papel importante en los sistemas automatizados.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img07.png")

    .h4 Modelos matemáticos
    p El propósito del modelo matemático, es el de ser una representación simplificada de la realidad, para imitar las características relevantes del sistema que se analiza. A través de modelos matemáticos, los fenómenos del mundo real se traducen a un mundo conceptual, el cual inicia observando los fenómenos, con la aplicación de un modelo matemático y prediciendo su comportamiento mediante simulación. 
    p Ahora bien, existen dos categorías principales de modelado matemático: el #[b modelado teórico] y el #[b modelado experimental].

    .BGIMG02.p-4.mb-4(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-4.order-lg-1.order-2
            .h4 Modelado teórico
            p Se describe utilizando ecuaciones derivadas de la física. Para poder modelar el sistema de esta manera, se deben aplicar varias simplificaciones. Por ejemplo, al modelar la suspensión de un vehículo, se asume que la rigidez del resorte es constante, aunque en realidad no lo sea.
            p.mb-0 Los sistemas que se modelan completamente con base en los principios físicos (ecuaciones) se denominan modelos de caja blanca y esto significa que el usuario tiene todos los detalles sobre cómo funciona el sistema.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img08.png")
        .row.justify-content-center
          .col-lg-4.order-lg-1.order-2
            .h4 Ejemplos de modelado teórico
            p Algunos ejemplos de los modelos de caja blanca son:
            ul.lista-ul--color.mb-0
              li
                <i class="fas fa-chevron-right" style="color:#54AA13"></i>
                | Sistemas mecánicos: Ley de Newton, Ley de Hooke.
              li
                <i class="fas fa-chevron-right" style="color:#54AA13"></i>
                | Sistemas eléctricos: Ley de Ohm, Ley de Kirchhoff.
              li
                <i class="fas fa-chevron-right" style="color:#54AA13"></i>
                | 	Hidrodinámica: Ley de Bernoulli, conservación de la ley de masas.
              li
                <i class="fas fa-chevron-right" style="color:#54AA13"></i>
                | 	Termodinámica: Ley de los gases ideales - entropía.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img09.png")
        .row.justify-content-center
          .col-lg-4.order-lg-1.order-2
            .h4 Modelado experimental
            p Este modelo está basado en mediciones. El modelo matemático de un sistema se deriva de varios conjuntos de mediciones, cada uno de los cuales registra la respuesta del sistema (salida) para diferentes estímulos y perturbaciones (entradas).
            p.mb-0 Los sistemas que se modelan completamente con base en datos experimentales (medidas de entrada y salida) se denominan modelos de caja negra. Esto significa que el usuario puede observar la respuesta (salida) del modelo para un cierto estímulo (entrada), pero no tiene información sobre el mecanismo interno (principios).
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img10.png")
        .row.justify-content-center
          .col-lg-4.order-lg-1.order-2
            .h4 Ejemplos de modelado experimental
            p.mb-0 Algunos ejemplos de los modelos de caja blanca son:
            ul.lista-ul--color.mb-0
              li
                <i class="fas fa-chevron-right" style="color:#54AA13"></i>
                | Llenado de un tanque, a partir de la lectura de un sensor ultrasónico.
              li
                <i class="fas fa-chevron-right" style="color:#54AA13"></i>
                p.mb-0 Características de un motor, a partir de la lectura de un #[em encoder].
              li
                <i class="fas fa-chevron-right" style="color:#54AA13"></i>
                | Calidad del suelo a partir de la medición de las características del suelo.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img11.png")
    
    p Después de conocer las dos grandes categorías de los modelos matemáticos, estos pueden ser clasificados de diferentes maneras, de acuerdo con ciertas características, funcionalidades o condiciones.
    p Para conocer estas clasificaciones, se realiza una representación, por medio de las siguientes comparaciones.

    .BGIMG03.p-md-5.p-4
      .row.mb-5(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="BGR02")
          .row.justify-content-center(titulo="Estático vs dinámico")
            .col-lg-4.order-lg-1.order-2
              p.mb-0 El modelo estático es aquel que ayuda a calcular un sistema en equilibrio y, por lo tanto, es invariante en el tiempo. Por el contrario, los modelos dinámicos se utilizan, principalmente, para cambios dependientes del tiempo en un sistema; por lo tanto, su representación se realiza mediante ecuaciones en diferencias o ecuaciones diferenciales. 
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img12.png")
          .row.justify-content-center(titulo="Lineal vs no lineal")
            .col-lg-4.order-lg-1.order-2
              p Un modelo matemático lineal se obtiene cuando todos los operadores exhiben linealidad. Por el contrario, se considera un modelo no lineal cuando un objeto no presenta linealidad. Las descripciones de linealidad y no linealidad se basan, principalmente, en el contexto. Un objeto lineal puede contener algunas expresiones no lineales.
              p.mb-0 Por ejemplo, se tiene un modelo estadístico lineal donde su relación es lineal en algunos de los parámetros. Sin embargo, es no lineal en las variables predictoras. Asimismo, una ecuación diferencial, contiene expresiones no lineales, pero tiende a ser lineal mientras se describe con operadores diferenciales lineales. 
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img13.png")
          .row.justify-content-center(titulo="Explícito vs implícito")
            .col-lg-4.order-lg-1.order-2
              p El modelo se considera explícito si se conocen los modelos de entrada del modelo general. Se pueden calcular los parámetros de salida en una función explícita, mediante una serie de cálculos finitos. Por el contrario, se denomina modelo implícito si ya se muestran los resultados. Dos ejemplos de funciones implícitas son: el método de Broyden y el método de Newton.
              p.mb-0 #[b Ejemplo]: se consideran las propiedades físicas de un motor a reacción. Las áreas de la turbina y la garganta de la boquilla, se calculan explícitamente, utilizando un ciclo termodinámico de diseño, que utiliza fórmulas matemáticas del modelo de área para la derivación. Se trata de datos sobre temperaturas, presiones y tasas de flujo de aire y combustible. Solo se calcula en una configuración de potencia y condiciones de vuelo específicas. Pero para otras condiciones de vuelo, puede que no sea posible calcular explícitamente. En tales casos, se usan modelos implícitos.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img14.png")
          .row.justify-content-center(titulo="Determinista vs probabilístico")
            .col-lg-4.order-lg-1.order-2
              p Los parámetros, en un modelo determinista, definen, por separado, todos los estados variables. Se trata de una colección de estados previos de estas variables. Por lo tanto, es común que este modelo funcione de la misma manera para las condiciones iniciales.
              p.mb-0 En el modelo probabilístico, la aleatoriedad está presente. Los estados variables no se determinan utilizando valores únicos. En cambio, se realizan mediante distribuciones de probabilidad. Otros nombres de este modelo son: el modelo estadístico y el modelo estocástico.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img15.png")
          .row.justify-content-center(titulo="Discreto vs continuo")
            .col-lg-4.order-lg-1.order-2
              p En modelos discretos, los objetos se tratan como discretos, es decir, estados en un modelo estadístico o partículas en un modelo molecular.
              p.mb-0 En los modelos continuos, los objetos se representan de forma continua. Por ejemplo, las tensiones y temperaturas en sólidos y la aplicación continua de campos eléctricos sobre un modelo completo son algunos de ellos.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img16.png")
          .row.justify-content-center(titulo="Deductivo, inductivo o flotante")
            .col-lg-4.order-lg-1.order-2
              p Los modelos deductivos, los cuales están basados en una teoría, suelen ser estructuras lógicas. Los modelos indicativos provienen de hallazgos empíricos de modelos deductivos. Por otro lado, los modelos flotantes no se basan ni en la observación ni en la teoría, se basan puramente en la invocación de la estructura esperada. 
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img17.png")

      .row.justify-content-center
        .col-lg-10.cajon.color-secundario.p-4.mb-4(data-aos="flip-up")
          p.mb-0 Para concluir, los modelos matemáticos son útiles en todos los dominios de los cuales se pueden realizar muchas aplicaciones, desde muebles hasta naves espaciales, como también maximizar la producción y mejorar la productividad. Estos pueden ser utilizados en ingeniería y ciencias para realizar diversas aplicaciones.
        .col-lg-10.cajon.color-primario.p-4.mb-4(data-aos="flip-up")
          p.mb-0 Los modelos matemáticos contienen principalmente ecuaciones y teorías, que ayudarán a resolver problemas en tiempo real y, así mismo, podrán ser representados mediante simulaciones.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
