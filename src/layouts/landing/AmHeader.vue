<template>
  <section id="header">
    <div class="content">
      <h5 class="lead">Estamos para ayudarte</h5>
      <h1 class="title">
        ¿Tienes problemas <br v-if="screenWidth >= 1024" />
        para <span>entender el mercado</span> de la publicidad digital?
      </h1>
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
      <div class="logo">
        <img src="../../assets/logo-admetricks.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AmButton from "../../components/AmButton.vue";
import AmCard from "../../components/AmCard.vue";
import { useWindowSize } from "@vueuse/core";

/* using a composable to tell vue the screen width */
const { width: screenWidth } = useWindowSize();
</script>

<style lang="postcss">
section#header {
  @apply p-4 pt-40 sm:pt-60 xl:pt-[630px] flex flex-row mx-auto z-10;
  @apply xl:w-[1120px];
}

section#header > .content {
  @apply flex flex-col gap-4 lg:gap-8 xl:w-[580px];

  & > .lead {
    @apply text-admetricks-primary font-semibold lg:-mb-5;
  }

  & > .title {
    @apply max-w-xs text-2xl text-white font-semibold;
    @apply sm:text-3xl sm:max-w-md;
    @apply xl:max-w-xl xl:text-[38px] xl:leading-[53px];
    /* custom underline */
    span {
      @apply whitespace-nowrap relative z-20;
      &::before {
        @apply content-[''] w-full h-5 absolute -bottom-1 -left-1 -z-10;
        @apply rounded-xl opacity-50;
        background: transparent
          linear-gradient(90deg, #00d4ff 0%, #aeda28 100%, #fe7117 100%) 0% 0%
          no-repeat padding-box;

      }
    }
  }

  & > .body {
    @apply text-base sm:text-lg max-w-xs;
    @apply sm:max-w-lg xl:max-w-[540px];

    span {
      @apply text-admetricks-primary font-semibold;
    }
  }
  & > .buttons {
    @apply flex flex-row gap-2;
  }
}

/* right elements */
section#header > .devices {
  @apply relative w-[540px] hidden;
  @apply xl:block;

  & > .card {
    @apply absolute;
    &:nth-child(1) {
      @apply left-12;
    }
    &:nth-child(2) {
      @apply -right-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2;
    }
  }
  & > .logo {
    @apply w-[900px] h-[900px] absolute -z-10 -bottom-12 left-44;
    & > img {
      @apply w-full h-full;
    }
  }
}
</style>
