import config from './config'
import request from './request'
import { ARTICLE } from '../config/enum';

export function write(param) {
  let url = config.baseUrl + '/block'

  return request({
    url,
    type: 'post',
    data: Object.assign(param, {type: ARTICLE})
  })
}

export function findOneById(id) {
  let url = config.baseUrl + `/block?id=${id}`
  return request({ url })
}