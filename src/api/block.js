import config from './config'
import request from './request'

export function write(param) {

  let url = config.baseUrl + '/block'
  return request({
    url,
    type: 'post',
    data: Object.assign(param, {type: 1})
  })
}