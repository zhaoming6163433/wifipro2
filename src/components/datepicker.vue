<template>
  <div class="datepicker">
    <mt-datetime-picker
    class="yearMonth"
    ref="picker"
    v-model="pickerVisible"
    type="date"
    :cancelText="homelanguageset.cancelText"
    :confirmText="homelanguageset.confirmText"
    month-format="{value}"
    date-format="{value}" @confirm="handleConfirm">
    </mt-datetime-picker>

  </div>
</template>

<script>
import util from 'src/util/util.js'
import Languageset from 'static/js/Languageset.js'

export default {
    name: 'datepicker',
    props: [],
    data() {
        return {
            homelanguageset:Languageset.Chineseset,//中文
            pickerVisible: new Date(),
            selpk:""
        }
    },
    created() {

    },
    methods: {
        //切换语言方法
        switchlanguage(val){
            this.homelanguageset = val;
        },
        //打开日期选择
        openPicker(val) {
            this.$refs.picker.open();
            this.selpk = val;
        },
        //赋值日期
        assgindate(value){
            let year = new Date().getFullYear();
            this.pickerVisible = new Date(year+"-"+value);
        },
        //改变日期
        handleConfirm(val){
            let yd = new Date(val).Format('MM-dd');
            if(this.selpk=="pk1"){
                this.$emit('parentfn1',yd);
            }
            if(this.selpk=="pk2"){
                this.$emit('parentfn2',yd);
            }
        }
    },
    mounted() {

    }
}

</script>

<style lang="scss" >
.yearMonth {
    .picker-items {
        .picker-slot-center:nth-child(1) {
            flex: 0 0 0% !important;
        }
    }
}
</style>
<style lang="scss" scoped>
.datetimepicker {
}
</style>
