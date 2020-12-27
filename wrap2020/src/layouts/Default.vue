<template>
  <v-app transition="fade-transition">
    
    <v-window show-arrows class="bg-444444" 
      v-for="(item, index)"
      :key="index"
      :title=item
      @click="wwStoryPageNum(index)"
    >

      <!-- <div class="w-24 h-screen left-0 absolute"></div>
      <div class="w-24 h-screen right-0 absolute"></div> -->

      <template v-slot:prev="{ on, attrs }">
        <div class="w-12 sm:w-24 h-screen cursor-pointer" v-bind="attrs" v-on="on"></div>
      </template>
      <template v-slot:next="{ on, attrs }">
        <div class="w-12 sm:w-24 h-screen cursor-pointer" v-bind="attrs" v-on="on"></div>
      </template>

      <v-window-item transition="fade-transition" reverse-transition="fade-transition" class="select-none cursor-default">
        <div transition="fade-transition" class="w-full h-screen flex flex-wrap items-center place-content-between justify-center ww-landing bg-fixed bg-cover">
          <nav class="flex items-center">
            <a href="https://wysc.us.to/" rel="noopener">
              <img src="https://wysc.us.to/media/wysc/wysc_maskable_icon.png" class="w-12 sm:w-16 w-12 sm:h-16 rounded-lg m-t2 shadow hover:shadow-lg transition-shadow" />
            </a>
            <div class="hidden sm:flex items-center transform hover:scale-x-105 transition-transform active:animate-ping cursor-pointer">
              <h1 class="text-4xl font-bold font-gochi ml-t1 text-gray-300">Wrapped</h1>
              <div class="text-xl -ml-t1 pb-t4 transform rotate-12">🎀</div>
            </div>
            <div class="flex-grow"></div>
            <h1 class="swing-in-bottom-bck-03 xs:text-lg sm:text-xl font-jost font-bold break-all mx-t1 xs:mx-t4 text-gray-300" v-if="this.$router.history.current.path != '/'">for {{$page.googleSheet.user}}</h1>
          </nav>
          <div class="w-full text-center px-t2 xs:px-t8">
            <div class="swing-in-bottom-bck w-full flex items-center justify-center transform-all">
              <div class="text-2xl mr-t1 pb-t4 transform -rotate-12 transition-opacity opacity-0" aria-hidden="true" :class="{'opacity-100' : snowFall == true}">❄️</div>
              <h1 class="text-4xl xs:text-5xl sm:text-6xl text-gray-200 font-gochi">Wysc 2020's</h1>
              <div class="text-2xl ml-t1 pb-t4 transform rotate-12" aria-hidden="true">☃️</div>
            </div>
            <div class="swing-in-bottom-bck-02">
              <div class="transition-transform transform hover:scale-105 cursor-pointer" @click="snowFall = !snowFall">
                <h1 class="text-5xl xs:text-7xl sm:text-8xl font-gochi bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-red-400 to-green-300 ww-gradient-text">Wrapped Stats</h1>
              </div>
            </div>
            <div class="swing-in-bottom-bck-03">
              <div class="hidden lg:block text-lg sm:text-xl text-pink-300 animate-bounce-x mt-t6 pl-t2">Click your screen's right edge to start&ensp;&blacktriangleright;</div>
              <div class="lg:hidden xs:text-lg sm:text-xl text-pink-300 animate-bounce-x mt-t6 pl-t2">Tap your screen's right edge to start&ensp;&blacktriangleright;</div>
            </div>
          </div>
          <div class="w-full">
            <nav aria-label="Footer" class="swing-in-bottom-bck-03 w-full flex items-center p-t2 -mb-t1">
              <a href="https://wysc.us.to/wrapped/about" rel="noopener">
                <div class="bg-transparent border-solid text-sm font-bold border-2 border-gray-300 text-gray-300 px-t2 py-t1 transition-all duration-300 rounded hover:text-yellow-500 hover:border-yellow-500">About</div>
              </a>
              <div class="flex-grow"></div>
              <div class="text-gray-200">&copy; 2021, by Wysc</div>
            </nav>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 59">
              <path
                fill="#f3f4f5"
                fill-opacity="1"
                d="m 0,6.45241 14.1,6.45242 c 14.1,6.45242 41.9,19.35726 70.9,27.9672 27.9,8.52929 56,12.96533 84,6.45242 28.6,-6.39193 57,-23.7328 85,-23.67231 28.4,-0.0605 57,17.28038 85,19.35726 28.1,2.15752 56,-10.74731 85,-13.97352 27.8,-3.22621 56,3.22621 84,3.22621 28.5,0 57,-6.45242 85,-9.67863 28.2,-3.22621 56,-3.22621 85,0 27.9,3.22621 56,9.67863 84,16.13105 28.6,6.45241 57,12.90483 85,9.67862 28.3,-3.22621 57,-16.13104 85,-16.13104 28,0 56,12.90483 84,16.13104 28.7,3.22621 57,-3.22621 85,-9.67862 28.4,-6.45242 57,-12.90484 85,-11.83616 28.1,1.14934 56,9.61814 85,9.67863 27.8,-0.0605 56,-8.52929 84,-16.13105 28.5,-7.5211 57,-13.97352 71,-17.19973 L 1440,0 v 58.07176 h -14.1 c -14.1,0 -41.9,0 -70.9,0 -27.9,0 -56,0 -84,0 -28.6,0 -57,0 -85,0 -28.4,0 -57,0 -85,0 -28.1,0 -56,0 -85,0 -27.8,0 -56,0 -84,0 -28.5,0 -57,0 -85,0 -28.2,0 -56,0 -85,0 -27.9,0 -56,0 -84,0 -28.6,0 -57,0 -85,0 -28.3,0 -57,0 -85,0 -28,0 -56,0 -84,0 -28.7,0 -57,0 -85,0 -28.4,0 -57,0 -85,0 -28.1,0 -56,0 -85,0 -27.8,0 -56,0 -84,0 -28.5,0 -57,0 -71,0 H 0 Z"
                id="path2"
                style="stroke-width:0.449041" />
            </svg>
          </div>
        </div>
        <div class="snowflakes" aria-hidden="true" v-if="snowFall == true">
          <div class="snowflake"> ❅</div><div class="snowflake"> ❆</div><div class="snowflake"> ❅</div><div class="snowflake"> ❆</div><div class="snowflake"> ❅</div><div class="snowflake"> ❆</div><div class="snowflake"> ❅</div><div class="snowflake"> ❆</div><div class="snowflake"> ❅</div><div class="snowflake"> ❆</div><div class="snowflake"> ❅</div><div class="snowflake"> ❆</div>
        </div>
      </v-window-item>

      <v-window-item  transition="fade-transition" reverse-transition="fade-transition">
        <div class="w-full h-screen bg-indigo-600 text-white bg-fixed bg-cover">

            <canvas id="my-chart" width="500" height="300"></canvas>
          
        </div>
      </v-window-item>

      <v-window-item  transition="fade-transition" reverse-transition="fade-transition" v-for="n in 2" :key="`card-${n}`">
        <div class="w-full h-screen bg-indigo-600 text-white bg-fixed bg-cover">Slide {{ n }}</div>
      </v-window-item>

      <v-window-item  transition="fade-transition" reverse-transition="fade-transition">
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
      </v-window-item>
      
    </v-window>



  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
  import Chart from 'chart.js';

  function wwStoryPageNum (wwStoryPageCount) {
    if (wwStoryPageCount == "2") {
      new Chart(document.getElementById('my-chart'), {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          datasets: [
            {
              label: '2018 Sales',
              data: [300, 700, 450, 750, 450]
            }
          ],
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        },
      });
    }
  }

  export default {
    data () {
      return {
        snowFall: false,
        memCount17: "250",
        memCount18: "507",
        memCount19: "973",
        memCount20: "1686",
      }
    },
  }
