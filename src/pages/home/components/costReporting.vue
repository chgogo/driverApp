<template lang="jade">
.main
  .header
    router-link(to="/home",tag="span",class="sleft")
      img(src="@/assets/homeImg/fanhuijiantou@2x.png",class="backImg")
    span {{ $t('costre.name')}}
    span(class="sright", @click= "backhome()") {{ $t('costre.suer')}}
  .section
    mt-navbar( v-model= 'selected')
      mt-tab-item( :id = 'index', v-for="(item,index) in newdata", :key="index") {{ item.fieldName}}
    mt-tab-container( v-model= "selected")
      mt-tab-container-item( :id='0',class='concat')
        div()
          span(class="itemspan") {{ $t('costre.lcost')}}
          input(type="number",v-model='landCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.chengcost')}}
          input(type="number",v-model='weighCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.chengyuncost')}}
          input(type="number",v-model='weighFreightCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.daijicost')}}
          input(type="number",v-model='standbyCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.goashucost')}}
          input(type="number",v-model='highSpeedCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.xuixicost')}}
          input(type="number",v-model='workOvertimeCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.jiancha')}}
          input(type="number",v-model='checkFreightCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.zuijia')}}
          input(type="number",v-model='addItionalFreightCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.tuojia')}}
          input(type="number",v-model='bracketUsedCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.qita')}}
          input(type="number",v-model='otherInsuranceCost',oninput="if(value>999)value=999;if(value<0)value=0")
      mt-tab-container-item( :id='1',class='concat')
        div()
          span(class="itemspan") {{ $t('costre.chushengao')}}
          input(type="number",v-model='customsDeclarationCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.chushouxu')}}
          input(type="number",v-model='customsFormalityCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.rushengao')}}
          input(type="number",v-model='inCustomsDeclarationCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.rushouxu')}}
          input(type="number",v-model='inCustomsFormalityCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.linshi')}}
          input(type="number",v-model='temporarySessionCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.zaishenbao')}}
          input(type="number",v-model='redeclarationCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.jiancha')}}
          input(type="number",v-model='checkFactoryCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.jianchashouxu')}}
          input(type="number",v-model='checkCommissionCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.huowudian')}}
          input(type="number",v-model='goodsTallyCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.tonggaunzuijia')}}
          input(type="number",v-model='customsAdditionalCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.fangshe')}}
          input(type="number",v-model='radioactionCheckCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.CFS')}}
          input(type="number",v-model='cfsCheckCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.fenxi')}}
          input(type="number",v-model='analysisCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.teshushengao')}}
          input(type="number",v-model='specialDeclarationCost',oninput="if(value>999)value=999;if(value<0)value=0")
      mt-tab-container-item( :id='2',class='concat')
        div()
          span(class="itemspan") {{ $t('costre.haiyunCost')}}
          input(type="number",v-model='oceanFreightCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.THSconst')}}
          input(type="number",v-model='thsCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.BLconst')}}
          input(type="number",v-model='blCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.DOCconst')}}
          input(type="number",v-model='docCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.SEALconst')}}
          input(type="number",v-model='sealCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.TELESconst')}}
          input(type="number",v-model='telexCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.AFSconst')}}
          input(type="number",v-model='afsCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.BLconsttow')}}
          input(type="number",v-model='blCorrectionCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.baoxianconst')}}
          input(type="number",v-model='marineInsuranceCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.baoshouxufei')}}
          input(type="number",v-model='marineInsuranceCommission',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.haiyunqita')}}
          input(type="number",v-model='marineOtherInsuranceCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.shuruxiaofei')}}
          input(type="number",v-model='inConsumptionTaxCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.shuruguanshui')}}
          input(type="number",v-model='inTariffsCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.daohui')}}
          input(type="number",v-model='arrivalNoticeCost',oninput="if(value>999)value=999;if(value<0)value=0")
      mt-tab-container-item( :id='3',class='concat')
        div()
          span(class="itemspan") {{ $t('costre.matouconst')}}
          input(type="number",v-model='terminalCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.boxclearconst')}}
          input(type="number",v-model='containerCleanCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.baoguan')}}
          input(type="number",v-model='safekeepCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.overtimeconst')}}
          input(type="number",v-model='terminalExpectedCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.huna')}}
          input(type="number",v-model='returnExpectedCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.CFS')}}
          input(type="number",v-model='cfsCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.wharfconst')}}
          input(type="number",v-model='terminalAdditionalCost',oninput="if(value>999)value=999;if(value<0)value=0")
      mt-tab-container-item( :id='4',class='concat')
        div()
          span(class="itemspan") {{ $t('costre.carcost')}}
          input(type="number",v-model='vehicleLoadUnCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.takecost')}}
          input(type="number",v-model='otherSafekeepCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.Insurancecost')}}
          input(type="number",v-model='insuranceCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.cahding')}}
          input(type="number",v-model='checkCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.gantry')}}
          input(type="number",v-model='breakDownCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.phwork')}}
          input(type="number",v-model='photoWorkCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.carnum')}}
          input(type="number",v-model='carBodyCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.enginenum')}}
          input(type="number",v-model='engineNumCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.qitawork')}}
          input(type="number",v-model='otherWorkCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.olduser')}}
          input(type="number",v-model='flatCost',oninput="if(value>999)value=999;if(value<0)value=0")
        div()
          span(class="itemspan") {{ $t('costre.tatal')}}
          input(type="number",v-model='totalCost',oninput="if(value>999)value=999;if(value<0)value=0")
