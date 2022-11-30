<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-md-5.pt-4.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Uso de tecnologías para el análisis de grandes volúmenes de datos
    
    .row.justify-content-center.mb-4
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema4/img01.png")
      .col-lg-6
        p La tecnología #[em Big data] se puede definir como una utilidad de #[em software] que está diseñada para analizar, procesar y extraer la información de conjuntos de datos, extremadamente complejos y grandes que el #[em software] de procesamiento de datos tradicional, nunca podría manejar.
        p.mb-0 La tecnología #[em Big data] se clasifica en dos tipos: tecnologías operativas de #[em Big data] y tecnologías analíticas de #[em Big data].

    p A continuación, se presenta cada una de las tecnologías de #[em Big data].

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      TabsB.color-acento-contenido
        .py-md-5.p-4(titulo="Tecnologías operativas" :icono="require('@/assets/curso/tema4/img02.svg')")
          .row.justify-content-center
            .col-lg-7.order-lg-1.order-2
              .h4 Tecnologías operativas
              p #[em Big data] operacional tiene que ver con los datos normales que se generan en el día a día. Estos podrían ser: las transacciones en línea, las redes sociales o los datos de una organización en particular, entre otros. Incluso se puede considerar que se trata de un tipo de datos sin procesar que se utiliza para alimentar las tecnologías analíticas de #[em Big data].
              p Algunos ejemplos de tecnologías operativas de #[em Big data] son los siguientes:
              ul.lista-ul--color
                li
                  <i class="fas fa-circle" style="color:#54AA13; font-size: x-small"></i>
                  | Reservas de boletos en línea, que incluyen los boletos de tren, boletos de avión, boletos de cine, entre otros.
                li
                  <i class="fas fa-circle" style="color:#54AA13; font-size: x-small"></i>
                  | Compras en línea.
                li
                  <i class="fas fa-circle" style="color:#54AA13; font-size: x-small"></i>
                  | Datos de sitios de redes sociales.
                li
                  <i class="fas fa-circle" style="color:#54AA13; font-size: x-small"></i>
                  | Los datos de los empleados de cualquier empresa multinacional.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema4/img02.png")
        .py-md-5.p-4(titulo="Tecnologías analíticas" :icono="require('@/assets/curso/tema4/img03.svg')")
          .row.justify-content-center
            .col-lg-7.order-lg-1.order-2
              .h4 Tecnologías analíticas
              p #[em Big data] analítico se refiere a la parte donde el rendimiento real entra en escena y las decisiones comerciales cruciales en tiempo real, se toman mediante el análisis de #[em Big data] operativo. 
              p Algunos ejemplos de tecnologías analíticas de #[em Big data] son los siguientes:
              ul.lista-ul--color
                li
                  <i class="fas fa-circle" style="color:#54AA13; font-size: x-small"></i>
                  | Comercialización de acciones.
                li
                  <i class="fas fa-circle" style="color:#54AA13; font-size: x-small"></i>
                  | Llevar a cabo misiones espaciales donde cada bit de información es crucial.
                li
                  <i class="fas fa-circle" style="color:#54AA13; font-size: x-small"></i>
                  | Información del pronóstico del tiempo.
                li
                  <i class="fas fa-circle" style="color:#54AA13; font-size: x-small"></i>
                  | Campos médicos donde se puede monitorear el estado de salud de un paciente en particular.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema4/img03.png")

    .h4 Técnicas, modelos y metodologías de la analítica de datos
    p El análisis de datos es el proceso de recopilar, modelar y analizar datos, para extraer información que respalde la toma de decisiones. 
    p En el siguiente video conocerá acerca de los diferentes métodos y técnicas para realizar análisis, dependiendo de la industria y el objetivo de la investigación.

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .h4 Integración de datos

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.cajon.color-primario.p-4
        p.mb-0 La integración de datos es el proceso de combinar datos de diferentes fuentes, en una sola vista unificada. La integración comienza con el proceso de ingesta e incluye pasos como la limpieza, el mapeo de ETL y la transformación. En última instancia, la integración de datos permite que las herramientas de análisis, produzcan inteligencia de negocios, eficaz y procesable.

     
    .row.justify-content-center.mb-4
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema4/img04.png")
      .col-lg-6
        p Hoy en día, las empresas recopilan enormes volúmenes de datos de diversas fuentes. Para que los datos sean significativos, deben ser accesibles para el análisis; sin embargo, los datos nuevos ingresan a la organización, cada segundo.
        p.mb-0 Los datos integrados desbloquean una capa de conectividad que las empresas necesitan si quieren competir en la economía actual. Al conectar sistemas que contienen datos valiosos e integrarlos entre departamentos y ubicaciones, las organizaciones pueden lograr la continuidad de los datos y la transferencia de conocimientos sin problemas. Esto beneficia a la empresa en su conjunto, no solo a un equipo o a un individuo, y promueve la cooperación entre sistemas, para obtener una visión general completa del negocio.

    .BGIMG03.px-md-5.p-4
      p Ahora bien, esto se puede lograr a través de una variedad de técnicas de integración de datos, como son:

      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
        SlyderF(columnas="col-md-6 col-xl-4")
          .BGR04B.p-4
            figure.mb-3
              img(src='@/assets/curso/tema4/img05.svg')
            h2.text-center Extraer, transformar y cargar
            p.text-center.mb-0 Las copias de conjuntos de datos de fuentes dispares se recopilan, armonizan y cargan en un almacén de datos o base de datos.
          .BGR04B.p-4
            figure.mb-3
              img(src='@/assets/curso/tema4/img06.svg')
            h2.text-center Extraer, cargar y transformar
            p.text-center.mb-0 Los datos se cargan tal cual en un sistema de #[em Big data] y se transforman en un momento posterior para usos analíticos particulares.
          .BGR04B.p-4
            figure.mb-3
              img(src='@/assets/curso/tema4/img07.svg')
            h2.text-center Captura de datos modificados
            p.text-center.mb-0 Identifica los cambios de datos en las bases de datos en tiempo real y los aplica a un almacén de datos u otros repositorios.
          .BGR04B.p-4
            figure.mb-3
              img(src='@/assets/curso/tema4/img08.svg')
            h2.text-center Replicación de datos
            p.text-center.mb-0 Los datos en una base de datos se replican en otras bases de datos, para mantener la información sincronizada para usos operativos y para respaldo.
          .BGR04B.p-4
            .row.justify-content-center.mb-3
              .col-7
                img(src='@/assets/curso/tema4/img09.svg')
            h2.text-center Virtualización de datos
            p.text-center.mb-0 Los datos de diferentes sistemas se combinan, virtualmente, para crear una vista unificada en lugar de cargar datos en un nuevo repositorio.
          .BGR04B.p-4
            .row.justify-content-center.mb-3
              .col-7
                img(src='@/assets/curso/tema4/img10.svg')
            h2.text-center #[em Streaming Data Integration]
            p.text-center.mb-0 Un método de integración de datos en tiempo real, en el que diferentes flujos de datos se integran continuamente y se alimentan de sistemas de análisis y almacenes de datos.

      .row.justify-content-center.mb-4(data-aos="flip-up")
        .col-lg-10.cajon.color-primario.p-4
          p.mb-0 Ha finalizado el estudio de este recurso educativo. Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para hacerlo, diríjase al menú principal, donde encontrará la síntesis, material complementario, entre otros. Adicional, lo invitamos a desarrollar la actividad didáctica para reforzar los conceptos estudiados en el componente formativo.
            
</template>

<script>
export default {
  name: 'Tema4',
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
