<template>
  <q-page class="flex justify-center">
    <SectionContainer title="Contact Me">
      <q-form @submit.prevent="submitForm" class="q-ma-md">
        <q-input
          dark
          filled
          v-model="form.name"
          label="Name"
          :rules="[(val) => !!val || 'Name is required']"
          autofocus
        />
        <q-input
          dark
          filled
          v-model="form.email"
          label="Email"
          :rules="[(val) => !!val || 'E-mail is required']"
        />
        <q-input
          dark
          type="textarea"
          filled
          v-model="form.message"
          label="Message"
          :rules="[(val) => !!val || 'Message is required']"
          autogrow
        />

        <q-btn
          label="Send"
          :loading="isSubmitting"
          type="submit"
          color="primary"
          outline
          class="q-ma-sm send-btn"
        />
      </q-form>

      <q-banner
        v-if="successMessage"
        class="q-mt-md"
        style="color: greenyellow; background-color: transparent"
      >
        Email sent successfully!
      </q-banner>
      <q-banner
        v-if="errorMessage"
        class="q-mt-md"
        style="color: red; background-color: transparent"
      >
        An error has occurred when sending the email.
      </q-banner></SectionContainer
    >
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EmailService from 'src/services/emailService';
import SectionContainer from 'src/components/SectionContainer.vue';

const form = ref({
  name: '',
  email: '',
  message: '',
});
const isSubmitting = ref(false);
const successMessage = ref(false);
const errorMessage = ref(false);

const submitForm = async () => {
  isSubmitting.value = true;
  const templateParams = {
    name: form.value.name,
    email: form.value.email,
    message: form.value.message,
  };

  try {
    await EmailService.sendEmail(templateParams);
    successMessage.value = true;
    errorMessage.value = false;
    setTimeout(() => {
      successMessage.value = false;
    }, 5000);
  } catch (e) {
    console.error(e);
    errorMessage.value = true;
    successMessage.value = false;
    setTimeout(() => {
      errorMessage.value = false;
    }, 5000);
  }
  form.value.name = '';
  form.value.email = '';
  form.value.message = '';
  isSubmitting.value = false;
};
</script>

<style scoped>
.q-input,
.q-textarea {
  margin-bottom: 16px;
}

.send-btn {
  width: 80%;
  height: 50px;
  font-size: 18px;
  font-weight: 900;
}
</style>