</template>

<script type="text/javascript">
import { MessageBox } from 'mint-ui';
export default {
  data () {
    return {
      selected: 0,
      newdata: [{
        fieldName: this.$t('costre.luyun'),
      },{
        fieldName: this.$t('costre.haiyun'),
      },{ 
        fieldName: this.$t('costre.tongguan'),
      },{
        fieldName: this.$t('costre.matou'),
      },{
        fieldName: this.$t('costre.qita'),
      },],
      landCost:　'',
      weighCost: '',
      weighFreightCost: '',
      standbyCost: '',
      highSpeedCost: '',
      workOvertimeCost: '',
      checkFreightCost: '',
      addItionalFreightCost: '',
      bracketUsedCost: '',
      otherInsuranceCost: '',
      customsDeclarationCost: '',
      customsFormalityCost: '',
      inCustomsDeclarationCost: '',
      inCustomsFormalityCost: '',
      temporarySessionCost: '',
      redeclarationCost: '',
      checkFactoryCost: '',
      checkCommissionCost: '',
      goodsTallyCost: '',
      customsAdditionalCost: '',
      radioactionCheckCost: '',
      cfsCheckCost: '',
      analysisCost: '',
      specialDeclarationCost: '',
      oceanFreightCost: '',
      thsCost: '',
      blCost: '',
      docCost: '',
      sealCost: '',
      telexCost: '',
      afsCost: '',
      blCorrectionCost: '',
      marineInsuranceCost: '',
      marineInsuranceCommission: '',
      marineOtherInsuranceCost: '',
      inConsumptionTaxCost: '',
      inTariffsCost: '',
      arrivalNoticeCost: '',
      terminalCost: '',
      containerCleanCost: '',
      safekeepCost: '',
      terminalExpectedCost: '',
      returnExpectedCost: '',
      cfsCost: '',
      terminalAdditionalCost: '',
      vehicleLoadUnCost: '',
      otherSafekeepCost: '',
      insuranceCost: '',
      checkCost: '',
      breakDownCost: '',
      specificGrantCheckCost: '',
      photoWorkCost: '',
      carBodyCost: '',
      engineNumCost: '',
      otherWorkCost: '',
      containerWorkCost: '',
      otherAdditionalCost: '',
      flatCost: '',
      totalCost: '',
    }
  },
  methods: {
    loadData() {
      this.$http.get(this.baseUrl + 'base/data/acquireBaseCostDataList').then((res) => {
        // this.newdata = res.data.data;
      })
    },
    backhome() {
      let data = {
        orderCode: localStorage.getItem('orderCode'),
        landCost: this.landCost,
        weighCost: this.weighCost,
        weighFreightCost: this.weighFreightCost,
        standbyCost: this.standbyCost,
        highSpeedCost: this.highSpeedCost,
        workOvertimeCost: this.workOvertimeCost,
        checkFreightCost: this.checkFreightCost,
        addItionalFreightCost: this.addItionalFreightCost,
        bracketUsedCost: this.bracketUsedCost,
        otherInsuranceCost: this.otherInsuranceCost,
        customsDeclarationCost: this.customsDeclarationCost,
        customsFormalityCost: this.customsFormalityCost,
        inCustomsDeclarationCost: this.inCustomsDeclarationCost,
        inCustomsFormalityCost: this.inCustomsFormalityCost,
        temporarySessionCost: this.temporarySessionCost,
        redeclarationCost: this.redeclarationCost,
        checkFactoryCost: this.checkFactoryCost,
        checkCommissionCost: this.checkCommissionCost,
        goodsTallyCost: this.goodsTallyCost,
        customsAdditionalCost: this.customsAdditionalCost,
        radioactionCheckCost: this.radioactionCheckCost,
        cfsCheckCost: this.cfsCheckCost,
        analysisCost: this.analysisCost,
        specialDeclarationCost: this.specialDeclarationCost,
        oceanFreightCost: this.oceanFreightCost,
        thsCost: this.thsCost,
        blCost: this.blCost,
        docCost: this.docCost,
        sealCost: this.sealCost,
        telexCost: this.telexCost,
        afsCost: this.afsCost,
        blCorrectionCost: this.blCorrectionCost,
        marineInsuranceCost: this.marineInsuranceCost,
        marineInsuranceCommission: this.marineInsuranceCommission,
        marineOtherInsuranceCost: this.marineOtherInsuranceCost,
        inConsumptionTaxCost: this.inConsumptionTaxCost,
        inTariffsCost: this.inTariffsCost,
        arrivalNoticeCost: this.arrivalNoticeCost,
        terminalCost: this.terminalCost,
        containerCleanCost: this.containerCleanCost,
        safekeepCost: this.safekeepCost,
        terminalExpectedCost: this.terminalExpectedCost,
        returnExpectedCost: this.returnExpectedCost,
        cfsCost: this.cfsCost,
        terminalAdditionalCost: this.terminalAdditionalCost,
        vehicleLoadUnCost: this.vehicleLoadUnCost,
        otherSafekeepCost: this.otherSafekeepCost,
        insuranceCost: this.insuranceCost,
        checkCost: this.checkCost,
        breakDownCost: this.breakDownCost,
        specificGrantCheckCost: this.specificGrantCheckCost,
        photoWorkCost: this.photoWorkCost,
        carBodyCost: this.carBodyCost,
        engineNumCost: this.engineNumCost,
        otherWorkCost: this.otherWorkCost,
        containerWorkCost: this.containerWorkCost,
        otherAdditionalCost: this.otherAdditionalCost,
        flatCost: this.flatCost,
        totalCost: this.totalCost,
      }
      this.$http.post(this.baseUrl + 'app/order/updateOrderCostData', data).then((res) => {
        if( res.data.rlt == true) {
          MessageBox('提示','提交成功')
          this.newdata = res.data.data;
          this.loadData();
          console.log(this.newdata)
        }
      })
    }
  },
  mounted() {
    let thit = this;
    mui.back = function() { // 监听返回按钮返回到登录页面
      thit.$router.push({path: '/home'})
    }
  },
  created() {
    this.loadData();
  }
}
</script>

<style lang="scss" scoped>

.mint-navbar .mint-tab-item {
  display: flex;
  justify-content: center;
  align-items: center;
}
.concat{
  margin-top: 0.36rem;
  display: flex;
  flex-wrap: wrap;
  div{
    display: flex;
    align-items: center;
    width: 100%;
    margin-left: 0.26rem;
    margin-top: 0.26rem;
    span{
      width: 35%;
      font-size: 0.36rem;
      color: #999;
    }
    input{
      width: 55%;
      outline: none;
      border: solid 1px #ccc;
      border-radius: 5px;
      margin-left: 0.2rem;
      color: #999;
      font-size: 0.32rem;
      padding-left: 0.1rem;
    }
  }
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
</style>