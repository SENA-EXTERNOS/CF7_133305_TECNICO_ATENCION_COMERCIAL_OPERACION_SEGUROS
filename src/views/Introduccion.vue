<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-4.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/intro/img01.png")
      .col-lg-6(data-aos="fade-left")
        p.mb-0 Apreciado aprendiz, bienvenido a este componente formativo, donde se estudiarán conceptos claves para aprender sobre los resultados y conclusiones cuantitativas, apropiando como base, el manejo de datos y su necesidad de incorporar herramientas como la analítica de datos, los modelos matemáticos, herramientas tecnológicas y la aplicación de la estadística en Big data, con el fin de obtener resultados en el reconocimiento de relaciones cuantitativas de los datos procesados; asimismo, poder interpretar también los patrones identificados y presentar los informes. 
    
    p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
  
    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
