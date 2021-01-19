<template>
  <v-app>

      <slot/>

      <div class="pb-48">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel molestiae temporibus repudiandae reprehenderit dolore nam magnam eum asperiores suscipit numquam odit rem, sit illo, blanditiis ad saepe labore pariatur assumenda?
      </div>
      <div class="pb-48">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel molestiae temporibus repudiandae reprehenderit dolore nam magnam eum asperiores suscipit numquam odit rem, sit illo, blanditiis ad saepe labore pariatur assumenda?
      </div>
      <div class="pb-48">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel molestiae temporibus repudiandae reprehenderit dolore nam magnam eum asperiores suscipit numquam odit rem, sit illo, blanditiis ad saepe labore pariatur assumenda?
      </div>
      <div class="pb-48">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel molestiae temporibus repudiandae reprehenderit dolore nam magnam eum asperiores suscipit numquam odit rem, sit illo, blanditiis ad saepe labore pariatur assumenda?
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

<script>
  export default {
    data () {
      return {
      }
    },
    mounted() {
      // for (var i = 0; i < this.preloadImgs.length; i++) {
      //   let preloadImg = document.createElement('img')
      //   preloadImg.src = this.preloadImgs[i]
      //   document.getElementById('preloadImgDiv').appendChild(preloadImg)
      // }

      // new Chart(document.getElementById('my-chart'), {
      //   type: 'line',
      //   data: {
      //     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      //     datasets: [
      //       {
      //         label: '2018 Sales',
      //         data: [300, 700, 450, 750, 450]
      //       }
      //     ],
      //   },
      //   options: {
      //     legend: {
      //       display: false
      //     },
      //     scales: {
      //       yAxes: [{
      //         ticks: {
      //           beginAtZero: true
      //         }
      //       }]
      //     },
      //     title: {
      //       display: false
      //     },
      //     tooltips: {
      //       enabled: false
      //     }
      //   },
      // });
    }
  }
</script>

<style>

