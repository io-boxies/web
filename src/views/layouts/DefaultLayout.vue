<template>
  <div>
    default layout
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <hello-world msg="hi" />
    <HelloWorld msg="bye" />

    <slot />
  </div>
</template>
