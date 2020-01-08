import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home' //主页
import Calling from '@/pages/home/components/calling' // 点呼
import Check from '@/pages/home/components/check' // 车辆点检
import FuelRecorde from '@/pages/home/components/fuelrecord' // 加油记录
import MaintainRecord from '@/pages/home/components/maintainRecord' // 保养记录
import ChargeRecord from '@/pages/home/components/chargeRecord' // 收费记录
import ParkingRecord from '@/pages/home/components/parkingRecord' // 停车
import ViolationRecord from '@/pages/home/components/violationRecord' // 违章上报
import AccidentRecord from '@/pages/home/components/accidentRecord' // 事故上报
import MessageRecord from '@/pages/home/components/messageRecord' // 信息上报
import CostReporting from '@/pages/home/components/costReporting' // 费用上报

import ReceiptRecord from '@/pages/home/components/receiptRecord' // 接单记录
import Customer from '@/pages/home/components/customer' // 客服
import Login from '@/pages/home/login' // 登录

import CarriageIform from '@/pages/home/components/carriageIform' // 查看详情 运输信息
import Seedatails from '@/pages/home/components/seedatails' // 接单记录里面的查看详情

import Register from '@/pages/home/register' // 注册
import RegistPersonal from '@/pages/home/components/registPersonal' // 个人注册
import RegistCompany from '@/pages/home/components/registCompany' // 公司注册
import ForgetPassword from '@/pages/home/components/forgetpassword' // 忘记密码

import instructionBook from '@/pages/home/components/instructionBook' // 软件说明
import SET from '@/pages/home/components/set' // 软件说明

import XX from '@/pages/home/components/xx' //测试测试

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      children: [],
    },
    {
      path: '/xx',
      name: 'xx',
      component: XX, // 测试测试
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    }, // 注册
    {
      path: '/forgetpassword',
      name: 'ForgetPassword',
      component: ForgetPassword,
    }, // 忘记密码
    {
      path: '/personal', // 个人注册
      name: 'RegistPersonal',
      component: RegistPersonal,
    },
    {
      path: '/company', // 公司注册
      name: 'RegistCompany',
      component: RegistCompany,
    },
    {
      path: '/Home',  // 登录
      name: 'Home',
      component: Home,
    },
    {
      path: '/calling', // 点呼
      name: 'Calling',
      component: Calling,
    },
    {
      path: '/fuel', // 加油记录
      name: 'FuelRecorde',
      component: FuelRecorde,
    },
    {
      path: '/maintain', // 保养记录
      name: 'MaintainRecord',
      component: MaintainRecord,
    },
    {
      path: '/charge', // 高速收费
      name: 'ChargeRecord',
      component: ChargeRecord,
    },
    {
      path: '/parking', // 停车
      name: 'ParkingRecord',
      component: ParkingRecord,
    },
    {
      path: '/violation', // 违章上报
      name: 'ViolationRecord',
      component: ViolationRecord,
    },
    {
      path: '/accident', // 事故上报
      name: 'AccidentRecord',
      component: AccidentRecord,
    },
    {
      path: '/message', // 信息上报
      name: 'MessageRecord',
      component: MessageRecord,
    },
    {
      path: '/check', // 车辆点检
      name: 'Check',
      component: Check,
    },
    {
      path: '/receipt',  // 接单记录
      name: 'ReceiptRecord',
      component: ReceiptRecord,
    },
    {
      path: '/customer',  // 客服
      name: 'Customer',
      component: Customer,
    },
    {
      path: '/carriage',  // 查看详情 运输信息
      name: 'CarriageIform',
      component: CarriageIform,
    },
    {
      path: '/seedatails',  // 接单记录里面的查看查看详情
      name: 'Seedatails',
      component: Seedatails,
    },
    {
      path: '/costreporting',  // 费用上报
      name: 'CostReporting',
      component: CostReporting,
    },
    {
      path: '/instructionbook',  // 软件说明
      name: 'instructionBook',
      component: instructionBook,
    },
     {
      path: '/set',  // 软件说明
      name: 'SET',
      component: SET,
    }
  ]
})
