<template>
  <div>
      <h2>基础用法</h2>
      <div>
        <g-input></g-input>
        <g-input value="默认值"></g-input>
        <g-input value="disabled" disabled></g-input>
      </div>
      <div style="margin-top:10px;">
        <g-input value="readonly" readonly></g-input>
      </div>
      <h2>代码</h2>
      <pre><code>{{content1}}</code></pre>
      <h2>双向绑定</h2>
      <div>
          <g-input v-model="message"></g-input>
          <p>{{message}}</p>
      </div>
      <h2>代码</h2>
      <pre><code>{{content2}}</code></pre>
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
              <td>disabled</td>
              <td>是否禁用状态</td>
              <td>boolean</td>
              <td>—</td>
              <td>false</td>
            </tr>
            <tr>
              <td>readonly</td>
              <td>是否禁用状态</td>
              <td>boolean</td>
              <td>—</td>
              <td>false</td>
            </tr>
            <tr>
              <td>value</td>
              <td>绑定值</td>
              <td>string</td>
              <td>—</td>
              <td>—</td>
            </tr>
        </tbody>
      </table>
  </div>
</template>
<script>
  import Input from '../../../src/input'
  export default {
    components: {
      'g-input': Input
    },
    data () {
      return {
        message:`Hello Vue!`,        
        content1: `
<g-input></g-input>
<g-input value="默认值"></g-input>
<g-input value="disabled" disabled></g-input>
<g-input value="readonly" readonly></g-input>
      `.trim(),
        content2: `
<g-input v-model="message"></g-input>
<p>{{message}}</p>

data () {
  return {
    message:'Hello Vue!'     
  }
}   
      `.trim()        
      }
    }
  }
</script>