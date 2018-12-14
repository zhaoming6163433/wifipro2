<template>
  <div class="home">
    <div class="logo"><img src="../../static/img/logo.svg"/></div>
    <div class="title">{{homelanguageset.title}}</div>
    <div @click="sheetVisible=true" class="seldiv">
        <div class="lineback"></div>
        <mt-cell  :title="homelanguageset.selanguage"  is-link><div class="selleft">{{languagetext}}</div></mt-cell>
    </div>
    <div class="seldiv">
        <div class="lineback"></div>
        <div class="intelname"><mt-field class="inputclass" :label="homelanguageset.networkname" :placeholder="homelanguageset.networknamep" :attr="{ maxlength: 100 }" v-model="info.intelname" ></mt-field></div>
        <div class="selcity" @click="wifilistfn"><div class="mint-cell-allow-right"></div></div>
    </div>
    <div class="seldiv">
        <div class="lineback"></div>
        <div class="intelname"><mt-field class="inputclass" :label="homelanguageset.networkpass" :placeholder="homelanguageset.networkpassp" :attr="{ maxlength: 40 }"  v-model="info.intelpass" ></mt-field></div>
    </div>
    <div @click="seltimearea" class="seldiv">
        <div class="lineback"></div>
        <mt-cell  :title="homelanguageset.timeareatext"  is-link><div class="selleft">{{timeareatext}}</div></mt-cell>
    </div>
    <div class="seldiv" v-show="showxialing">
        <div class="dst">{{homelanguageset.dst}}</div><mt-switch v-model="info.dst"></mt-switch>
        <div  class="dst2"><div class="dstval"><span class="qujian1">{{homelanguageset.start}}</span><div class="em" @click="showpicker1">{{info.xialing1}}</div><span class="spa">-</span><div class="em" @click="showpicker2">{{info.xialing2}}</div><span class="qujian2">{{homelanguageset.end}}</span></div></div>
    </div>
    <div class="seldiv" @click="sheshiduVisible=true">
        <div class="lineback"></div>
        <div class="dst">{{homelanguageset.temp}}</div><div class="zindex1 selleft">{{info.sheshidutext}}</div>
        <div class="mint-cell-allow-right"></div>
    </div>
    <mt-button type="primary" class="saveinfo" @click="saveInfo">{{homelanguageset.save}}</mt-button>
    <div class="useaboutout"><div class="useabout" @click="goabout">{{homelanguageset.manual}}</div></div>
    <!-- 选择语言 -->
    <mt-actionsheet
        :actions="language"
        cancelText=""
        v-model="sheetVisible">
    </mt-actionsheet>
    <!-- 选择摄氏度 -->
    <mt-actionsheet
        cancelText=""
        :actions="sheshidulist"
        v-model="sheshiduVisible">
    </mt-actionsheet>
    <!--选择日期-->
    <datepicker  ref="datepicker1" @parentfn1="parentfn1"></datepicker>
    <datepicker  ref="datepicker2" @parentfn2="parentfn2"></datepicker>
    <!--wifi列表-->
    <wifilist ref="wifilist" @showifinfo="showifinfo"></wifilist>
  </div>
</template>

<script>
import util from 'src/util/util.js'
import datepicker from 'src/components/datepicker'
import wifilist from 'src/components/wifilist'
import Languageset from 'static/js/Languageset.js'
import { get_wifi_save } from 'src/model/api.js'

