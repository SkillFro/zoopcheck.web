export default defineNuxtRouteMiddleware((to, from) => {
    const auth=useAuthState()
    console.log(auth.status.value==='authenticated' && to.path!=='/profile')
    if(auth.status.value==='authenticated' && (auth.data.value.user.number==='')){
        console.log("console")
        return navigateTo('/profile')
    }
})
