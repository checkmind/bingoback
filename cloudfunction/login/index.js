// 云函数入口文件
const cloud = require('wx-server-sdk')

// 与小程序端一致，均需调用 init 方法初始化
cloud.init()
// 可在入口函数外缓存 db 对象
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const docId = `${event.userInfo.openId}-score`
  try {
    const querResult = await db.collection('score').doc(docId).get()
    return querResult.data
  } catch(e) {
    const data = {
      // 这里指定了 _id，如果不指定，数据库会默认生成一个
      _id: docId,
      // 这里指定了 _openid，因在云函数端创建的记录不会默认插入用户 openid，如果是在小程序端创建的记录，会默认插入 _openid 字段
      _openid: event.userInfo.openId,
      maxTax: 0,
      helps: [1, 0, 0, 0, 0],
      coin: 0
    }
    await db.collection('score').add({
      // data 字段表示需新增的 JSON 数据
      data: data
    })
    return data
  }
}