.bg-2020review {
background-color: #914c35;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2000' height='1000' viewBox='0 0 1600 800'%3E%3Cpath fill='%23aaaaaa' d='M1102.5 734.8c2.5-1.2 24.8-8.6 25.6-7.5.5.7-3.9 23.8-4.6 24.5C1123.3 752.1 1107.5 739.5 1102.5 734.8zM1226.3 229.1c0-.1-4.9-9.4-7-14.2-.1-.3-.3-1.1-.4-1.6-.1-.4-.3-.7-.6-.9-.3-.2-.6-.1-.8.1l-13.1 12.3c0 0 0 0 0 0-.2.2-.3.5-.4.8 0 .3 0 .7.2 1 .1.1 1.4 2.5 2.1 3.6 2.4 3.7 6.5 12.1 6.5 12.2.2.3.4.5.7.6.3 0 .5-.1.7-.3 0 0 1.8-2.5 2.7-3.6 1.5-1.6 3-3.2 4.6-4.7 1.2-1.2 1.6-1.4 2.1-1.6.5-.3 1.1-.5 2.5-1.9C1226.5 230.4 1226.6 229.6 1226.3 229.1zM33 770.3C33 770.3 33 770.3 33 770.3c0-.7-.5-1.2-1.2-1.2-.1 0-.3 0-.4.1-1.6.2-14.3.1-22.2 0-.3 0-.6.1-.9.4-.2.2-.4.5-.4.9 0 .2 0 4.9.1 5.9l.4 13.6c0 .3.2.6.4.9.2.2.5.3.8.3 0 0 .1 0 .1 0 7.3-.7 14.7-.9 22-.6.3 0 .7-.1.9-.3.2-.2.4-.6.4-.9C32.9 783.3 32.9 776.2 33 770.3z'/%3E%3Cpath fill='%23cccccc' d='M171.1 383.4c1.3-2.5 14.3-22 15.6-21.6.8.3 11.5 21.2 11.5 22.1C198.1 384.2 177.9 384 171.1 383.4zM596.4 711.8c-.1-.1-6.7-8.2-9.7-12.5-.2-.3-.5-1-.7-1.5-.2-.4-.4-.7-.7-.8-.3-.1-.6 0-.8.3L574 712c0 0 0 0 0 0-.2.2-.2.5-.2.9 0 .3.2.7.4.9.1.1 1.8 2.2 2.8 3.1 3.1 3.1 8.8 10.5 8.9 10.6.2.3.5.4.8.4.3 0 .5-.2.6-.5 0 0 1.2-2.8 2-4.1 1.1-1.9 2.3-3.7 3.5-5.5.9-1.4 1.3-1.7 1.7-2 .5-.4 1-.7 2.1-2.4C596.9 713.1 596.8 712.3 596.4 711.8zM727.5 179.9C727.5 179.9 727.5 179.9 727.5 179.9c.6.2 1.3-.2 1.4-.8 0-.1 0-.2 0-.4.2-1.4 2.8-12.6 4.5-19.5.1-.3 0-.6-.2-.8-.2-.3-.5-.4-.8-.5-.2 0-4.7-1.1-5.7-1.3l-13.4-2.7c-.3-.1-.7 0-.9.2-.2.2-.4.4-.5.6 0 0 0 .1 0 .1-.8 6.5-2.2 13.1-3.9 19.4-.1.3 0 .6.2.9.2.3.5.4.8.5C714.8 176.9 721.7 178.5 727.5 179.9zM728.5 178.1c-.1-.1-.2-.2-.4-.2C728.3 177.9 728.4 178 728.5 178.1z'/%3E%3Cg fill-opacity='0.3' fill='%23FFF'%3E%3Cpath d='M699.6 472.7c-1.5 0-2.8-.8-3.5-2.3-.8-1.9 0-4.2 1.9-5 3.7-1.6 6.8-4.7 8.4-8.5 1.6-3.8 1.7-8.1.2-11.9-.3-.9-.8-1.8-1.2-2.8-.8-1.7-1.8-3.7-2.3-5.9-.9-4.1-.2-8.6 2-12.8 1.7-3.1 4.1-6.1 7.6-9.1 1.6-1.4 4-1.2 5.3.4 1.4 1.6 1.2 4-.4 5.3-2.8 2.5-4.7 4.7-5.9 7-1.4 2.6-1.9 5.3-1.3 7.6.3 1.4 1 2.8 1.7 4.3.5 1.1 1 2.2 1.5 3.3 2.1 5.6 2 12-.3 17.6-2.3 5.5-6.8 10.1-12.3 12.5C700.6 472.6 700.1 472.7 699.6 472.7zM740.4 421.4c1.5-.2 3 .5 3.8 1.9 1.1 1.8.4 4.2-1.4 5.3-3.7 2.1-6.4 5.6-7.6 9.5-1.2 4-.8 8.4 1.1 12.1.4.9 1 1.7 1.6 2.7 1 1.7 2.2 3.5 3 5.7 1.4 4 1.2 8.7-.6 13.2-1.4 3.4-3.5 6.6-6.8 10.1-1.5 1.6-3.9 1.7-5.5.2-1.6-1.4-1.7-3.9-.2-5.4 2.6-2.8 4.3-5.3 5.3-7.7 1.1-2.8 1.3-5.6.5-7.9-.5-1.3-1.3-2.7-2.2-4.1-.6-1-1.3-2.1-1.9-3.2-2.8-5.4-3.4-11.9-1.7-17.8 1.8-5.9 5.8-11 11.2-14C739.4 421.6 739.9 421.4 740.4 421.4zM261.3 590.9c5.7 6.8 9 15.7 9.4 22.4.5 7.3-2.4 16.4-10.2 20.4-3 1.5-6.7 2.2-11.2 2.2-7.9-.1-12.9-2.9-15.4-8.4-2.1-4.7-2.3-11.4 1.8-15.9 3.2-3.5 7.8-4.1 11.2-1.6 1.2.9 1.5 2.7.6 3.9-.9 1.2-2.7 1.5-3.9.6-1.8-1.3-3.6.6-3.8.8-2.4 2.6-2.1 7-.8 9.9 1.5 3.4 4.7 5 10.4 5.1 3.6 0 6.4-.5 8.6-1.6 4.7-2.4 7.7-8.6 7.2-15-.5-7.3-5.3-18.2-13-23.9-4.2-3.1-8.5-4.1-12.9-3.1-3.1.7-6.2 2.4-9.7 5-6.6 5.1-11.7 11.8-14.2 19-2.7 7.7-2.1 15.8 1.9 23.9.7 1.4.1 3.1-1.3 3.7-1.4.7-3.1.1-3.7-1.3-4.6-9.4-5.4-19.2-2.2-28.2 2.9-8.2 8.6-15.9 16.1-21.6 4.1-3.1 8-5.1 11.8-6 6-1.4 12 0 17.5 4C257.6 586.9 259.6 588.8 261.3 590.9z'/%3E%3Ccircle cx='1013.7' cy='153.9' r='7.1'/%3E%3Ccircle cx='1024.3' cy='132.1' r='7.1'/%3E%3Ccircle cx='1037.3' cy='148.9' r='7.1'/%3E%3Cpath d='M1508.7 297.2c-4.8-5.4-9.7-10.8-14.8-16.2 5.6-5.6 11.1-11.5 15.6-18.2 1.2-1.7.7-4.1-1-5.2-1.7-1.2-4.1-.7-5.2 1-4.2 6.2-9.1 11.6-14.5 16.9-4.8-5-9.7-10-14.7-14.9-1.5-1.5-3.9-1.5-5.3 0-1.5 1.5-1.5 3.9 0 5.3 4.9 4.8 9.7 9.8 14.5 14.8-1.1 1.1-2.3 2.2-3.5 3.2-4.1 3.8-8.4 7.8-12.4 12-1.4 1.5-1.4 3.8 0 5.3 0 0 0 0 0 0 1.5 1.4 3.9 1.4 5.3-.1 3.9-4 8.1-7.9 12.1-11.7 1.2-1.1 2.3-2.2 3.5-3.3 4.9 5.3 9.8 10.6 14.6 15.9.1.1.1.1.2.2 1.4 1.4 3.7 1.5 5.2.2C1510 301.2 1510.1 298.8 1508.7 297.2zM327.6 248.6l-.4-2.6c-1.5-11.1-2.2-23.2-2.3-37 0-5.5 0-11.5.2-18.5 0-.7 0-1.5 0-2.3 0-5 0-11.2 3.9-13.5 2.2-1.3 5.1-1 8.5.9 5.7 3.1 13.2 8.7 17.5 14.9 5.5 7.8 7.3 16.9 5 25.7-3.2 12.3-15 31-30 32.1L327.6 248.6zM332.1 179.2c-.2 0-.3 0-.4.1-.1.1-.7.5-1.1 2.7-.3 1.9-.3 4.2-.3 6.3 0 .8 0 1.7 0 2.4-.2 6.9-.2 12.8-.2 18.3.1 12.5.7 23.5 2 33.7 11-2.7 20.4-18.1 23-27.8 1.9-7.2.4-14.8-4.2-21.3l0 0C347 188.1 340 183 335 180.3 333.6 179.5 332.6 179.2 332.1 179.2zM516.3 60.8c-.1 0-.2 0-.4-.1-2.4-.7-4-.9-6.7-.7-.7 0-1.3-.5-1.4-1.2 0-.7.5-1.3 1.2-1.4 3.1-.2 4.9 0 7.6.8.7.2 1.1.9.9 1.6C517.3 60.4 516.8 60.8 516.3 60.8zM506.1 70.5c-.5 0-1-.3-1.2-.8-.8-2.1-1.2-4.3-1.3-6.6 0-.7.5-1.3 1.2-1.3.7 0 1.3.5 1.3 1.2.1 2 .5 3.9 1.1 5.8.2.7-.1 1.4-.8 1.6C506.4 70.5 506.2 70.5 506.1 70.5zM494.1 64.4c-.4 0-.8-.2-1-.5-.4-.6-.3-1.4.2-1.8 1.8-1.4 3.7-2.6 5.8-3.6.6-.3 1.4 0 1.7.6.3.6 0 1.4-.6 1.7-1.9.9-3.7 2-5.3 3.3C494.7 64.3 494.4 64.4 494.1 64.4zM500.5 55.3c-.5 0-.9-.3-1.2-.7-.5-1-1.2-1.9-2.4-3.4-.3-.4-.7-.9-1.1-1.4-.4-.6-.3-1.4.2-1.8.6-.4 1.4-.3 1.8.2.4.5.8 1 1.1 1.4 1.3 1.6 2.1 2.6 2.7 3.9.3.6 0 1.4-.6 1.7C500.9 55.3 500.7 55.3 500.5 55.3zM506.7 55c-.3 0-.5-.1-.8-.2-.6-.4-.7-1.2-.3-1.8 1.2-1.7 2.3-3.4 3.3-5.2.3-.6 1.1-.9 1.7-.5.6.3.9 1.1.5 1.7-1 1.9-2.2 3.8-3.5 5.6C507.4 54.8 507.1 55 506.7 55zM1029.3 382.8c-.1 0-.2 0-.4-.1-2.4-.7-4-.9-6.7-.7-.7 0-1.3-.5-1.4-1.2 0-.7.5-1.3 1.2-1.4 3.1-.2 4.9 0 7.6.8.7.2 1.1.9.9 1.6C1030.3 382.4 1029.8 382.8 1029.3 382.8zM1019.1 392.5c-.5 0-1-.3-1.2-.8-.8-2.1-1.2-4.3-1.3-6.6 0-.7.5-1.3 1.2-1.3.7 0 1.3.5 1.3 1.2.1 2 .5 3.9 1.1 5.8.2.7-.1 1.4-.8 1.6C1019.4 392.5 1019.2 392.5 1019.1 392.5zM1007.1 386.4c-.4 0-.8-.2-1-.5-.4-.6-.3-1.4.2-1.8 1.8-1.4 3.7-2.6 5.8-3.6.6-.3 1.4 0 1.7.6.3.6 0 1.4-.6 1.7-1.9.9-3.7 2-5.3 3.3C1007.7 386.3 1007.4 386.4 1007.1 386.4zM1013.5 377.3c-.5 0-.9-.3-1.2-.7-.5-1-1.2-1.9-2.4-3.4-.3-.4-.7-.9-1.1-1.4-.4-.6-.3-1.4.2-1.8.6-.4 1.4-.3 1.8.2.4.5.8 1 1.1 1.4 1.3 1.6 2.1 2.6 2.7 3.9.3.6 0 1.4-.6 1.7C1013.9 377.3 1013.7 377.3 1013.5 377.3zM1019.7 377c-.3 0-.5-.1-.8-.2-.6-.4-.7-1.2-.3-1.8 1.2-1.7 2.3-3.4 3.3-5.2.3-.6 1.1-.9 1.7-.5.6.3.9 1.1.5 1.7-1 1.9-2.2 3.8-3.5 5.6C1020.4 376.8 1020.1 377 1019.7 377zM1329.7 573.4c-1.4 0-2.9-.2-4.5-.7-8.4-2.7-16.6-12.7-18.7-20-.4-1.4-.7-2.9-.9-4.4-8.1 3.3-15.5 10.6-15.4 21 0 1.5-1.2 2.7-2.7 2.8 0 0 0 0 0 0-1.5 0-2.7-1.2-2.7-2.7-.1-6.7 2.4-12.9 7-18 3.6-4 8.4-7.1 13.7-8.8.5-6.5 3.1-12.9 7.4-17.4 7-7.4 18.2-8.9 27.3-10.1l.7-.1c1.5-.2 2.9.9 3.1 2.3.2 1.5-.9 2.9-2.3 3.1l-.7.1c-8.6 1.2-18.4 2.5-24 8.4-3 3.2-5 7.7-5.7 12.4 7.9-1 17.7 1.3 24.3 5.7 4.3 2.9 7.1 7.8 7.2 12.7.2 4.3-1.7 8.3-5.2 11.1C1335.2 572.4 1332.6 573.4 1329.7 573.4zM1311 546.7c.1 1.5.4 3 .8 4.4 1.7 5.8 8.7 14.2 15.1 16.3 2.8.9 5.1.5 7.2-1.1 2.7-2.1 3.2-4.8 3.1-6.6-.1-3.2-2-6.4-4.8-8.3C1326.7 547.5 1317.7 545.6 1311 546.7z'/%3E%3C/g%3E%3C/svg%3E");
}

