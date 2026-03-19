<script setup lang="ts">
import { email, z } from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

const isSubmitting = ref(false);

const formState = reactive({
  email: undefined,
  password: undefined,
});

const formSchema = z.object({
  email: z.email("Must be a valid email"),
  password: z
    .string("Please enter password")
    .min(8, "must be atleast 8 characters"),
});

type Schema = z.output<typeof formSchema>;

async function formSubmission(event: FormSubmitEvent<Schema>) {
  isSubmitting.value = true;
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
  } finally {
    isSubmitting.value = false;
    console.log(event);
  }
}
</script>

<template>
  <div class="btn-holder">
    <button class="primary-btn space-y-3 w-full">
      <img
        width="40"
        height="64"
        src="https://img.icons8.com/arcade/64/phone.png"
        alt="phone"
      />
      Continue with Phone No.
    </button>
    <USeparator label="or" class="w-7/10"></USeparator>
  </div>
  <UForm
    :schema="formSchema"
    :state="formState"
    @submit="formSubmission"
    class="space-y-3 w-65/100"
  >
    <UFormField
      name="email"
      label="Email"
      size="lg"
      required
      class="w-full"
      color="primary"
    >
      <UInput
        v-model="formState.email"
        class="w-full"
        type="email"
        placeholder="Enter your email"
        required
        :ui="{
          base: 'bg-transparent text-indigo-950',
        }"
      />
    </UFormField>
    <UFormField
      name="password"
      label="Password"
      size="lg"
      required
      class="w-full"
    >
      <UInput
        class="w-full"
        type="password"
        placeholder="Enter your password"
        required
        v-model="formState.password"
        :ui="{
          base: 'bg-transparent text-indigo-950',
        }"
      />
    </UFormField>
    <div class="forgot-password-btn-holder">
      <button class="forgot-password-btn">Forgot Password ?</button>
    </div>

    <UButton
      size="xl"
      type="submit"
      class="mt-3 w-full justify-center submit-btn"
      :loading="isSubmitting"
      :ui="{
        base:'text-indigo-50 bg-[#001f3d]'
      }"
      >Submit</UButton
    >
  </UForm>
  <p>
    Don't have an Account ?
    <router-link to="/loginSignup/signup">SignUp</router-link>
  </p>
</template>

<style scoped>
.btn-holder {
  display: flex;
  flex-direction: column;
  width: 65%;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

button {
  margin: 10px 0px;
  display: flex;
  align-items: center;
}

button img {
  margin-right: 10px;
}

.forgot-password-btn-holder{
  display: flex;
  justify-content: end;
}

.forgot-password-btn {
  color: var(--secondary-color);
  cursor: pointer;
}

.forgot-password-btn:hover {
  border-bottom: 2px solid var(--tertiary-color);
}

p {
  margin: 10px;
  color: var(--secondary-color);
}

p a {
  color: var(--tertiary-color);
}

.submit-btn:hover {
  background-color: transparent;
  border: 2px solid var(--secondary-color);
  color: var(--secondary-color);
}
</style>
