<template>
  <q-page>
    <div class="q-gutter-lg row items-center justify-evenly">
      <div class="col q-ml-xl q-mt-xl">
        <div class="row q-pl-sm q-mt-sm">
          <div class="text-subtitle1">Hello, I’m Allan,</div>
        </div>
        <div class="row q-mt-md">
          <div class="text-h1">Full Stack Developer</div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<style scoped>
.text-subtitle1 {
  font-weight: 500;
  font-size: 28px;
  line-height: 100%;
  letter-spacing: 0%;
}

.text-h1 {
  font-weight: 800;
  font-size: 100px;
  line-height: 100px;
  letter-spacing: 0%;
  vertical-align: bottom;
  color: var(--q-primary);
}

@media (max-width: 600px) {
  .text-h1 {
    font-size: 48px;
    line-height: 50px;
  }

  .text-subtitle1 {
    font-size: 20px;
  }
}
</style>