export default {
    name: 'home',
    props: [],
    data() {
        return {
            homelanguageset:Languageset.Chineseset,//中文
            timeareatext:"",//时区
            showxialing:true,//是否展示夏令时
            americaxia:{start:"03-11",end:"11-04"},//美国夏时令
            inteladdress:{},//返还的时区
            info: {
                intelname: "",
                intelpass: "",
                Timezone:"",
                Sp:"",
                dst:false,
                xialing1:new Date().Format("MM-dd"),
                xialing2:new Date().Format("MM-dd"),
                sheshidutext: "℃"
            },
            sheshiduVisible:false,//温度
            sheetVisible: false,//语言
            languagetext: Languageset.Chineseset.languagec,
            sheshidulist:[{
                name: "℃",
                method: this.changesheshidu
            }, {
                name: "℉",
                method: this.changesheshidu
            }],
            //语言数据默认中文
            language: [{
                name: Languageset.Chineseset.languagec,
                method: this.changelang
            }, {
                name: Languageset.Chineseset.languagea,
                method: this.changelang
            }],
            //语言数据中文
            languagec: [{
                name: Languageset.Chineseset.languagec,
                method: this.changelang
            }, {
                name: Languageset.Chineseset.languagea,
                method: this.changelang
            }],
            //语言数据英文
            languagea: [{
                name: Languageset.Englishset.languagec,
                method: this.changelang
            }, {
                name: Languageset.Englishset.languagea,
                method: this.changelang
            }]
        }
    },
    components: {
        datepicker,
        wifilist
    },
    watch:{
        "info.dst"(value){
            if(value){
                this.updatexiatime();
            }
        },
        "inteladdress"(item){
            if(item.Country=="US"){
                this.info.dst = true;
                this.info.xialing1 = this.americaxia.start;
                this.info.xialing2 = this.americaxia.end;
            }else{
                this.info.dst = false;
                this.info.xialing1 = new Date().Format("MM-dd");
                this.info.xialing2 = new Date().Format("MM-dd");
            }
        }
    },
    created() {

    },
    activated(){
        if(this.$route.params.inteladdress){
            this.inteladdress = this.$route.params.inteladdress;
            if(this.languagetext=="英文"||this.languagetext=="English"){
                this.timeareatext = this.inteladdress.TimeZoneE;
            }else{
                this.timeareatext = this.inteladdress.TimeZoneC;
            }
            this.info.Timezone = this.inteladdress.TIMEZONE;
            this.info.Sp = this.inteladdress.SP;
        }
    },
    methods: {
        async wifi_save(params) {
            //处理省城市
            let xialing1arr = this.info.xialing1.split("-");
            let xialing2arr = this.info.xialing1.split("-");
            //处理温度单位
            let sheshidu = "";
            if(this.info.sheshidutext == "℃"){
                sheshidu = "c";
            }else{
                sheshidu = "f";
            }
            let param = {
                ssid :this.info.intelname,
                password:this.info.intelpass,
                tempunit:sheshidu,
                dst:this.info.dst,
                dst_sm:xialing1arr[0],
                dst_sd:xialing1arr[1],
                dst_em:xialing2arr[0],
                dst_ed:xialing2arr[1],
                Timezone:this.info.Timezone,
                Sp:this.info.Sp
            }
            try{
                let res = await get_wifi_save(param);
                if(this.languagetext=="英文"||this.languagetext=="English"){
                    util.toastinfo(Languageset.Englishset.sucinfo);
                }else{
                    util.toastinfo(Languageset.Chineseset.sucinfo);
                }
            }catch(e){
                if(this.languagetext=="英文"||this.languagetext=="English"){
                    util.toastinfo(Languageset.Englishset.errinfo);
                }else{
                    util.toastinfo(Languageset.Chineseset.errinfo);
                }
            }
        },
        //选择时区
        seltimearea(){
            this.$router.push({name:'searchtimezone',query:{language:this.languagetext}});
        },
        //提交参数
        saveInfo(){
            let pass = this.info.intelpass.trim();
            if(this.languagetext=="英文"||this.languagetext=="English"){
                if(this.info.intelname.trim()==""){
                    util.toastinfo(Languageset.Englishset.tip1);
                    return;
                }
                if(pass==""){
                    util.toastinfo(Languageset.Englishset.tip2);
                    return;
                }
                if(pass.length<8){
                    util.toastinfo(Languageset.Englishset.tip3);
                    return;
                }
                if(this.timeareatext==""){
                    util.toastinfo(Languageset.Englishset.tip7);
                    return;
                }
                if(util.ishastesu(pass)){
                    util.toastinfo(Languageset.Englishset.tip4);
                    return;
                }
            }else{
                if(this.info.intelname.trim()==""){
                    util.toastinfo(Languageset.Chineseset.tip1);
                    return;
                }
                if(pass==""){
                    util.toastinfo(Languageset.Chineseset.tip2);
                    return;
                }
                if(this.timeareatext==""){
                    util.toastinfo(Languageset.Chineseset.tip7);
                    return;
                }
                if(pass.length<8){
                    util.toastinfo(Languageset.Chineseset.tip3);
                    return;
                }
                if(util.ishastesu(pass)){
                    util.toastinfo(Languageset.Chineseset.tip4);
                    return;
                }
            }
            this.wifi_save(this.info);
        },
        //wifi列表
        wifilistfn(){
            this.$refs["wifilist"].showlist(this.languagetext);
        },
        //选择wifi列表
        showifinfo(item){
            this.info.intelname = item.ssid;
        },
        //修改温度单位
        updatetem(){

        },
        //修改夏时令时间根据地区
        updatexiatime(){
            if(this.inteladdress.country == "US"){
                this.info.xialing1 = this.americaxia.start;
                this.info.xialing2 = this.americaxia.end;
                this.$refs["datepicker1"].assgindate(this.americaxia.start);
                this.$refs["datepicker2"].assgindate(this.americaxia.end);
            }
        },
        //修改语言
        changelang(val) {
            if(val.name=="英文"||val.name=="English"){
                this.languagetext = "English";
                this.homelanguageset = Languageset.Englishset;
                //切换组件夏令时
                this.$refs["datepicker1"].switchlanguage(Languageset.Englishset);
                this.$refs["datepicker2"].switchlanguage(Languageset.Englishset);
                //语言选择
                this.language = this.languagea;
            }else{
                this.languagetext = "中文";
                this.homelanguageset = Languageset.Chineseset;
                //切换组件夏令时
                this.$refs["datepicker1"].switchlanguage(Languageset.Chineseset);
                this.$refs["datepicker2"].switchlanguage(Languageset.Chineseset);
                //语言选择
                this.language = this.languagec;
            }
        },
        //修改摄氏度
        changesheshidu(val){
            this.info.sheshidutext = val.name;
        },
        //选择日期
        showpicker1(){
            this.$refs["datepicker1"].openPicker("pk1");
        },
        showpicker2(){
            this.$refs["datepicker2"].openPicker("pk2");
        },
        parentfn1(val){
            this.info.xialing1 = val;
        },
        parentfn2(val){
            this.info.xialing2 = val;
        },
        //使用手册
        goabout(){
            if(this.languagetext=="英文"||this.languagetext=="English"){
                this.$router.push({name:"infoen"});
            }else{
                this.$router.push({name:"info"});
            }
        }
    },
    mounted() {

    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home {
    .mycitys{
        .mint-field-clear{
            display: none;
        }
    }
    .mint-cell-value,
    .mint-cell-text {
        font-size: 1.4rem;
        color: $gray2;
    }
    .mint-cell:last-child {
        background: none;
    }
    .mint-cell-allow-right::after {
        border-color: $gray2;
        right:2rem;
    }
    .inputclass{
        input{
            line-height: 1;
            background-color: transparent;
        }
    }
    .mint-field .mint-cell-title{
        width:7.3rem;
        padding-right: 10px;
    }
    .mint-cell-wrapper{
        background-image:none;
    }
    .mint-cell{
        padding-right:30px;
        width:100%;
        background-color:transparent!important;
    }
}
</style>
<style lang="scss" scoped>
.home {
    position: relative;
    background-color: rgba(255,255,255,0.5);
    border-radius: 1rem;
    margin:0 10px;
    padding-bottom:1rem;
    height: 95%;
    .logo{
        position: absolute;
        top:0.3rem;
        left:1px;
        img{
            width:11rem;
        }
    }
    .title {
        margin-top:1rem;
        padding-top:2rem;
        font-size: 1.8rem;
        color:#fff;
        font-weight:bold;
        color:$blue;
    }
    .seldiv {
        text-align: left;
        height:4rem;
        font-size: 1.4rem;
        position: relative;
        border-bottom: 1px solid #fff;
        display: flex;
        align-items:center;
    }
    .dst{
        color:$gray2;
        margin:0 10px;
        white-space:nowrap;
    }
    .dst2{
        width: 100%;
        .spa{
            color:#fff;
            margin:0 0.5rem;
        }
    }
    .intelname {
        width: 100%;
    }
    .dstval{
        margin-left:0.5rem;
        .em{
            display: inline-block;
            border:1px solid #fff;
            border-radius:1rem;
            padding:0.1rem 0.1rem;
            background:rgba(255,255,255,0.6);
        }
    }
    .saveinfo{
        width: 95%;
        margin-top:3rem;
    }
    .useaboutout{
        text-align:left;
        .useabout{
            color:#fff;
            margin:2rem 1rem;
            font-size:1.4rem;
            text-decoration:underline;
            color:$blue;
            display: inline-block;
        }
    }
    .selcity{
        width: 4rem;
        height: 4rem;
        right: 0;
        position: absolute;
    }
    .qujian1{
        font-size:1rem;
        color:$gray2;
        margin-right:0.5rem;
    }
    .qujian2{
        font-size:1rem;
        color:$gray2;
        margin-left:0.5rem;
    }
    .lineback{
        z-index: 0;
        background-color: #fff;
        position: absolute;
        left:8rem;
        right: 1rem;
        height: 2.5rem;
        border-radius:0.3rem;
        border:1px solid $gray2;
        top: 0.7rem;
    }
    .selleft{
        position: absolute;
        left: 8.9rem;
        line-height: 0.7rem;
    }
    .zindex1{
        z-index: 1;
    }
}
</style>
