<template lang="jade">
.main
  .header
    router-link(to="/calling",tag="span",class="sleft")
      img(src="@/assets/homeImg/fanhuijiantou@2x.png",class="backImg")
    span {{ $t('check.name')}}
    span
  .section
    .towinghead
      .headTitle
        span {{ $t('check.tuohead')}}
        input(placeholder="输入车牌号", v-model= 'licensePlate')
      .headConcat
        .concaTlamp {{ $t('check.fadongji')}}
        .wu
          span {{ $t('check.start')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" ,v-model= "start", @change = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "start", @change = "hhh()")
        .wu
          span {{ $t('check.ring')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0", v-model= "ring", @click = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "ring", @click = "hhh()")
        .wu
          span {{ $t('check.bspeed')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" v-model= "bspeed",@click = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "bspeed",@click = "hhh()")
        .wu
          span {{ $t('check.accelerate')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0",v-model= "accelerate",@click = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "accelerate",@click = "hhh()")
        //- 发动机
        .concaTlamp {{ $t('check.brake')}}
        .wu
          span {{ $t('check.brekestate')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" ,v-model= "brake", @change = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "brake", @change = "hhh()")
        //-  刹车踏板
        .oil
          span {{ $t('check.handbrake')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0",v-model= "handbrake",@click = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "handbrake",@click = "hhh()")
        //- 
        .concaTlamp {{ $t('check.shachayou')}}
        .wu
          span {{ $t('check.brakefluid')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" ,v-model= "brakefluid", @change = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "brakefluid", @change = "hhh()")
        //- 
        .concaTlamp {{ $t('check.yalizhen')}}
        .wu
          span {{ $t('check.rise')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" ,v-model= "rise", @change = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "rise", @change = "hhh()")
        //- 
        .concaTlamp {{ $t('check.shache')}}
        .wu
          span {{ $t('check.pedal')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" ,v-model= "pedal", @change = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "pedal", @change = "hhh()")
        //- 
        .concaTlamp {{ $t('check.pifati')}}
        .wu
          span {{ $t('check.skinraft')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" ,v-model= "skinraft", @change = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "skinraft", @change = "hhh()")
        //-
        .concaTlamp {{ $t('check.jianxi')}}
        .wu
          span {{ $t('check.clearance')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" ,v-model= "clearance", @change = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "clearance", @change = "hhh()")
        //- 
        //- 
        .concaTlamp {{ $t('check.fdys')}}
        .wu
          span  {{ $t('check.wiper')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" ,v-model= "wiper", @change = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "wiper", @change = "hhh()")
        //- 
        //- 
        .concaTlamp {{ $t('check.yushua')}}
        .wu
          span {{ $t('check.wiperslide')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" ,v-model= "wiperslide", @change = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "wiperslide", @change = "hhh()")
        //- 
        //- 
        .concaTlamp {{ $t('check.suixiang')}}
        .wu
          span {{ $t('check.tank')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" ,v-model= "tank", @change = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "tank", @change = "hhh()")
        //- 
        .oil
          span {{ $t('check.fengandpi')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0", v-model= "fengandpi",@click = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "fengandpi",@click = "hhh()")
        //- 
        //- 
        .concaTlamp {{ $t('check.ruenhua')}}
        .wu
          span {{ $t('check.faandyou')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" ,v-model= "faandyou", @change = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "faandyou", @change = "hhh()")
        //- 
        .concaTlamp {{ $t('check.dianyuna')}}
        .wu
          span {{ $t('check.partstate')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" ,v-model= "partstate", @change = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "partstate", @change = "hhh()")
        //- 
        .concaTlamp {{ $t('check.qifa')}}
        .wu
          span {{ $t('check.valvestate')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" ,v-model= "valvestate", @change = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "valvestate", @change = "hhh()")
        .wu
          span {{ $t('check.damage')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" ,v-model= "damage", @change = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "damage", @change = "hhh()")
        //- 
        .concaTlamp {{ $t('check.qianyin')}}
        .wu 
          span {{ $t('check.towstate')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" ,v-model= "towstate", @change = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "towstate", @change = "hhh()")
        .wu
          span {{ $t('check.towdamage')}}
          .radiobox
            label(class="newradio") {{ $t('check.yes')}}
              span(class="b-radio") 
              input(type="radio", class="a-radio", :checked= "1", :value="0" ,v-model= "towdamage", @change = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "towdamage", @change = "hhh()")
        //- 
        .concaTlamp {{ $t('check.dianchi')}}
        .wu
          span {{ $t('check.Battery')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" ,v-model= "Battery", @change = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "Battery", @change = "hhh()")
        //- 
        .concaTlamp {{ $t('check.qiguan')}}
        .wu
          span {{ $t('check.gastank')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" ,v-model= "gastank", @change = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "gastank", @change = "hhh()")
        //- 
        .concaTlamp {{ $t('check.dengguang')}}
        .wu
          span {{ $t('check.lightingbad')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" ,v-model= "lightingbad", @change = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "lightingbad", @change = "hhh()")
        .wu
          span {{ $t('check.lightingsun')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" ,v-model= "lightingsun", @change = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "lightingsun", @change = "hhh()")
        //- 
        .concaTlamp {{ $t('check.luntai')}}
        .wu
          span {{ $t('check.tyrepressure')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" ,v-model= "tyrepressure", @change = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "tyrepressure", @change = "hhh()")
        .wu
          span {{ $t('check.tyreunusual')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" ,v-model= "tyreunusual", @change = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "tyreunusual", @change = "hhh()")
        .wu
          span {{ $t('check.tyreabrasion')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" ,v-model= "tyreabrasion", @change = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "tyreabrasion", @change = "hhh()")
        .wu
          span {{ $t('check.tyrecrazing')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" ,v-model= "tyrecrazing", @change = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "tyrecrazing", @change = "hhh()")
        .wu
          span {{ $t('check.tyrelines')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" ,v-model= "tyrelines", @change = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "tyrelines", @change = "hhh()")
        //- 
        .other
          p {{ $t('check.toheadtext')}}
          textarea(cols="40", rows="6",class="newtext", v-model="toheadtext")
    .hui
    .towingPlate
      .headTitle
        span {{ $t('check.pallet')}}
        input( v-model= "trayNum")
      .headConcat
        .concaTlamp {{ $t('check.luntai')}}
        .wu
          span {{ $t('check.ptyrepressure')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" ,v-model= "ptyrepressure", @change = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "ptyrepressure", @change = "hhh()")
        .wu
          span {{ $t('check.ptyreunusual')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0", v-model= "ptyreabrasion", @click = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "ptyreabrasion", @click = "hhh()")
        .wu
          span {{ $t('check.ptyrecrazing')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" v-model= "ptyrecrazing",@click = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "ptyrecrazing",@click = "hhh()")
        .wu
          span {{ $t('check.ptyreLeak')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0",v-model= "ptyreLeak", @click = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "ptyreLeak", @click = "hhh()")
        .wu
          span {{ $t('check.ptyrelines')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0",v-model= "ptyrelines",@click = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "ptyrelines",@click = "hhh()")
        .wu
          span {{ $t('check.ptyreabrasion')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0",v-model= "ptyreunusual",@click = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "ptyreunusual",@click = "hhh()")
        //- 轮胎及
        .concaTlamp {{ $t('check.dengguang')}}
        .wu
          span {{ $t('check.ponstate')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" ,v-model= "ponstate", @change = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "ponstate", @change = "hhh()")
        .wu
          span {{ $t('check.pdamage')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0", v-model= "pdamage", @click = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "pdamage", @click = "hhh()")
        //- 
        .oil
          span {{ $t('check.pstoplight')}}
          .radiobox(@click="hhh()")
            label(class="newradio",)
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" v-model= "pstoplight")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "pstoplight")
        .oil
          span {{ $t('check.pindicator')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" v-model= "pindicator",@click = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "pindicator",@click = "hhh()")
        .oil
          span {{ $t('check.preversing')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" v-model= "preversing",@click = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "preversing",@click = "hhh()")
        .oil
          span {{ $t('check.preflector')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" v-model= "preflector",@click = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "preflector",@click = "hhh()")
        .oil
          span {{ $t('check.pbrake')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" v-model= "pbrake",@click = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "pbrake",@click = "hhh()")
        //- 
        .concaTlamp {{ $t('check.qiguan')}}
        .wu
          span {{ $t('check.pCondensate')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" ,v-model= "pCondensate", @change = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "pCondensate", @change = "hhh()")
        .concaTlamp {{ $t('check.qisha')}}
        .wu
          span {{ $t('check.pjunlie')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0", v-model= "pjunlie", @click = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "pjunlie", @click = "hhh()")
        .wu
          span {{ $t('check.psun')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0", v-model= "psun", @click = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "psun", @click = "hhh()")
        .wu
          span {{ $t('check.plou')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0", v-model= "plou", @click = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "plou", @click = "hhh()")
        .concaTlamp {{ $t('check.spt')}}
        .wu
          span {{ $t('check.ptuiback')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" ,v-model= "ptuiback", @change = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "ptuiback", @change = "hhh()")
        .concaTlamp {{ $t('check.scjxg')}}
        .wu {{ $t('check.pxinstate')}}
          span 
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" ,v-model= "pxinstate", @change = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "pxinstate", @change = "hhh()")
        .concaTlamp {{ $t('check.tuojiasuiti')}}
        .wu
          span {{ $t('check.pstate')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" ,v-model= "pstate", @change = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "pstate", @change = "hhh()")
        .concaTlamp {{ $t('check.zhijia')}}
        .wu
          span {{ $t('check.pdongstate')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" ,v-model= "pdongstate", @change = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "pdongstate", @change = "hhh()")
        .oil
          span {{ $t('check.connectstate')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" v-model= "connectstate",@click = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "connectstate",@click = "hhh()")
        .oil
          span {{ $t('check.Powersupply')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" v-model= "Powersupply",@click = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "Powersupply",@click = "hhh()")
        .oil
          span {{ $t('check.Powersupplystate')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" v-model= "Powersupplystate",@click = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "Powersupplystate",@click = "hhh()")
        .oil
          span {{ $t('check.plouqi')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" v-model= "plouqi",@click = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "plouqi",@click = "hhh()")
        .oil
          span {{ $t('check.lianjie')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" v-model= "lianjie",@click = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "lianjie",@click = "hhh()")
        .oil
          span {{ $t('check.lianjiezhu')}}
          .radiobox
            label(class="newradio")
              span(class="b-radio") {{ $t('check.yes')}}
              input(type="radio", class="a-radio", :checked= "1", :value="0" v-model= "lianjiezhu",@click = "hhh()")
            label(class="newradio")
              span(class="b-radio") {{ $t('check.no')}}
              input(type="radio", class="a-radio", :value="1", v-model= "lianjiezhu",@click = "hhh()")
        .other
          p {{ $t('check.pallettex')}}
          textarea(cols="40", rows="6",class="newtext",v-model="pallettex")
  .footer
    span(class= "updata", @click="backhome()") {{ $t('check.upload')}}
</template>

<script type="text/javascript">
import { MessageBox } from 'mint-ui';
export default {
  data () {
    return {
      trayNum : this.$route.query.trayNum,
      licensePlate: localStorage.getItem( 'licensePlate'), // 车牌号
      textail: '', // 多行文本域
      supporthead: '', // 拖头号
      start: 0, // 启动状态
      ring: 0, // 异响
      bspeed: 0, // 底速
      accelerate: 0, // 加速
      brake: 0, // 刹车
      handbrake: 0, // 驻车刹车及手刹
      brakefluid: 0, // 刹车油液量
      rise: 0, // 气压上升状态
      pedal: 0, // 刹车踏板气压声正常
      skinraft: 0, //皮筏体
      clearance: 0, // 间隙量
      wiper: 0, // 风挡雨刷
      wiperslide: 0, // 雨刷滑动状态
      tank: 0, // 水箱液量
      fengandpi: 0, // 风扇及皮带
      faandyou: 0, // 润滑装置发动机油量状态
      partstate: 0, // 连接状态
      valvestate: 0, // 气阀接口状态
      damage: 0, // 气阀接口损伤
      towstate: 0, // 牵引状态
      towdamage: 0, // 牵引损伤

      Battery: 0, // 电池连接状态
      gastank: 0, // 气罐凝水
      lightingbad: 0, // 灯光不良
      lightingsun: 0, // 灯光损坏
      tyrepressure: 0, // 轮胎气压
      tyreunusual: 0, // 轮胎异状
      tyreabrasion: 0, // 轮胎磨损
      tyrecrazing: 0, // 轮胎龟裂
      tyrelines: 0, // 轮胎纹浅
      toheadtext: '', // 拖头多行输入
      // 托板
      pallet: '', // 托板
      ptyrepressure: 0, // 轮胎气压
      ptyreunusual: 0, // 轮胎异状
      ptyreabrasion: 0, // 轮胎磨损
      ptyrecrazing: 0, // 轮胎龟裂
      ptyrelines: 0, // 轮胎纹浅
      ptyreLeak: 0, // 漏气
      ponstate: 0, // 点灯状态
      pdamage: 0, // 灯光装置损伤
      pstoplight: 0, // 刹车灯
      pindicator: 0, // 指示灯
      preversing: 0, // 倒车灯
      preflector: 0, // 反射器
      pbrake: 0, // 刹车
      preflector: 0, // 反射器
      // pbrake: 0, // 刹车
      pCondensate: 0, // 凝水
      pjunlie: 0, // 龟裂
      psun: 0, // 损伤
      plou: 0, // 漏气
      ptuiback: 0, // 推回状态及行程
      pxinstate: 0, // 行程状态
      pstate: 0, // 状态
      pdongstate: 0, // 动作状态
      connectstate: 0, // 连接状态
      Powersupply: 0, // 电源连接端
      Powersupplystate: 0, // 连接锁状态
      plouqi: 0, // 漏气
      lianjie: 0, // 连接盘状态
      lianjiezhu: 0, // 连接柱状态
      pallettex: '', // 托板的文本
     }
  },
  methods: {
    hhh() {

    },
    backhome(){
      localStorage.removeItem("Marking2",);
      localStorage.removeItem("Marking3",);
      localStorage.removeItem("Marking4",);
      localStorage.removeItem("Marking5",);
      localStorage.removeItem("Marking6",);
      localStorage.removeItem("Marking7",);
    let data = {
        trayCode : this.$route.query.trayCode,
        driverCode: localStorage.getItem( 'code'),
        vehicleCode: localStorage.getItem('vehicleCode'),
        engineStart: this.start,
        engineSound: this.ring,
        engineLowSpeed: this.bspeed,
        engineSpeedUp: this.accelerate,
        brakePedal: this.brake,
        brakeHand: this.handbrake,
        brakeFluid: this.brakefluid,
        airManometer: this.rise,
        brakePedalPressure: this.pedal,
        brakeRaft: this.skinraft,
        brakePads: this.wiper,
        windshieldWiper: this.wiperslide,
        wiperSliding: this.tank,
        waterTank: this.fengandpi,
        lubricationDevice: this.faandyou,
        powerConnectionPort: this.partstate, // 电源连接端口状态
        valveInterface: this.valvestate,
        valveInterfaceDamage: this.damage,
        tractionConnection: this.towstate,
        tractionConnectionDamage: this.damage,
        battery: this.Battery,
        airTank: this.gastank,
        light: this.lightingbad,
        lightDamage: this.lightingsun,
        tirePressure: this.tyrepressure,
        tireDeformation: this.tyreunusual,
        tireWear: this.tyreabrasion,
        tireCracked: this.tyrecrazing,
        tireGrain: this.tyrelines,
        // 
        trayTirePressure: this.ptyrepressure,
        trayTireWear: this.ptyreabrasion,
        trayTireCracked: this.ptyrecrazing,
        trayTireLeakage: this.ptyreLeak,
        trayTireGrain: this.ptyrelines,
        trayTireConnection: this.ptyreunusual,
        trayLight: this.ponstate,
        trayLightDamage: this.pdamage,
        trayBrakeLight: this.pstoplight,
        trayDirectionLight:this.pindicator,
        trayBackLight: this.preversing,
        trayReflector: this.preflector,
        trayBrake: this.pbrake,
        trayAirTank: this.pCondensate,
        trayPipeCracked: this.pjunlie,
        trayPipeDamage: this.psun,
        trayPipeLeakage: this.plou,
        trayBrakeRaftStroke: this.ptuiback,
        trayBrakePadsStroke: this.pxinstate,
        trayLock: this.pstate,
        trayStents: this.pdongstate,
        trayConnection: this.connectstate,
        trayPowerConnection: this.Powersupply,
        trayConnectionLock: this.Powersupplystate,
        trayAirLeakage: this.plouqi,
        trayConnectionRock: this.lianjie,
        trayConnectionColumn: this.lianjiezhu,
        otherProblems: this.toheadtext, // 其他问题
        trayOtherProblems: this.pallettex, // 托板其他问题
      }
      this.$http.post( this.baseUrl + 'app/vehicle/tray/check/addVehicleAndTrayDailyCheck', data).then( (res) => {
        if( res.data.data !== null){
          let startAddress = res.data.data.startAddress;
          let endAddress  = res.data.data.endAddress;
          let datatype = res.data.data.type;
          let orderCode = res.data.data.orderCode;
          localStorage.setItem('startAddress', startAddress);
          localStorage.setItem('endAddress', endAddress);
          localStorage.setItem('datatype', datatype);
          localStorage.setItem('orderCode', orderCode);
          localStorage.setItem('showstate', 1);
          this.$router.push({path: '/home',name: 'Home'});
        } else  if( res.data.data == null){
          MessageBox('提示', '暂时无新任务请稍后下单');
        }
      })
    }
  },
  mounted() {
    let thit = this;
    this.hhh();
    mui.back = function() { // 监听返回按钮返回页面
      thit.$router.push({path: '/calling'})
    }
  },
  created() {
    
  }
}
</script>

<style lang="scss" scoped>
.footer{
  width: 100%;
  height: 1.3333rem;
  display: flex;
  margin-top: 0.26666rem;
  .sure{
    background: #eeeeee;
    color: #999999;
    text-align: center;
  }
  .updata{
    width: 100%;
    background: #40c6fd;
    color: #fff;
    text-align: center;
    line-height: 1.3333rem;
    font-size: 0.37rem;
  }
}
.hui{
  width: 100%;
  height: 0.4rem;
  background: #eeeeee;
  margin-top: 0.2666rem;
}
.backImg{
  width: 0.24rem;
  height: 0.53rem;
}
.header{
  width: 100%;
  height: 1.7rem;
  background: rgb(65, 198, 254);
  display: flex;
  justify-content: space-between;
  align-items: center;
  span{
    color: rgb(255, 255, 255);
    font-size: 0.39rem;
    font-weight: 600;
  }
  .sleft{
    margin-left: 0.4rem;
  }
  .sright{
    margin-right: 0.4rem;
  }
}
.section{
  width: 100%;
  height: auto;
  .towinghead, .towingPlate{
    width: 100%;
    .License{
      width: 100%;
      height: 2rem;
      margin-top: 0.2rem;
      span{
        font-size: 0.37rem;
        color: #333333;
        margin-left: 0.63rem;
      }
    }
    .headTitle{
      width: 100%;
      height: 2rem;
      display: flex;
      align-items: center;
      border-bottom: solid 0.026rem #ccc;
      span{
        font-size: 0.37rem;
        color: #333333;
        margin-left: 0.63rem;
      }
      input{
        width: 4.26rem;
        margin-left: 1.09rem;
        border: solid 0.026rem #ccc;
        border-radius: 0.13rem;
        text-align: center;
        font-size: 0.32rem;
        outline: none;
        height: 0.66rem;
      }
    }
    .headConcat{
      width: 100%;
      .concaTlamp{
        margin-left: 0.63rem;
        font-size: 0.37rem;
        color: #333;
        margin-top: 0.5333rem;
        text-align: left;
      }
      .wu{
        margin-top: 0.8rem;
        display: flex;
        font-size: 0.37rem;
        margin-left: 1.5rem;
        align-items: center;
        span{
          color: #999999;
        }
        .radiobox{
          display: flex;
          position: absolute;
          right: 0.53rem;
          label{
            display: flex;
            align-items: center;
            margin-left: 0.2rem;
            .a-radio{
              width: 0.5333rem;
              height: 0.533rem;
              margin-left: 0.2rem;
              appearance: none;
              position: relative;
              outline: none;
            }
            .a-radio:before{
              content: '';
              width: 0.5333rem;
              height: 0.5333rem;
              border: 1px solid #666666;
              display: inline-block;
              border-radius: 50%;
              vertical-align: middle;
            }
            .a-radio:checked:before{
              content: '';
              width: 0.5333rem;
              height: 0.5333rem;
              border: 1px solid #666666;
              display: inline-block;
              border-radius: 50%;
              vertical-align: middle;
            }
            .a-radio:checked:after{
              content: '';
              width: 0.32rem;
              height: 0.32rem;
              text-align: center;
              background:#41c6fe;
              border-radius: 50%;
              display: block;
              position: absolute;
              top: 0.13rem;
              left: 0.13rem;
            }
            .a-radio:checked+label{
              color: #41c6fe;
            }
            span{
              color: #333333;
            }
          }
        }
      }
      .oil{
        margin-top: 0.8rem;
        display: flex;
        font-size: 0.37rem;
        margin-left: 0.69rem;
        align-items: center;
        span{
          color: #333333;
        }
        .radiobox{
          display: flex;
          position: absolute;
          right: 0.53rem;
          label{
            display: flex;
            align-items: center;
            margin-left: 0.2rem;
            .a-radio{
              width: 0.5333rem;
              height: 0.533rem;
              margin-left: 0.2rem;
              appearance: none;
              position: relative;
              outline: none;
            }
            .a-radio:before{
              content: '';
              width: 0.5333rem;
              height: 0.5333rem;
              border: 1px solid #666666;
              display: inline-block;
              border-radius: 50%;
              vertical-align: middle;
            }
            .a-radio:checked:before{
              content: '';
              width: 0.5333rem;
              height: 0.5333rem;
              border: 1px solid #666666;
              display: inline-block;
              border-radius: 50%;
              vertical-align: middle;
            }
            .a-radio:checked:after{
              content: '';
              width: 0.32rem;
              height: 0.32rem;
              text-align: center;
              background:#41c6fe;
              border-radius: 50%;
              display: block;
              position: absolute;
              top: 0.13rem;
              left: 0.13rem;
            }
            .a-radio:checked+label{
              color: #41c6fe;
            }
            span{
              color: #333333;
            }
          }
        }
      }
      .other{
        margin-top: 0.8rem;
        display: flex;
        flex-direction: column;
        font-size: 0.37rem;
        margin-left: 0.69rem;
        p{
          text-align: left;
        }
        textarea{
          margin-top: 0.26666rem;
          border-radius: 5px;
          border: solid 1px #999999;
          outline: none;
          margin-right: 0.53rem;
        }
      }
    }
  }
}
</style>
