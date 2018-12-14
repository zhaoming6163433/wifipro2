<template>
  <div id="app">
    <keep-alive>
        <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    text-align: center;
    color: rgb(48, 49, 51);
    font-size: 16px;
    height: 100%;
    min-width: 320px;
    overflow: auto;
    background:#42beff;
    background-image: -webkit-linear-gradient(140deg, #42BEFF, #bfbfbf,#42BEFF 50%,#bfbfbf );
}
body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
dl,
dt,
dd,
ul,
ol,
li,
pre,
form,
fieldset,
legend,
button,
input,
textarea,
th,
td {
  outline:none;
  margin: 0;
  padding: 0;
}
#jsEnvironment {
    font-size: 16px;
    max-width: 1500px;
    margin: 0 auto;
}
html,body{
    height: 100%;
    overflow-x: hidden;
}
/*修改全局mintui*/
/*修改switch*/
.mint-switch-core {
    width: 4rem;
    height: 2.1rem;
    border-radius: 1rem;
}
.mint-switch-core::before {
    width: 4rem;
    height: 2rem;
}
.mint-switch-core::after, .mint-switch-core::before {
    border-radius: 1rem;
}
.mint-switch-core::after {
    width: 2rem;
    height: 2rem;
}
.mint-switch-core::after, .mint-switch-core::before {
    border-radius: 1rem;
}
.mint-switch-input:checked + .mint-switch-core::after {
    -webkit-transform: translateX(2rem);
    transform: translateX(2rem);
}
</style>
