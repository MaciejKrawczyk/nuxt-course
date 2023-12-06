<template>
  <div class="bg-amber-300">
    <NuxtLayout>
      <Header />
      <header>
        <ul>
          <li>
            <NuxtLink to="/events">Events</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
        </ul>
      </header>

      <main class="bg-red-300">
        <NuxtPage/>
      </main>

    </NuxtLayout>
  </div>
</template>
