<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-md-5.pt-4.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Aplicación de la estadística
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        p El campo de la estadística es la ciencia de aprender de los datos. El conocimiento estadístico lo ayuda a utilizar los métodos adecuados para recopilar los datos, emplear los análisis correctos y presentar los resultados de manera efectiva. La estadística es un proceso crucial detrás de cómo se hacen descubrimientos en la ciencia, se toman decisiones basadas en datos y se hacen predicciones.
        p.mb-0 La estadística permite entender un tema con mucha más profundidad; en este sentido, se presentan las diferentes técnicas de análisis existentes más utilizadas. 
      .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema3/img01.png")


    .h4 Técnicas de análisis estadístico
    p El análisis estadístico es el proceso de recopilar y analizar datos para discernir patrones y tendencias. Es un método para eliminar el sesgo de la evaluación de datos, mediante el empleo de análisis numéricos. Esta técnica es útil para recopilar las interpretaciones de la investigación, desarrollar modelos estadísticos y planificar encuestas y estudios.
    p A continuación, se presentan las diferentes técnicas de análisis que existen.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      SlyderF.mb-5(columnas="col-md-6 col-xl-4")
        .BGR04.p-4
          figure.mb-3
            img(src='@/assets/curso/tema3/img02.svg')
          h2.text-center Análisis descriptivo
          p.text-center.mb-0 Implica recopilar, interpretar, analizar y resumir datos, para presentarlos en forma de cuadros, gráficos y tablas.
        .BGR04.p-4
          .row.justify-content-center.mb-3
            .col-10
              img(src='@/assets/curso/tema3/img03.svg')
          h2.text-center Análisis inferencial
          p.text-center.mb-0 Se centra en sacar conclusiones significativas, sobre la base de los datos analizados.
        .BGR04.p-4
          figure.mb-3
            img(src='@/assets/curso/tema3/img04.svg')
          h2.text-center Análisis predictivo
          p.text-center.mb-0 Es un tipo de análisis estadístico, que analiza datos para derivar tendencias pasadas y predecir eventos futuros sobre la base de ellas.
        .BGR04.p-4
          figure.mb-3
            img(src='@/assets/curso/tema3/img05.svg')
          h2.text-center Análisis prescriptivo
          p.text-center.mb-0 Lleva a cabo el análisis de datos y prescribe el mejor curso de acción basado en los resultados.
        .BGR04.p-4
          .row.justify-content-center.mb-3
            .col-10
              img(src='@/assets/curso/tema3/img06.svg')
          h2.text-center Análisis exploratorio de datos
          p.text-center.mb-0 Es similar al análisis inferencial, pero la diferencia es que implica explorar las asociaciones de datos desconocidos.
        .BGR04.p-4
          .row.justify-content-center.mb-3
            .col-11
              img(src='@/assets/curso/tema3/img07.svg')
          h2.text-center Análisis causal
          p.text-center.mb-0 Se enfoca en determinar la relación causa y efecto entre diferentes variables, dentro de los datos sin procesar.

    .h4 Población y muestra
    p En investigación, una población no siempre se refiere a personas. Puede significar un grupo que contiene elementos de cualquier cosa que se desee estudiar, como objetos, eventos, organizaciones, países, especies, organismos, etc. 
    p A continuación, se presentan las definiciones de población y muestras con ejemplos comparativos.

    .row.justify-content-center.mb-4
      .col-xl-5.col-lg-6.col-md-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .BGR04A.p-5
            .row.justify-content-center
              .col-10
                img(src='@/assets/curso/tema3/img08.svg' alt='AvatarTop')
          .tarjetas-up_card.BGR05.p-sm-3.p-2
            .title.d-flex.align-items-center.mb-md-4.mb-3
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Población
            p.mb-0 Una población es todo el grupo sobre el que se desea sacar conclusiones.
      .col-xl-5.col-lg-6.col-md-10(data-aos="fade-left")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .BGR04A.p-5
            .row.justify-content-center
              .col-8
                img(src='@/assets/curso/tema3/img09.svg' alt='AvatarTop')
          .tarjetas-up_card.BGR05.p-sm-3.p-2
            .title.d-flex.align-items-center.mb-md-4.mb-3
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Muestra
            p.mb-0 Una muestra es el grupo específico del que se recopilan datos. El tamaño de la muestra siempre es menor que el tamaño total de la población.

    .BGIMG05.px-md-5.px-4 
      .row.justify-content-center.mb-4
        .col-xl-5.col-lg-6.col-md-10.mb-lg-0.mb-4(data-aos="fade-right")
          .tarjetas-up(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .BGR04A.p-5
              .row.justify-content-center
                .col-10
                  img(src='@/assets/curso/tema3/img10.svg' alt='AvatarTop')
            .tarjetas-up_card.BGR05.p-sm-3.p-2
              .title.d-flex.align-items-center.mb-md-4.mb-3
                span
                  i.fas.fa-caret-up.fa-2x.me-3
                  i.fas.fa-caret-down.fa-2x.me-3
                h4.mb-0 Ejemplo 1
              .h4 Población
              p Anuncios de empleos de Ingeniería en sistemas, en Bogotá.
              .h4 Muestra
              p.mb-0 Los 10 mejores resultados de búsqueda de anuncios de empleos de Ingeniería en sistemas, Bogotá el 1 de mayo de 2022.
        .col-xl-5.col-lg-6.col-md-10.mb-4(data-aos="fade-left")
          .tarjetas-up(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .BGR04A.p-5
              .row.justify-content-center
                .col-8
                  img(src='@/assets/curso/tema3/img11.svg' alt='AvatarTop')
            .tarjetas-up_card.BGR05.p-sm-3.p-2
              .title.d-flex.align-items-center.mb-md-4.mb-3
                span
                  i.fas.fa-caret-up.fa-2x.me-3
                  i.fas.fa-caret-down.fa-2x.me-3
                h4.mb-0 Ejemplo 2
              .h4 Población
              p Canciones del Festival de la Canción de América.
              .h4 Muestra
              p.mb-0 Canciones ganadoras del Festival de la Canción de América, interpretadas en inglés.
        .col-xl-5.col-lg-6.col-md-10.mb-lg-0.mb-4(data-aos="fade-right")
          .tarjetas-up(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .BGR04A.p-5
              figure
                img(src='@/assets/curso/tema3/img12.svg' alt='AvatarTop')
            .tarjetas-up_card.BGR05.p-sm-3.p-2
              .title.d-flex.align-items-center.mb-md-4.mb-3
                span
                  i.fas.fa-caret-up.fa-2x.me-3
                  i.fas.fa-caret-down.fa-2x.me-3
                h4.mb-0 Ejemplo 3
              .h4 Población
              p Estudiantes de pregrado en Colombia.
              .h4 Muestra
              p.mb-0 300 estudiantes de pregrado de tres universidades colombianas, que se ofrecen como voluntarios para su estudio de investigación en psicología.
        .col-xl-5.col-lg-6.col-md-10.mb-4(data-aos="fade-left")
          .tarjetas-up(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .BGR04A.p-5
              .row.justify-content-center
                .col-8
                  img(src='@/assets/curso/tema3/img13.svg' alt='AvatarTop')
            .tarjetas-up_card.BGR05.p-sm-3.p-2
              .title.d-flex.align-items-center.mb-md-4.mb-3
                span
                  i.fas.fa-caret-up.fa-2x.me-3
                  i.fas.fa-caret-down.fa-2x.me-3
                h4.mb-0 Ejemplo 4
              .h4 Población
              p Todos los países del mundo.
              .h4 Muestra
              p.mb-0 Países con datos publicados, disponibles sobre tasas de natalidad y PIB desde el 2000.
    
    .h4 Parámetros en la estadística
    p En matemáticas, un parámetro es una variable que representa un valor numérico dentro de un conjunto de elementos. En estadística es un valor que dice algo sobre una población, y es lo opuesto a una estadística, que dice algo sobre una pequeña parte de la población. Se caracteriza por ser un valor que nunca cambia, porque todos (o todo) fueron encuestados para encontrar el parámetro.
    p A continuación, se presentan las características de los parámetros, según su variación, distribución, medición y tipos de parámetros.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema3/img14.svg")
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="BGR06")
          div(titulo="Variación de las estadísticas")
            p Se puede plantear que la edad promedio de los compañeros de clase es de 25 años. Se podría suponer que la edad promedio de todos, en su año, es de 24, 25 o 26 años. Se podría suponer que la edad promedio de otras universidades, en su área, es la misma. Incluso, se podría adivinar que esa es la edad promedio de los estudiantes universitarios en Colombia. Puede que no sean malas conjeturas, pero son estadísticas porque no se les preguntó a todos.
            p.mb-0 En estadística, a diferencia de su uso general en matemáticas, un parámetro es cualquier cantidad medida de una población estadística que resume o describe un aspecto de la población, como una media o una desviación estándar. Si una población sigue exactamente una distribución conocida y definida, por ejemplo, la distribución normal, entonces se puede medir un pequeño conjunto de parámetros que describe completamente la población y se puede considerar que define una distribución de probabilidad, con el fin de extraer muestras de esta población.
          div(titulo="Distribuciones parametrizadas")
            p Al suponer que se tiene una familia indexada de distribuciones, si el índice es también un parámetro de los miembros de la familia, entonces la familia es una familia parametrizada. Entre las familias de distribuciones parametrizadas, se encuentran las distribuciones normales, las distribuciones de #[em Poisson], las distribuciones binomiales y la familia de distribuciones exponenciales. Por ejemplo, la familia de distribuciones normales tiene dos parámetros, la media y la varianza: si se especifican, se conoce exactamente la distribución. La familia de distribuciones de chi-cuadrado, se puede indexar por el número de grados de libertad: el número de grados de libertad es un parámetro para las distribuciones y, por lo tanto, la familia se parametriza.
          div(titulo="Medición de parámetros")
            p En la inferencia estadística, a veces se considera que los parámetros no son observables y, en este caso, la tarea del estadístico es estimar o inferir lo que pueda sobre el parámetro, en función de una muestra aleatoria de observaciones tomadas de la población total. Los estimadores de un conjunto de parámetros de una distribución específica, con frecuencia se miden para una población, bajo el supuesto que la población está (al menos aproximadamente) distribuida, de acuerdo con esa distribución de probabilidad específica. En otras situaciones, los parámetros pueden fijarse por la naturaleza del procedimiento de muestreo utilizado o el tipo de procedimiento estadístico que se lleva a cabo (por ejemplo, el número de grados de libertad en una prueba de chi-cuadrado de Pearson). Incluso, si no se especifica una familia de distribuciones, las cantidades como la media y la varianza, generalmente, pueden considerarse como parámetros estadísticos de la población, y los procedimientos estadísticos aún pueden intentar hacer inferencias sobre dichos parámetros de la población.
          div(titulo="Tipos de parámetros")
            p Los parámetros reciben nombres apropiados para sus roles, incluidos los siguientes:
            ul.lista-ul--color
              li
                <i class="fas fa-circle" style="color:#54AA13; font-size: x-small"></i>
                | Parámetro de ubicación.
              li
                <i class="fas fa-circle" style="color:#54AA13; font-size: x-small"></i>
                | Parámetro de dispersión o parámetro de escala.
              li
                <i class="fas fa-circle" style="color:#54AA13; font-size: x-small"></i>
                | Parámetro de forma.

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.cajon.color-secundario.p-4
        p.mb-0 Cuando una distribución de probabilidad tiene un dominio sobre un conjunto de objetos que son en sí mismos distribuciones de probabilidad, el término parámetro de concentración se usa para cantidades que indican cuán variables serían los resultados. Las cantidades como los coeficientes de regresión, son parámetros estadísticos en el sentido anterior, porque indexan la familia de distribuciones de probabilidad condicional, que describen cómo se relacionan las variables dependientes con las variables independientes.

    .h4 Validación de modelos matemáticos

    .row.justify-content-center.mb-4
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema3/img15.png")
      .col-lg-6
        p.mb-0 La validación de un modelo matemático de un sistema dinámico estructural, implica la comparación de predicciones del modelo para medir los resultados de los experimentos. Antes que se pueda realizar una comparación de validación bien estructurada realizada, hay varias decisiones y criterios definidos que deben tomarse. Los elementos a considerar antes del comienzo de los experimentos de calibración y validación y predicciones del modelo, y esas tres actividades deben completarse antes que se puedan realizar las comparaciones de validación.

    .BGIMG03.px-md-5.p-4
      p.mb-5 La siguiente es una lista de actividades y decisiones, junto con una breve descripción de cada una, que deben completarse antes de las comparaciones de experimentación, modelado y validación.

      .row.justify-content-center.mb-5
        .col-lg-10(data-aos="zoom-in")
          LineaTiempoD.color-acento-contenido
            .row.justify-content-center.align-items-center.pt-4(numero="1" titulo="Especificar el uso y propósito del modelo (qué decisión se va a tomar)")
              .col-lg-2.col-4.mb-lg-0.mb-4
                .row.justify-content-center
                  .col-9
                    img(src="@/assets/curso/tema3/img16.svg")
              .col
                p.mb-0 El uso y el propósito del modelo, se refieren a las aplicaciones para las que se desarrolla el modelo actual y su validación puede ser una en una secuencia de comparaciones de validación que se realizan para, eventualmente, validar un modelo para el último sistema de interés.
            .row.justify-content-center.align-items-center.pt-4(numero="2" titulo="Especificar los experimentos de validación")
              .col-lg-2.col-4.mb-lg-0.mb-4
                .row.justify-content-center
                  .col-9
                    img(src="@/assets/curso/tema3/img17.svg")
              .col
                p.mb-0 Al principio del proceso de planificación, se deben especificar los experimentos de validación. Un experimento de validación es un experimento que está diseñado y realizado para generar datos con el fin de validar el modelo. Los experimentos de validación deben especificarse al principio del proceso de planificación, porque los detalles del modelo computacional que se desarrolla para hacer predicciones de los resultados del experimento de validación se especifican durante la fase de planificación de la validación, y el modelo computacional debe ser lo suficientemente detallado y contener los elementos apropiados para hacer lo requerido.
            .row.justify-content-center.align-items-center.pt-4(numero="3" titulo="Especificar el modelo conceptual")
              .col-lg-2.col-4.mb-lg-0.mb-4
                .row.justify-content-center
                  .col-9
                    img(src="@/assets/curso/tema3/img18.svg")
              .col
                p.mb-0 El modelo conceptual del sistema físico, es el conjunto de suposiciones y descripciones de los procesos físicos que representa el comportamiento del sistema de interés, y del cual se deriva el modelo matemático y en la validación se pueden construir experimentos.
            .row.justify-content-center.align-items-center.pt-4(numero="4" titulo="Especificar el modelo matemático")
              .col-lg-2.col-4.mb-lg-0.mb-4
                .row.justify-content-center
                  .col-9
                    img(src="@/assets/curso/tema3/img19.svg")
              .col
                p.mb-0 El modelo matemático se refiere a las ecuaciones matemáticas, las condiciones de contorno, las excitaciones, las condiciones iniciales y otros datos de modelado, necesarios para describir el modelo conceptual. El modelo matemático debe especificarse no solo como un preludio a la especificación del modelo computacional, sino también para asegurar toda la fenomenología prevista en los experimentos de validación.
            .row.justify-content-center.align-items-center.pt-4(numero="5" titulo="Especificar el modelo computacional")
              .col-lg-2.col-4.mb-lg-0.mb-4
                .row.justify-content-center
                  .col-9
                    img(src="@/assets/curso/tema3/img20.svg")
              .col
                p.mb-0 El modelo computacional es la implementación numérica del modelo matemático, generalmente en forma de discretización numérica, algoritmo de solución y criterios de convergencia. El modelo computacional debe ser cuidadosamente definido (después de la verificación del código y la verificación de la solución) para asegurar que las características del modelo matemático se capturan con suficiente precisión para garantizar resultados de validación positivos si, de hecho, el modelo debe ser validado.
            .row.justify-content-center.align-items-center.pt-4(numero="6" titulo="Especificar las medidas de respuesta del sistema físico de interés")
              .col-lg-2.col-4.mb-lg-0.mb-4
                .row.justify-content-center
                  .col-9
                    img(src="@/assets/curso/tema3/img21.svg")
              .col
                p.mb-0 Las medidas de respuesta de interés se refieren a las cantidades que son funciones del comportamiento del sistema o la respuesta a ser utilizada en la comparación de las predicciones del modelo con las predicciones del sistema experimental. Deben ser cantidades que pueden inferirse de excitaciones y respuestas experimentales medidas, y de excitaciones y modelos especificados.
            .row.justify-content-center.align-items-center.pt-4(numero="7" titulo="Especificar las métricas de validación")
              .col-lg-2.col-4.mb-lg-0.mb-4
                .row.justify-content-center
                  .col-9
                    img(src="@/assets/curso/tema3/img22.svg")
              .col
                p.mb-0 Estos son los medios matemáticos precisos para comparar las medidas de respuestas predichas, del modelo con las respuestas medidas calculadas, a partir de respuestas experimentales.
            .row.justify-content-center.align-items-center.pt-4(numero="8" titulo="Especificar el dominio de comparación")
              .col-lg-2.col-4.mb-lg-0.mb-4
                .row.justify-content-center
                  .col-9
                    img(src="@/assets/curso/tema3/img23.svg")
              .col
                p.mb-0 El dominio de comparación es la región del espacio ambiental y el modelo, y el espacio de parámetros del sistema físico dentro del cual se medirán las respuestas del experimento y se realizarán las predicciones del modelo.
            .row.justify-content-center.align-items-center.pt-4(numero="9" titulo="Especificar los experimentos de calibración")
              .col-lg-2.col-4.mb-lg-0.mb-4
                .row.justify-content-center
                  .col-9
                    img(src="@/assets/curso/tema3/img24.svg")
              .col
                p.mb-0 Los experimentos de calibración son los experimentos que se realizarán y utilizarán con el modelo estructural para identificar los parámetros del modelo. Una vez que los resultados del experimento de calibración se utilizan para inferir valores para los parámetros del modelo, no pueden utilizarse para hacer inferencias sobre la validez del modelo.
            .row.justify-content-center.align-items-center.pt-4(numero="10" titulo="Especificar criterios de adecuación (requisitos de validación)")
              .col-lg-2.col-4.mb-lg-0.mb-4
                .row.justify-content-center
                  .col-9
                    img(src="@/assets/curso/tema3/img25.svg")
              .col
                p.mb-0 Los criterios de adecuación definen los valores que deben asumir las métricas de validación para que el modelo se considere válido.



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicador: true,
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
