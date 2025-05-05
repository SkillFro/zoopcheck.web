export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthState();
  console.log(auth.data.value);
  if (
    to.path !== "/profile" &&
    auth.status.value === "authenticated" &&
    (auth.data.value.user.profile == undefined ||
      auth.data.value.user.profile == "")
  ) {
    push.info({title:"Info",message:"Complete your profile"})
    return navigateTo("/profile?tab=profile");
  }
});
