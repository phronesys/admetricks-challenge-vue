<template>
  <section id="header">
    <div class="title">
      <h5>Estamos para ayudarte</h5>
      <h1>
        ¿Tienes problemas <br />
        para <span>entender el mercado</span> de la publicidad digital?
      </h1>
    </div>
    <p class="body">
      El Mercado de la publicidad online es incierto y complejo, Admetricks te
      <span>ayuda a visibilizar cómo desempeñan las campañas y contenidos</span>
      versus los de tu competencia en tiempo real con reportes y alertas
      automáticas
    </p>
    <div class="buttons">
      <am-button>Solicitar demo</am-button>
      <am-button type="link">Ver funcionalidades</am-button>
    </div>
  </section>
</template>

<script setup lang="ts">
import AmButton from "../../components/AmButton.vue";
</script>

<style lang="postcss">
section#header {
  @apply flex flex-col gap-8 max-w-[532px];
}

section#header .title {
  @apply text-white font-semibold;
  & > h5 {
    @apply text-admetricks-primary;
  }
  & > h1 {
    @apply text-4xl leading-normal;
    span {
      @apply whitespace-nowrap relative z-10;
      &::before {
        @apply content-[''] w-[400px] h-5 absolute bottom-0 -left-1.5 -z-10;
        @apply rounded-xl opacity-50;
        background: transparent
          linear-gradient(90deg, #00d4ff 0%, #aeda28 100%, #fe7117 100%) 0% 0%
          no-repeat padding-box;
      }
    }
  }
}

section#header > .body {
  @apply text-lg;

  span {
    @apply text-admetricks-primary font-semibold;
  }
}

section#header .buttons {
  @apply flex flex-row gap-2;
}
</style>
