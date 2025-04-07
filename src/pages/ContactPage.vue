<template>
  <q-page class="flex justify-center">
    <div class="contact-container">
      <div class="contact-title">
        <h2 class="text-h4 text-weight-bold">Contact Me</h2>
        <div class="line"></div>
      </div>

      <q-form @submit.prevent="submitForm" class="q-ma-md">
        <q-input dark filled v-model="form.name" label="Name" :rules="[(val) => !!val || 'Name is required']"
          autofocus />
        <q-input dark filled v-model="form.email" label="Email" :rules="[(val) => !!val || 'E-mail is required']" />
        <q-input dark type="textarea" filled v-model="form.message" label="Message"
          :rules="[(val) => !!val || 'Message is required']" autogrow />

        <q-btn label="Send" :loading="isSubmitting" type="submit" color="primary" outline class="q-ma-sm send-btn" />
      </q-form>

      <q-banner v-if="successMessage" class="q-mt-md" style="color: greenyellow; background-color: transparent">
        Email sent successfully!
      </q-banner>
      <q-banner v-if="errorMessage" class="q-mt-md" style="color: red; background-color: transparent">
        An error has occurred when sending the email.
      </q-banner>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EmailService from 'src/services/emailService';

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
.contact-container {
  width: 90%;
  padding: 24px;
  text-align: center;
}

.contact-title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.contact-title h2 {
  margin-right: 16px;
  color: var(--q-primary);
}

.line {
  flex-grow: 1;
  height: 2px;
  width: 150px;
  background-color: var(--q-primary);
}

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

@media (max-width: 600px) {
  .contact-title h2 {
    font-size: 20px;
  }
}
</style>
