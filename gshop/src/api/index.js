// 引入ajax
import ajax from './ajax.js'
const BASE='/api'
// 根据经纬度获取位置详情的ajax请求
export const reqAddress = (longitude, latitude,) => ajax(BASE + `/position/${latitude},${longitude}`)
// 获取食品分类的请求
export const reqCategory = () => ajax(BASE + `/index_category`)
//根据位置获取商铺的请求
export const reqShops = (longitude, latitude) => ajax(BASE + `/shops`, {
  
  longitude,
  latitude,
})
