<template>
  <layout>
    <div>{{$page.googleSheet.id4}}</div>
    <div>{{$page.googleSheet.user}}</div>
    <div>{{$page.googleSheet.tatsu}}</div>
    <div>{{$page.googleSheet.joinDate}}</div>
  </layout>
</template>

<page-query>
query Post ($path: String!) {
  googleSheet (path: $path) {
    id4
    user
    tatsu
    pomoTime
    simuRank
    simuMoney
    simuCareer
    roleHigh
    contribHigh
    joinDate
    memberNum
    nitro
    ecoSupp
  }
}
</page-query>