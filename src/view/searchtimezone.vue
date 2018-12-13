<template>
  <div class="searchtimezone">
        <mt-search
        :autofocus="autofocus"
        v-model="value"
        :show="ishow"
        :cancel-text="homelanguageset.cancelText"
        :placeholder="homelanguageset.searchText">
            <div  @click="gotohome(item)" style="text-align:left" v-for="(item,index) in querylist(result)" :key="index">
                <mt-cell v-if="enhasch=='cn'" :title="item.TimeZoneC"></mt-cell>
                <mt-cell v-else-if="enhasch=='en'" :title="item.TimeZoneE"></mt-cell>
            </div>
        </mt-search>
  </div>
</template>

<script>
import util from 'src/util/util.js'
import Languageset from 'static/js/Languageset.js'
import timezonedata from 'static/js/timezonedata.js'

export default {
    name: 'searchtimezone',
    props: [],
    data() {
        return {
            homelanguageset:Languageset.Chineseset,//中文
            ishow:true,
            autofocus:true,
            enhasch:'cn',
            value:"",
            result:timezonedata
        }
    },
    created() {

    },
    activated(){
        let languagename = this.$route.query.language;
        let country = this.$route.query.country;
        if(languagename=="英文"||languagename=="English"){
            this.enhasch = 'en';
            this.homelanguageset = Languageset.Englishset;
        }else{
            this.enhasch = 'cn';
            this.homelanguageset = Languageset.Chineseset;
        }
    },
    methods: {
        querylist(list){
            let objstr = "";
            if(this.value!=''){
                this.value = this.value.trim();
            }
            if(this.enhasch == 'cn'){
                objstr = "TimeZoneC";
            }else{
                objstr = "TimeZoneE";
            }
            return list.filter((item)=>{
                if(item[objstr].indexOf(this.value) != -1){
                    return item;
                }
            });
        },
        gotohome(item){
            this.value = "";
            this.$router.push({name:"home",params:{inteladdress:item}});
        }
    },
    mounted() {


    }
}

</script>

<style lang="scss" scoped>
.searchtimezone {
    .mint-popup-bottom {
        width: 100%;
    }
    background-color:$gray3;
}
</style>