/* html{
  overflow-y: hidden !important;
} */

body {
  font-family: "Patrick Hand SC", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background-color: #914C35;
}

.ww-landing {
  background-image: radial-gradient( circle at 19% 90%, rgba(190, 190, 190, 0.04) 0%, rgba(190, 190, 190, 0.04) 17%, transparent 17%, transparent 100% ), radial-gradient( circle at 73% 2%, rgba(78, 78, 78, 0.04) 0%, rgba(78, 78, 78, 0.04) 94%, transparent 94%, transparent 100% ), radial-gradient( circle at 45% 2%, rgba(18, 18, 18, 0.04) 0%, rgba(18, 18, 18, 0.04) 55%, transparent 55%, transparent 100% ), radial-gradient( circle at 76% 60%, rgba(110, 110, 110, 0.04) 0%, rgba(110, 110, 110, 0.04) 34%, transparent 34%, transparent 100% ), radial-gradient( circle at 68% 56%, rgba(246, 246, 246, 0.04) 0%, rgba(246, 246, 246, 0.04) 16%, transparent 16%, transparent 100% ), radial-gradient( circle at 71% 42%, rgba(156, 156, 156, 0.04) 0%, rgba(156, 156, 156, 0.04) 47%, transparent 47%, transparent 100% ), radial-gradient( circle at 46% 82%, rgba(247, 247, 247, 0.04) 0%, rgba(247, 247, 247, 0.04) 39%, transparent 39%, transparent 100% ), radial-gradient( circle at 50% 47%, rgba(209, 209, 209, 0.04) 0%, rgba(209, 209, 209, 0.04) 45%, transparent 45%, transparent 100% ), linear-gradient(135deg, rgb(130,68,47), rgb(116,60,42));
}
.ww-bg-2 {
  background-image: radial-gradient(circle at center right, rgb(43, 36, 140) 0%, rgb(43, 36, 140) 64%,rgb(51, 30, 166) 64%, rgb(51, 30, 166) 80%,rgb(59, 23, 191) 80%, rgb(59, 23, 191) 86%,rgb(67, 17, 217) 86%, rgb(67, 17, 217) 92%,rgb(75, 10, 242) 92%, rgb(75, 10, 242) 100%);}
