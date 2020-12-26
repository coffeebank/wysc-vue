<template>
  <v-app>
    <v-window show-arrows class="bg-444444">

      <!-- <div class="w-24 h-screen left-0 absolute"></div>
      <div class="w-24 h-screen right-0 absolute"></div> -->

      <template v-slot:prev="{ on, attrs }">
        <div class="w-24 h-screen cursor-pointer" v-bind="attrs" v-on="on">Previous slide</div>
      </template>
      <template v-slot:next="{ on, attrs }">
        <div class="w-24 h-screen cursor-pointer" v-bind="attrs" v-on="on">Next slide</div>
      </template>

      <v-window-item transition="fade-transition" reverse-transition="fade-transition">
        <div class="w-full h-screen ww-landing bg-fixed bg-cover">Hello</div>
      </v-window-item>
      <v-window-item  transition="fade-transition" reverse-transition="fade-transition" v-for="n in 2" :key="`card-${n}`">
        <div class="w-full h-screen bg-indigo-600 text-white bg-fixed bg-cover">Slide {{ n }}</div>
      </v-window-item>
    </v-window>

    <div class="w-full h-screen ww-landing bg-fixed bg-cover">Hello</div>


    <div>

      <slot/>

      <header class="header h-screen">
        <strong>
          <g-link to="/">{{ $static.metadata.siteName }}</g-link>
        </strong>
        <nav class="nav">
          <g-link class="nav__link" to="/">Home</g-link>
          <g-link class="nav__link" to="/about/">About</g-link>
        </nav>
      </header>
    </div>

  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background-color: #914C35;
}

.v-window__next, .v-window__prev {
  top: 0 !important;
  margin: 0 !important;
  background: transparent !important;
  border-radius: 0px !important;
}

.ww-landing {
  background-image: radial-gradient(
      circle at 19% 90%,
      rgba(190, 190, 190, 0.04) 0%,
      rgba(190, 190, 190, 0.04) 17%,
      transparent 17%,
      transparent 100%
    ),
    radial-gradient(
      circle at 73% 2%,
      rgba(78, 78, 78, 0.04) 0%,
      rgba(78, 78, 78, 0.04) 94%,
      transparent 94%,
      transparent 100%
    ),
    radial-gradient(
      circle at 45% 2%,
      rgba(18, 18, 18, 0.04) 0%,
      rgba(18, 18, 18, 0.04) 55%,
      transparent 55%,
      transparent 100%
    ),
    radial-gradient(
      circle at 76% 60%,
      rgba(110, 110, 110, 0.04) 0%,
      rgba(110, 110, 110, 0.04) 34%,
      transparent 34%,
      transparent 100%
    ),
    radial-gradient(
      circle at 68% 56%,
      rgba(246, 246, 246, 0.04) 0%,
      rgba(246, 246, 246, 0.04) 16%,
      transparent 16%,
      transparent 100%
    ),
    radial-gradient(
      circle at 71% 42%,
      rgba(156, 156, 156, 0.04) 0%,
      rgba(156, 156, 156, 0.04) 47%,
      transparent 47%,
      transparent 100%
    ),
    radial-gradient(
      circle at 46% 82%,
      rgba(247, 247, 247, 0.04) 0%,
      rgba(247, 247, 247, 0.04) 39%,
      transparent 39%,
      transparent 100%
    ),
    radial-gradient(
      circle at 50% 47%,
      rgba(209, 209, 209, 0.04) 0%,
      rgba(209, 209, 209, 0.04) 45%,
      transparent 45%,
      transparent 100%
    ),
    linear-gradient(135deg, rgb(178, 129, 113), rgb(145, 76, 53));
  background-size: 150% 150%;
  animation: gradient 150s ease-in-out infinite;
}
@keyframes gradient {
  0% {
    background-position: 0% 100%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 100%;
  }
}

.ww-scrollsnap {
  scroll-snap-type: y mandatory;
  scroll-snap-stop: always;
}
.ww-scrollsnap > div {
  scroll-snap-align: start end;
  /* scroll-snap-points-y: repeat(100vh); */
}

/* .layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
} */
</style>
