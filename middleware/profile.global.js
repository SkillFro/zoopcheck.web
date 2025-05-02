export default defineNuxtRouteMiddleware((to, from) => {
    const auth=useAuthState()
    if(auth.status.value==='authenticated' && (auth.data.value.user.number==='')){
        return navigateTo('/profile')
    }
})
