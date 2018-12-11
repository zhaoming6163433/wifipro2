<template>
  <div class="infoen">
        <div class="info1">WI-FI CLOCK MANUAL</div>
        <div class="infoin1">
            <div class="info2">I. How to set up the clock(LCD Edition)</div>
            <div class="info3">1. Insert the battery or press the reset button, WIFI signal keep flashing and turn into connecting mode.</div>
            <div class="info3">2. Under the connection mode, turn your mobile wifi on and connect to “8266wifi”, and then open the Internet browser to http://192.168.4.1/default3.htm or scan the code access to Internet browser.</div>
            <div class="info3">3. Follow the guide to set up. The name and password of the wireless router in the home, the content of country, province, city, district, etc., have the country of daylight saving time, open the daylight saving time, the temperature unit can choose ℃ or ℉.</div>
            <div class="info3">4. After set up the clock will connect to Wifi.</div>
            <div class="info3">5. After the connection the clock will update the time and weather information.</div>
            <div class="info3">6. The Set up process timing out in 5 minutes.</div>
            <div class="info3">7. After the set up or timing out the Wifi signal stop flashing.</div>
        </div>
        <div class="infoin1">
            <div class="info2">II. WiFi update</div>
            <div class="info3">1. From 5am to 11pm, the clock update weather every hour, and         from 12am to 4 am, the clock stop updating; If the clock fail to  update then it will restart to update in 15mins(maximum 2 times), and the clock update the time at 12am daily.</div>
            <div class="info3">2. If the clock continuously update unsuccessfully in a week, the clock stop updating and check the internet provider and then press the reset button.</div>
            <div class="info3">3. The update time is 30 seconds.</div>
            <div class="info3">4. When update successfully the LCD display WIFI signal, when   update unsuccessfully no WIFI signal displayed.</div>
            <div class="info3">5. After a failure update, it keep the last information.</div>
        </div>
        <div class="infoin1">
            <div class="info2">III. Voltage detection Battery</div>
            <div class="info3">1. Replace the battery when the low battery signal displayed.</div>
        </div>
        <div class="infoin1">
            <div class="info2">IV. Weather</div>
            <div class="info3">1. For rain, moderate rain or heavy rain display as heavy rain(same as snow). Freezing Rain and snow shower display as light snow. Fog, haze, dust and all other weather, display as cloudy.</div>
            <div class="info3">2. For sunny, from 5am to 6pm display as day, from 6pm to 5am display as night.</div>
        </div>
  </div>
</template>

<script>

export default {
    name: 'infoen',
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
.infoen {
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
