<template>
  <div class="info">
        <div class="info1">WIFI钟用户说明书</div>
        <div class="infoin1">
            <div class="info2">一 、用户设置（LCD版）</div>
            <div class="info3">1、装上电池或者按下复位键，LCD上 WIFI信号图标在闪烁，表示正在设置模式。</div>
            <div class="info3">2、在设置模式下，手机在“设置”中连接名为“8266wifi”的热点,  然后去打开手机浏览器，在地址栏输入http://192.168.4.1/default3.htm 进入网页设置页面；也可用浏览器搜索框的扫码功能相机扫码进入网页设置页面。</div>
            <div class="info3">3、根据页面提示，输入相应内容（家中无线路由器名称和密码，国、省、市、区等内容，有夏令时国家，开启夏令时间，温度单位可选择摄氏℃或者华氏℉）</div>
            <div class="info3">4、然后按“保存设置”，时钟与无线路由器信号自动链接。</div>
            <div class="info3">5、链接成功后，时钟开始更新时间和天气信息并显示。</div>
            <div class="info3">6、设置超时时间为5分钟。</div>
            <div class="info3">7、设置完成或者超时以后， LCD WIFI信号图标不闪烁。</div>
        </div>
        <div class="infoin1">
            <div class="info2">二、WIFI更新</div>
            <div class="info3">1、每天5~23点按每一小时更新1次天气信息， 0~4点不更新；如果更新失败则在15分钟以后重试，最多重试两次，时钟每天只在0点校时</div>
            <div class="info3">2、如果连续1周更新失败，时钟WIFI则不再尝试更新，用户需要检查网络是否正常，然后按复位键重新登录。</div>
            <div class="info3">3、更新超时时间为30秒。</div>
            <div class="info3">4、每次更新成功/失败，成功后显示 WIFI信号图标，失败不显示WIFI信号图标，并持续到下次更新结果。</div>
            <div class="info3">5、更新失败时保留前一次天气信息（从没成功过则是白屏）。</div>
        </div>
        <div class="infoin1">
            <div class="info2">三、电量检测</div>
            <div class="info3">1、电池电压在5V以下（快没电）则显示电量不足图标，要求用户更换电池。</div>
        </div>
        <div class="infoin1">
            <div class="info2">四、天气显示</div>
            <div class="info3">1、对于雨雪天气，中与大都用大表示。冻雨，雨夹雪，阵雪都用小雪表示。雾，霾，沙尘等其它天气全部用阴天表示。</div>
            <div class="info3">2、对于晴天和多云天气，早5点到晚6点用白天图案，其它时间用夜晚图案。</div>
        </div>
  </div>
</template>

<script>

export default {
    name: 'info',
    props: [],
    data() {
        return {

        }
    },
    created() {

    },
    methods: {

    },
    mounted() {

    }
}

</script>


<style lang="scss" scoped>
.info {
    padding: 20px 10px;
    min-height: 100%;
    text-align: left;
    .info1 {
        font-size: 1.8rem;
        text-align: center;
        color: #fff;
        margin-top: 0.5rem;
        font-weight: bold;
    }

    .infoin1 {
        background-color: #fff;
        border-radius: 1rem;
        padding: 1rem;
        margin-top: 1rem;
        .info2 {
            font-size: 1.4rem;
            color: $gray;
        }
        .info3 {
            font-size: 1.2rem;
            color: $gray2;
            margin-top: 1rem;
            line-height: 2rem;
        }
    }
}
</style>
