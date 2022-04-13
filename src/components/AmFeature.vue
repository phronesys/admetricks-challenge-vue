<template>
  <div class="feature">
    <slot name="img"></slot>
    <h4>
      <slot name="title"></slot>
    </h4>
    <p>
      <slot name="body"></slot>
    </p>
  </div>
</template>

<style lang="postcss">
.feature {
  @apply flex flex-col gap-2 w-full sm:max-w-[275px] p-4 relative;
  & > img {
    @apply w-8 h-8;
  }
  & > h4 {
    @apply text-lg text-white font-semibold;
    &::before {
      @apply w-0.5 h-6 block bg-admetricks-primary;
      @apply content-[''] absolute left-0 translate-y-0.5;
    }
    
  }
  & > p {
    @apply leading-5;
  }
}
</style>