.ww-bg-move {
  background-size: 150% 150%;
  animation: gradient 120s ease-in-out infinite;
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

.ww-highlight-text {
  background-origin: 0;
  background-size: 200% 50%;
  background-repeat: repeat-x;
  background-position: 0 100%;
  transition: background-position 0.5s;
  background-position: -100% 100%;
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
.fade-in-bottom {
	-webkit-animation: fade-in-bottom 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both 0.5s;
	        animation: fade-in-bottom 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both 0.5s;
}
.fade-in-bottom-02 {
	-webkit-animation: fade-in-bottom 3.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both 1.5s;
	        animation: fade-in-bottom 3.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both 1.5s;
}
.fade-in-bottom-03 {
	-webkit-animation: fade-in-bottom 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both 2.5s;
	        animation: fade-in-bottom 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both 2.5s;
}
@-webkit-keyframes fade-in-bottom{0%{-webkit-transform:translateY(50px);transform:translateY(50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes fade-in-bottom{0%{-webkit-transform:translateY(50px);transform:translateY(50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}

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
@-webkit-keyframes snowflakes-fall{0%{top:-10%}100%{top:100%}}@-webkit-keyframes snowflakes-shake{0%,100%{-webkit-transform:translateX(0);transform:translateX(0)}50%{-webkit-transform:translateX(80px);transform:translateX(80px)}}@keyframes snowflakes-fall{0%{top:-10%}100%{top:100%}}@keyframes snowflakes-shake{0%,100%{transform:translateX(0)}50%{transform:translateX(80px)}}.snowflake{position:fixed;top:-10%;/*z-index:9999;*/-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;-webkit-animation-name:snowflakes-fall,snowflakes-shake;-webkit-animation-duration:10s,3s;-webkit-animation-timing-function:linear,ease-in-out;-webkit-animation-iteration-count:infinite,infinite;-webkit-animation-play-state:running,running;animation-name:snowflakes-fall,snowflakes-shake;animation-duration:10s,3s;animation-timing-function:linear,ease-in-out;animation-iteration-count:infinite,infinite;animation-play-state:running,running}.snowflake:nth-of-type(0){left:1%;-webkit-animation-delay:0s,0s;animation-delay:0s,0s}.snowflake:nth-of-type(1){left:10%;-webkit-animation-delay:1s,1s;animation-delay:1s,1s}.snowflake:nth-of-type(2){left:20%;-webkit-animation-delay:6s,.5s;animation-delay:6s,.5s}.snowflake:nth-of-type(3){left:30%;-webkit-animation-delay:4s,2s;animation-delay:4s,2s}.snowflake:nth-of-type(4){left:40%;-webkit-animation-delay:2s,2s;animation-delay:2s,2s}.snowflake:nth-of-type(5){left:50%;-webkit-animation-delay:8s,3s;animation-delay:8s,3s}.snowflake:nth-of-type(6){left:60%;-webkit-animation-delay:6s,2s;animation-delay:6s,2s}.snowflake:nth-of-type(7){left:70%;-webkit-animation-delay:2.5s,1s;animation-delay:2.5s,1s}.snowflake:nth-of-type(8){left:80%;-webkit-animation-delay:1s,0s;animation-delay:1s,0s}.snowflake:nth-of-type(9){left:90%;-webkit-animation-delay:3s,1.5s;animation-delay:3s,1.5s}.snowflake:nth-of-type(10){left:25%;-webkit-animation-delay:2s,0s;animation-delay:2s,0s}.snowflake:nth-of-type(11){left:65%;-webkit-animation-delay:4s,2.5s;animation-delay:4s,2.5s}


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
