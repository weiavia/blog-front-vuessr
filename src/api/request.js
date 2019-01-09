import axios from 'axios'

const HAS_ERROR = 1000

export default (param) => {
  return new Promise((resolve, reject) => {
    axios({
      method: param.type || 'get',
      url: param.url,
      data: Object.assign(param.data || {}, {}),
      // withCredentials: true
    }).then((res) => {
      res = res.data
      if(res.errorNo > HAS_ERROR) {
        vm.$message.error(`Api: ${res.errorMsg}`);
        reject()
        return
      }
      resolve(res.data)
    }).catch(() => {
      reject()
    })
  })
}