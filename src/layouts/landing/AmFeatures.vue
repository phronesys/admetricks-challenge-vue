<template>
  <div class="features">
    <am-feature
      v-for="feature in featuresContent"
      :key="feature.title"
      :iconName="feature.iconName"
    >
      <template #title> {{ feature.title }} </template>
      <template #body> {{ feature.body }} </template>
    </am-feature>
  </div>
</template>

<script lang="ts" setup>
import AmFeature from "../../components/AmFeature.vue";

const featuresContent = [
  {
    title: "Agencias",
    body: `Crea mejores estrategias de marketing digital, planes de medios y
        reportes de resultados para tus clientes. Muéstrale qué está haciendo su
        competencia en publicidad online.`,
    iconName: "idea",
  },
  {
    title: "Medios",
    body: `Mejora tus argumentos de ventas conociendo en detalle la inversión de 
        tus clientes en otros medios y el alcance que les aporta.us clientes en 
        otros medios y el alcance que les aporta.`,
    iconName: "device",
  },
  {
    title: "Marcas",
    body: `Descubre las ofertas y campañas que tu competencia está promocionando. 
        Recibe alertas cuando tu competencia lanza una nueva campaña de publicidad
        online.`,
    iconName: "megaphone",
  },
  {
    title: "Verificación",
    body: `Como un agente tercero, transparente y sin conflictos de interés, 
        Admetricks permite a los actores de la industria del marketing digital 
        verificar que sus campañas exhiban en los sitios y formatos pautados.`,
    iconName: "research",
  },
];
</script>

<style lang="postcss">
.features {
  @apply flex flex-row flex-wrap justify-center gap-4 px-4 mx-auto;
  @apply xl:w-[1180px];
}
</style>
