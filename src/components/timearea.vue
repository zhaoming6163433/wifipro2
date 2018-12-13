<template>
  <div class="timearea">
    <mt-actionsheet
        :actions="timelist"
        cancelText=""
        v-model="timelistpopup">
    </mt-actionsheet>
  </div>
</template>

<script>
import util from 'src/util/util.js'
import timezonedata from 'static/js/timezonedata.js'

export default {
    name: 'timearea',
    props: [],
    data() {
        return {
            timelistpopup:false,
            timelist:[{
                name: "东八区",
                method: this.changetime
            }, {
                name: "东九区",
                method: this.changetime
            }]
        }
    },
    created() {

    },
    watch:{

    },
    methods: {
        showlist(language){
            this.timelistpopup = true;
            if(language=="中文"){

            }else{

            }
        },
        changetime(val){
            this.$emit('showtimearea',val);
        }
    },
    mounted() {

    }
}

</script>


<style lang="scss" scoped>
.timearea {

}
</style>