</script>

<style>

.hello {
  width: 100%;
  height: 500px;
}

html{
  overflow-y: hidden !important;
}

body {
  font-family: "Jost", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background-color: #914C35;
}

.ww-landing {
  background-image: radial-gradient( circle at 19% 90%, rgba(190, 190, 190, 0.04) 0%, rgba(190, 190, 190, 0.04) 17%, transparent 17%, transparent 100% ), radial-gradient( circle at 73% 2%, rgba(78, 78, 78, 0.04) 0%, rgba(78, 78, 78, 0.04) 94%, transparent 94%, transparent 100% ), radial-gradient( circle at 45% 2%, rgba(18, 18, 18, 0.04) 0%, rgba(18, 18, 18, 0.04) 55%, transparent 55%, transparent 100% ), radial-gradient( circle at 76% 60%, rgba(110, 110, 110, 0.04) 0%, rgba(110, 110, 110, 0.04) 34%, transparent 34%, transparent 100% ), radial-gradient( circle at 68% 56%, rgba(246, 246, 246, 0.04) 0%, rgba(246, 246, 246, 0.04) 16%, transparent 16%, transparent 100% ), radial-gradient( circle at 71% 42%, rgba(156, 156, 156, 0.04) 0%, rgba(156, 156, 156, 0.04) 47%, transparent 47%, transparent 100% ), radial-gradient( circle at 46% 82%, rgba(247, 247, 247, 0.04) 0%, rgba(247, 247, 247, 0.04) 39%, transparent 39%, transparent 100% ), radial-gradient( circle at 50% 47%, rgba(209, 209, 209, 0.04) 0%, rgba(209, 209, 209, 0.04) 45%, transparent 45%, transparent 100% ), linear-gradient(135deg, rgb(130,68,47), rgb(116,60,42));
  background-size: 150% 150%;
  animation: gradient 150s ease-in-out infinite;
}
.ww-gradient-text {
  background-size: 200% 200% !important;
  animation: gradient 8s ease infinite !important;
}
@keyframes gradient {
  0% {background-position: 0% 100%;}
  50% {background-position: 100% 100%;}
  100% {background-position: 0% 100%;}
}

.ww-scrollsnap {
  scroll-snap-type: y mandatory;
  scroll-snap-stop: always;
}
.ww-scrollsnap > div {
  scroll-snap-align: start end;
  /* scroll-snap-points-y: repeat(100vh); */
}

