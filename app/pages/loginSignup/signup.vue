<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

const supabase = useSupabaseClient();
const router = useRouter();

const isSubmitting = ref(false);

// ✅ Zod Schema (MATCHES FORM)
const formSchema = z.object({
  fullName: z.string().min(4, "Name must be more than 4 characters"),

  email: z.string().email("Must be a valid email"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
});

// ✅ Form State
const formState = reactive({
  fullName: "",
  email: "",
  password: "",
});

type Schema = z.output<typeof formSchema>;

// ✅ Submit Function
async function formSubmission(event: FormSubmitEvent<Schema>) {
  console.log("FORM SUBMITTED"); // debug

  isSubmitting.value = true;

  try {
    const { data, error } = await supabase.auth.signUp({
      email: formState.email,
      password: formState.password,
      options: {
        data: {
          fullName: formState.fullName,
        },
        emailRedirectTo: "http://localhost:3000/login",
      },
    });

    if (error) throw error;

    console.log("Signup successful:", data);

    alert("Signup successful! Please check your email or login.");

    router.push("/loginSignup");

  } catch (err: any) {
    console.error("Signup error:", err.message);
    alert(err.message);
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<template>
  <div class="mx-auto py-10 w-7/10 holder">
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
        class="w-full form-field"
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
      <UFormField name="email" label="Email" size="lg" required class="form-field">
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
      <UFormField
        name="password"
        label="Password"
        size="lg"
        required
        class="w-full form-field"
      >
        <UInput
          v-model="formState.password"
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
        <UCheckbox required label="I am not a Robot" class="check-box-text" />
      </div>
      <UButton
        size="xl"
        type="submit"
        :ui="{
          base: 'text-indigo-50 bg-[#001f3d]',
        }"
        class="mt-3 w-full justify-center submit-btn"
        :loading="isSubmitting"
        >Submit</UButton
      >
    </UForm>
  </div>
</template>

<style scoped>
.heading {
  font-family: "Raleway";
  font-weight: 500;
  color: var(--secondary-color);
}

.submit-btn {
  font-family: "Inter", sans-serif;
  padding: 10px 0px;
}

.submit-btn:hover {
  background-color: transparent;
  border: 2px solid var(--secondary-color);
  color: var(--secondary-color);
}

.captcha-holder {
  border-radius: 7px;
  box-sizing: border-box;
  padding: 15px;
  box-shadow:
    rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}

.check-box-text {
  color: var(--secondary-color);
}

@media (max-width: 850px){
  .holder{
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  form{
    width: 90%;

    .form-field{
      font-size: 1.2rem;
    }
  }
}
</style>
