// 云函数入口文件
const cloud = require('wx-server-sdk')

// 与小程序端一致，均需调用 init 方法初始化
cloud.init()

// 可在入口函数外缓存 db 对象
const db = cloud.database()

// 数据库查询更新指令对象
const _ = db.command
// 云函数入口函数
exports.main = async (event, context) => {
  const { tax } = event
  // 以 openid-score 作为记录 id
  const docId = `${event.userInfo.openId}-score`
  // 更新用户分数
  const updateResult = await db.collection('score').doc(docId).update({
    data: {
      maxTax: +tax
    }
  })
  console.log(updateResult)
  if(updateResult.stats.updated === 1) {
    return {
      success: true,
      updated: true
    }
  } else {
    return {
      success: false,
      msg: '保存失败'
    }
  }
  
}
