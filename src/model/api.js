import appConfigs from 'src/configs'
import vueRequest from './vueRequest'

/**
 * 获取wifi列表
 */
export const get_wifi_list = (params) => vueRequest(appConfigs.urlWebHttp + '/wifi_scan_result.json', params, 'GET');

/**
 * wifi提交
 */
export const get_wifi_save = (params) => vueRequest(appConfigs.urlWebHttp + '/cgi/sett/?', params, 'GET');
