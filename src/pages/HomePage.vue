<template>
  <q-page>
    <div class="q-gutter-lg row">
      <div class="col q-ml-xl q-mt-xl">
        <div class="row">
          <div class="text-subtitle1">Hello, I’m Allan,</div>
        </div>

        <div class="q-mt-md">
          <TextAnimate text="Full Stack" />
          <TextAnimate text="Developer" />
        </div>
      </div>
    </div>
  </q-page>
</template>
<script lang="ts" setup>
import TextAnimate from 'src/components/TextAnimate.vue';
</script>
<style scoped>
.text-subtitle1 {
  font-weight: 600;
  font-size: 38px;
  line-height: 100%;
  letter-spacing: 0%;
}

@media (max-width: 600px) {
  .text-subtitle1 {
    font-size: 28px;
    margin-bottom: 20px;
  }
}
</style>
