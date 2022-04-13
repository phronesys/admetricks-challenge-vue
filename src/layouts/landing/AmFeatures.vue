<template>
  <section id="features">
    <am-feature
      v-for="(feature, index) in featuresContent"
      :key="feature.title"
    >
    <!-- the fastest solution was to add these images manually :-{ -->
      <template #img>
        <img v-if="index === 0" src="../../assets/icons/icon-idea.png" :alt="feature.title" />
        <img v-if="index === 1" src="../../assets/icons/icon-device.png" :alt="feature.title" />
        <img v-if="index === 2" src="../../assets/icons/icon-megaphone.png" :alt="feature.title" />
        <img v-if="index === 3" src="../../assets/icons/icon-research.png" :alt="feature.title" />
      </template>
      <template #title> {{ feature.title }} </template>
      <template #body> {{ feature.body }} </template>
    </am-feature>
  </section>
</template>

<script lang="ts" setup>
import AmFeature from "../../components/AmFeature.vue";

const featuresContent = [
  {
    title: "Agencias",
    body: `Crea mejores estrategias de marketing digital, planes de medios y
        reportes de resultados para tus clientes. Muéstrale qué está haciendo su
        competencia en publicidad online.`,
  },
  {
    title: "Medios",
    body: `Mejora tus argumentos de ventas conociendo en detalle la inversión de 
        tus clientes en otros medios y el alcance que les aporta.us clientes en 
        otros medios y el alcance que les aporta.`,
  },
  {
    title: "Marcas",
    body: `Descubre las ofertas y campañas que tu competencia está promocionando. 
        Recibe alertas cuando tu competencia lanza una nueva campaña de publicidad
        online.`,
  },
  {
    title: "Verificación",
    body: `Como un agente tercero, transparente y sin conflictos de interés, 
        Admetricks permite a los actores de la industria del marketing digital 
        verificar que sus campañas exhiban en los sitios y formatos pautados.`,
  },
];
</script>

<style lang="postcss">
section#features {
  @apply w-[280px] flex flex-row flex-wrap justify-start gap-[4.5px];
  @apply mx-auto sm:w-[560px];
  @apply xl:w-[1120px];
}
</style>
