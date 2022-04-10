<template>
  <section id="header">
    <div class="content">
      <div class="title">
        <h5>Estamos para ayudarte</h5>
        <h1>
          ¿Tienes problemas <br v-if="screenWidth >= 640" />
          para <span>entender el mercado</span> de la publicidad digital?
        </h1>
      </div>
      <p class="body">
        El Mercado de la publicidad online es incierto y complejo, Admetricks te
        <span
          >ayuda a visibilizar cómo desempeñan las campañas y contenidos</span
        >
        versus los de tu competencia en tiempo real con reportes y alertas
        automáticas
      </p>
      <div class="buttons">
        <am-button>Solicitar demo</am-button>
        <am-button type="link">Ver funcionalidades</am-button>
      </div>
    </div>
    <div class="devices">
      <am-card alternative class="w-[530px] h-[405px]"></am-card>
      <am-card alternative class="w-[260px] h-[486px]"></am-card>
    </div>
    <div class="logo">
      <img src="../../assets/logo-admetricks.png" alt="">
    </div>
  </section>
</template>

<script setup lang="ts">
import AmButton from "../../components/AmButton.vue";
import AmCard from "../../components/AmCard.vue";
import { useWindowSize } from "@vueuse/core";

const { width: screenWidth } = useWindowSize();
</script>

<style lang="postcss">
section#header {
  @apply p-4 pt-[450px] flex flex-row mx-auto;
  @apply xl:w-[1180px];
}
section#header > .content {
  @apply flex flex-col gap-8 w-full max-w-[400px] sm:max-w-[540px] pl-4;
}

section#header > .content > .title {
  @apply text-white font-semibold;
  & > h5 {
    @apply text-admetricks-primary;
  }
  & > h1 {
    @apply text-xl leading-normal;
    @apply sm:text-4xl;
    /* custom underline */
    span {
      @apply whitespace-nowrap relative z-20;
      &::before {
        @apply content-[''] w-[200px] h-5 absolute bottom-0 -left-1.5 -z-10;
        @apply rounded-xl opacity-50;
        background: transparent
          linear-gradient(90deg, #00d4ff 0%, #aeda28 100%, #fe7117 100%) 0% 0%
          no-repeat padding-box;

        @apply sm:w-[400px];
      }
    }
  }
}

section#header > .content > .body {
  @apply sm:text-lg text-sm;

  span {
    @apply text-admetricks-primary font-semibold;
  }
}

section#header > .content > .buttons {
  @apply flex flex-row gap-2;
}

/* using cards instead of images */
section#header > .devices {
  @apply relative w-[540px] hidden;
  @apply xl:block;

  & > .card {
    @apply absolute;

    &:first-child {
      @apply left-12;
    }
    &:last-child {
      @apply right-0 -translate-y-1/2 top-1/2;
    }
  }
}
section#header > .logo {
  @apply w-[720px] h-[720px] absolute -z-10 top-40 right-0;
  & > img {
    @apply w-full h-full;
  }
}
</style>
