<template>
  <div>
        <h2>点击弹出</h2>
		<div>
			<g-popover position="top">
			  <template slot="content">
				<div>popover内容</div>
			  </template>
			  <g-button>点击按钮</g-button>
			</g-popover>
			<g-popover position="bottom">
			  <template slot="content">
				<div>popover内容</div>
			  </template>
			  <g-button>点击按钮</g-button>
			</g-popover>
			<g-popover position="left">
			  <template slot="content">
				<div>popover内容</div>
			  </template>
			  <g-button>点击按钮</g-button>
			</g-popover>
			<g-popover position="right">
			  <template slot="content">
				<div>popover内容</div>
			  </template>
			  <g-button>点击按钮</g-button>
			</g-popover>
		</div>
    <pre><code>{{content1}}</code></pre>
        <h2>hover弹出</h2>
		<div>
			<g-popover position="top" trigger="hover">
				<template slot="content">
					<div>popover内容</div>
				</template>
				<g-button>鼠标进入</g-button>
			</g-popover>
			<g-popover position="bottom" trigger="hover">
				<template slot="content">
					<div>popover内容</div>
				</template>
				<g-button>鼠标进入</g-button>
			</g-popover>
			<g-popover position="left" trigger="hover">
				<template slot="content">
					<div>popover内容</div>
				</template>
				<g-button>鼠标进入</g-button>
			</g-popover>
			<g-popover position="right" trigger="hover">
				<template slot="content">
					<div>popover内容</div>
				</template>
				<g-button>鼠标进入</g-button>
			</g-popover>
		</div>    
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
            <td>position</td>
            <td>弹出位置</td>
            <td>String</td>
            <td>top</td>
            <td>top|left|right|bottom</td>
          </tr>
          <tr>
            <td>trigger</td>
            <td>是否激活hover事件</td>
            <td>String</td>
            <td>—</td>
            <td>hover</td>
          </tr>
        </tbody>
      </table>         
  </div>
</template>
<script>
  import Button from '../../../src/button'
  import Popover from '../../../src/popover'
  export default {
    components: {
        'g-button': Button,
        'g-popover': Popover
    },
    data () {
      return {
        content1: `
<g-popover position="bottom">
    <template slot="content">
    <div>popover内容</div>
    </template>
    <g-button>点我</g-button>
</g-popover>
<g-popover position="top">
    <template slot="content">
    <div>popover内容</div>
    </template>
    <g-button>点我</g-button>
</g-popover>
<g-popover position="left">
    <template slot="content">
    <div>popover内容</div>
    </template>
    <g-button>点我</g-button>
</g-popover>
<g-popover position="right">
    <template slot="content">
    <div>popover内容</div>
    </template>
    <g-button>点我</g-button>
</g-popover>
      `.trim(),
        content2: `
<g-popover position="bottom" trigger="hover">
    <template slot="content">
        <div>popover内容</div>
    </template>
    <g-button>点我</g-button>
</g-popover>
<g-popover position="top" trigger="hover">
    <template slot="content">
        <div>popover内容</div>
    </template>
    <g-button>点我</g-button>
</g-popover>
<g-popover position="left" trigger="hover">
    <template slot="content">
        <div>popover内容</div>
    </template>
    <g-button>点我</g-button>
</g-popover>
<g-popover position="right" trigger="hover">
    <template slot="content">
        <div>popover内容</div>
    </template>
    <g-button>点我</g-button>
</g-popover>
      `.trim()      
      }
    }
  }
</script>