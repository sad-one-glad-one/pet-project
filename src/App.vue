<template>
  <router-view/>
</template>

<style lang="scss">
body, p {
  margin: 0;
}

p {
  color: white;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background-color: #2a2a2a;
}

::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 1);
}
</style>
