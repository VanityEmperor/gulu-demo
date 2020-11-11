<template>
  <div>
    <h2>基础用法</h2>
    <g-button>默认按钮</g-button>
    <g-button icon="settings">默认按钮</g-button>
    <g-button :loading="true">默认按钮</g-button>
    <g-button disabled>默认按钮</g-button>
    <h2>代码</h2>
    <pre><code>{{content}}</code></pre>
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
  import Button from '../../../src/button'
  export default {
    components: {
      'g-button': Button
    },
    data () {
      return {
        content: `
<g-button>默认按钮</g-button>
<g-button icon="settings">默认按钮</g-button>
<g-button :loading="true">默认按钮</g-button>
<g-button disabled>默认按钮</g-button>
      `.trim()
      }
    }
  }
</script>