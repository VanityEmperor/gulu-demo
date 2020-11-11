<template>
  <div>
    <h2>弹出位置</h2>
    <g-button @click="$toast('弹出消息',{position:'top'})">上面弹出</g-button>
    <g-button @click="$toast('弹出消息',{position:'middle'})">中间弹出</g-button>
    <g-button @click="$toast('弹出消息',{position:'bottom'})">底部弹出</g-button>
    <h2>代码</h2>
    <pre><code>{{content1}}</code></pre>
    <h2>自动关闭时间</h2>
    <g-button @click="$toast('弹出消息',{autoClose:3})">3秒后关闭</g-button>
    <g-button @click="$toast('弹出消息',{autoClose:5})">6秒后关闭</g-button>
    <g-button @click="$toast('弹出消息',{autoClose:10})">9秒后关闭</g-button>
    <pre><code>{{content2}}</code></pre>
    <h2>支持html</h2>
    <g-button @click="onClickButton">点击按钮</g-button>
    <h2>代码</h2>
    <pre><code>{{content3}}</code></pre>    
    <h2>属性</h2>
      <table>
        <thead>
          <tr>
            <td>参数</td>
            <td>说明</td>
            <td>类型</td>
            <td>可选值</td>
            <td>默认值</td>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>value</td>
              <td>绑定值</td>
              <td>string</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>position</td>
              <td>弹出的方向</td>
              <td>string</td>
              <td>top|middle|bottom</td>
              <td>—</td>
            </tr>
            <tr>
              <td>autoClose</td>
              <td>弹出后几秒关闭</td>
              <td>number</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>enableHtml</td>
              <td>是否支持html</td>
              <td>boolean</td>
              <td>true|false</td>
              <td>false</td>
            </tr>            
        </tbody>
      </table>       
  </div>
</template>
<script>
    import Vue from 'vue'
    import Button from '../../../src/button'    
    import Toast from '../../../src/toast'
    import plugin from '../../../src/plugin'
    Vue.use(plugin)
  export default {
    components: {
      'g-toast': Toast,
      'g-button': Button
    },
    data () {
      return {
        content1: `
<g-button @click="$toast('弹出消息',{position:'top'})">上面弹出</g-button>
<g-button @click="$toast('弹出消息',{position:'middle'})">中间弹出</g-button>
<g-button @click="$toast('弹出消息',{position:'bottom'})">底部弹出</g-button>
      `.trim(),
        content2: `
<g-button @click="$toast('弹出消息',{autoClose:3})">3秒后关闭</g-button>
<g-button @click="$toast('弹出消息',{autoClose:5})">6秒后关闭</g-button>
<g-button @click="$toast('弹出消息',{autoClose:10})">9秒后关闭</g-button>
      `.trim(),
        content3: `
<g-button @click="onClickButton">点击按钮</g-button>

methods: {
    onClickButton () {
        this.$toast('<a href="https://www.baidu.com" target="_blank">百度</a>', {
            enableHtml: true
        })
    }
}
      `.trim() 
             
      }
    },

methods: {
    onClickButton () {
        this.$toast('<a href="https://www.baidu.com" target="_blank">百度</a>', {
            enableHtml: true
        })
    }
}

  }
</script>
<style lang="scss">
    .toast {
        z-index: 100;
    }
</style>