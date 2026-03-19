<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

const items = ref(["+91", "+62", "+1", "+69"]);
const value = ref("+91");

const isSubmitting = ref(false);

const formSchema = z.object({
  fullName: z
    .string("Please enter your Name")
    .min(4, "Name must be more than 4 characters"),
  email: z.email("Must be a valid email"),
  phoneNumber: z
    .string()
    .transform((val) => val.replace(/\D/g, ""))
    .refine((val) => val.length == 10, {
      message: "Invalid phone number",
    }),
});

const formState = reactive({
  fullName: undefined,
  email: undefined,
  phoneNumber: undefined,
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
  <div class="mx-auto py-10 w-7/10">
    <UForm
      :state="formState"
      :schema="formSchema"
      @submit="formSubmission"
      class="space-y-3"
    >
      <h2 class="text-center heading">
        Please enter your credentials to create an Account
      </h2>
      <UFormField
        name="fullName"
        label="Full Name"
        size="lg"
        required
        class="w-full"
      >
        <UInput
          v-model="formState.fullName"
          class="w-full"
          placeholder="Enter your name"
          :ui="{
            base: 'bg-transparent text-indigo-950',
          }"
        />
      </UFormField>
      <UFormField name="email" label="Email" size="lg" required>
        <UInput
          v-model="formState.email"
          class="w-full"
          type="email"
          placeholder="Enter your email"
          :ui="{
            base: 'bg-transparent text-indigo-950',
          }"
        />
      </UFormField>
      <!-- <UFormField name="phoneNumber" label="Phone Number" size="lg" required>
        <div class="phone-number-container w-full">
          <UInputMenu
            v-model="value"
            :items="items"
            class="w-15/100"
            :ui="{
              base: 'bg-transparent text-indigo-950',
            }"
            
          />
          <UInput
            v-model="formState.phoneNumber"
            class="w-75/100"
            placeholder="Enter phone no."
            :ui="{
              base: 'bg-transparent text-indigo-950',
            }"
          />
        </div>
      </UFormField> -->
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
        :ui="{
          base: 'bg-transparent text-indigo-950',
        }"
      />
    </UFormField>
      <div class="captcha-holder">
        <UCheckbox required label="I am not a Robot" class="check-box-text"/>
      </div>
      <UButton
        size="xl"
        type="submit"
        color="primary"
        class="mt-3 w-full justify-center submit-btn text-indig-950"
        :loading="isSubmitting"
        >Submit</UButton
      >
    </UForm>
  </div>
</template>

<style scoped>
/* .form{
  display: flex;
  flex-direction: column;
} */

/* assets/css/main.css OR <style> */
.heading {
  font-family: "Raleway";
  font-weight: 500;
  color: var(--secondary-color);
}

.submit-btn {
  font-family: "Inter", sans-serif;
  /* color: var(--primary-color); */
  padding: 10px 0px;
  /* background-color: orange; */
}

/* .submit-btn:hover{
  background-color: transparent;
  border: 2px solid var(--secondary-color);
  color: var(--secondary-color);
} */

.captcha-holder {
  border-radius: 7px;
  box-sizing: border-box;
  padding: 15px;
  /* box-shadow: 9px 10px 30px -2px rgba(0,0,0,0.45); */
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}

.check-box-text{
  color: var(--secondary-color);
}
</style>
