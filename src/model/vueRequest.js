import Vue from 'vue';
import appConfigs from 'src/configs'
import util from 'src/util/util.js'

export default async(apiurl = '', params = {}, type = 'GET', method = '') => {
	type = type.toUpperCase();
	if(method == 'ajax'){
		return new Promise((resolve, reject) => {
			$.ajax({
		        url:apiurl,
		        dataType:'jsonp',
		        data:params,
		        jsonp:'callback',
		        success:function(res) {
		            resolve(res);
		        },
		        error: function(res){
	            	reject(res);
	            },
		        timeout:appConfigs.timeout
		    });
	    });
	}else{
		return new Promise((resolve, reject) => {
			Vue.http({
				method : type,
				url : apiurl ,
				timeout:appConfigs.timeout,
				headers : {
					'Content-Type':'application/json;charset=utf-8',
				},
				body : type == 'POST' ? params: '',
				params: type == 'GET' ? params: ''
			}).then(res => {
				if(res.ok){
                    resolve(res.body);
                }else{
                    reject(res);
                }
			}).catch(err => {
				reject(err)
			})
		});
	}
}