/* Fixing Vuetify */

.v-application {
  font-family: unset !important;
}

.v-window__next, .v-window__prev {
  top: 0 !important;
  margin: 0 !important;
  background: transparent !important;
  border-radius: 0px !important;
}

/* ----------------------------------------------
 * Generated by Animista on 2020-12-26 11:10:23
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */
.swing-in-bottom-bck {
    -webkit-animation: swing-in-bottom-bck 2s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
            animation: swing-in-bottom-bck 2s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
}
.swing-in-bottom-bck-02 {
    -webkit-animation: swing-in-bottom-bck 3.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both 1s;
            animation: swing-in-bottom-bck 3.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both 1s;
}
.swing-in-bottom-bck-03 {
    -webkit-animation: swing-in-bottom-bck 2s cubic-bezier(0.455, 0.030, 0.515, 0.955) both 4s;
            animation: swing-in-bottom-bck 2s cubic-bezier(0.455, 0.030, 0.515, 0.955) both 4s;
}
@-webkit-keyframes swing-in-bottom-bck{0%{-webkit-transform:rotateX(-70deg);transform:rotateX(-70deg);-webkit-transform-origin:bottom;transform-origin:bottom;opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);-webkit-transform-origin:bottom;transform-origin:bottom;opacity:1}}@keyframes swing-in-bottom-bck{0%{-webkit-transform:rotateX(-70deg);transform:rotateX(-70deg);-webkit-transform-origin:bottom;transform-origin:bottom;opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);-webkit-transform-origin:bottom;transform-origin:bottom;opacity:1}}

.swing-in-bottom-fwd {
	-webkit-animation: swing-in-bottom-fwd 5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
	        animation: swing-in-bottom-fwd 5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
}
.swing-in-bottom-fwd-02 {
	-webkit-animation: swing-in-bottom-fwd 5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both 2s;
	        animation: swing-in-bottom-fwd 5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both 2s;
}
@-webkit-keyframes swing-in-bottom-fwd{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);-webkit-transform-origin:bottom;transform-origin:bottom;opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);-webkit-transform-origin:bottom;transform-origin:bottom;opacity:1}}@keyframes swing-in-bottom-fwd{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);-webkit-transform-origin:bottom;transform-origin:bottom;opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);-webkit-transform-origin:bottom;transform-origin:bottom;opacity:1}}



/* customizable snowflake styling */
.snowflake {
  color: #eee;
  font-size: 1em;
  font-family: Arial, sans-serif;
  /* text-shadow: 0 0 5px #000; */
}
@-webkit-keyframes snowflakes-fall{0%{top:-10%}100%{top:100%}}@-webkit-keyframes snowflakes-shake{0%,100%{-webkit-transform:translateX(0);transform:translateX(0)}50%{-webkit-transform:translateX(80px);transform:translateX(80px)}}@keyframes snowflakes-fall{0%{top:-10%}100%{top:100%}}@keyframes snowflakes-shake{0%,100%{transform:translateX(0)}50%{transform:translateX(80px)}}.snowflake{position:fixed;top:-10%;z-index:9999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;-webkit-animation-name:snowflakes-fall,snowflakes-shake;-webkit-animation-duration:10s,3s;-webkit-animation-timing-function:linear,ease-in-out;-webkit-animation-iteration-count:infinite,infinite;-webkit-animation-play-state:running,running;animation-name:snowflakes-fall,snowflakes-shake;animation-duration:10s,3s;animation-timing-function:linear,ease-in-out;animation-iteration-count:infinite,infinite;animation-play-state:running,running}.snowflake:nth-of-type(0){left:1%;-webkit-animation-delay:0s,0s;animation-delay:0s,0s}.snowflake:nth-of-type(1){left:10%;-webkit-animation-delay:1s,1s;animation-delay:1s,1s}.snowflake:nth-of-type(2){left:20%;-webkit-animation-delay:6s,.5s;animation-delay:6s,.5s}.snowflake:nth-of-type(3){left:30%;-webkit-animation-delay:4s,2s;animation-delay:4s,2s}.snowflake:nth-of-type(4){left:40%;-webkit-animation-delay:2s,2s;animation-delay:2s,2s}.snowflake:nth-of-type(5){left:50%;-webkit-animation-delay:8s,3s;animation-delay:8s,3s}.snowflake:nth-of-type(6){left:60%;-webkit-animation-delay:6s,2s;animation-delay:6s,2s}.snowflake:nth-of-type(7){left:70%;-webkit-animation-delay:2.5s,1s;animation-delay:2.5s,1s}.snowflake:nth-of-type(8){left:80%;-webkit-animation-delay:1s,0s;animation-delay:1s,0s}.snowflake:nth-of-type(9){left:90%;-webkit-animation-delay:3s,1.5s;animation-delay:3s,1.5s}.snowflake:nth-of-type(10){left:25%;-webkit-animation-delay:2s,0s;animation-delay:2s,0s}.snowflake:nth-of-type(11){left:65%;-webkit-animation-delay:4s,2.5s;animation-delay:4s,2.5s}


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
