<template>
  <div>
    other layout
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <hello-world msg="hi" />
    <slot />
  </div>
</template>
