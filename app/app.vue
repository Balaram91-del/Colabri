<script setup>
const colorMode = useColorMode()
colorMode.preference = 'light'

useHead({
  title: 'Colabri',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/remixicon@4.7.0/fonts/remixicon.css'
    }
  ]
})

const supabase = useSupabaseClient()
const store = useUserInfo()

const loadUser = async () => {
  const { data: authData, error: authError } = await supabase.auth.getUser()

  if (authError || !authData.user) {
    store.setUserName('')
    store.setUserEmail('')
    return
  }

  const user = authData.user

  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('id, email, full_name, role')
    .eq('id', user.id)
    .single()

  store.setUserName(profile?.full_name || '')
  store.setUserEmail(user.email || '')
}

onMounted(async () => {
  await loadUser()

  supabase.auth.onAuthStateChange(async () => {
    await loadUser()
  })
})
</script>

<template>
  <div class="website-container">
    <NuxtPage/>
  </div>
</template>

<style>
.website-container{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  position: relative;
}
</style>
