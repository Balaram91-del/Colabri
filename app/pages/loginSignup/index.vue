<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

const supabase = useSupabaseClient();
const router = useRouter();

const isSubmitting = ref(false);

// ✅ Proper state (NO undefined)
const formState = reactive({
  email: "",
  password: "",
});

// ✅ Correct Zod schema
const formSchema = z.object({
  email: z.string().email("Must be a valid email"),

  password: z
    .string()
    .min(8, "Must be at least 8 characters"),
});

type Schema = z.output<typeof formSchema>;

// ✅ Login function
async function formSubmission(event: FormSubmitEvent<Schema>) {
  console.log("LOGIN SUBMITTED"); // debug

  isSubmitting.value = true;

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formState.email,
      password: formState.password,
    });

    if (error) throw error;

    console.log("Login success:", data);

    // ✅ Redirect after login
    router.push("/dashboard");

  } catch (err: any) {
    console.error("Login error:", err.message);
    alert(err.message);
  } finally {
    isSubmitting.value = false;
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
      Continue with OTP
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
      class="w-full form-field"
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
      class="w-full form-field"
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

@media (max-width: 850px) {
  .btn-holder{
    width: 80%;
  }

  form{
    width: 80%;

    .form-field{
      font-size: 1.2rem;
    }
  }
}
</style>
