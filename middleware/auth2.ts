export default defineNuxtRouteMiddleware((to, from) => {

    console.log("hello from middleware 2")

    const isLoggedIn = false

    console.log(to)
    // if(isLoggedIn) {
    //     // redirect to the page we want to go
    //     return navigateTo(to.fullPath)
    // }

    // return navigateTo("/login")

})