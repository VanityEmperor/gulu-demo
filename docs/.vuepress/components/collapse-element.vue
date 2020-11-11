<template>
  <div>
    <h2>展开一个</h2>
		<div>
		<g-collapse :selected.sync="selectedTab1" single>
			<g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
			<g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
			<g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
		</g-collapse>
		</div>
    <pre><code>{{content1}}</code></pre>
    <h2>展开多个</h2>
		<div>
      <g-collapse :selected.sync="selectedTab2">
        <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
        <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
        <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
      </g-collapse>
		</div>    
        <pre><code>{{content2}}</code></pre>
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
            <td>:selected.sync</td>
            <td>默认展开name</td>
            <td>Array</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>single</td>
            <td>是否展开多个</td>
            <td>Boolean</td>
            <td>true|false/td>
            <td>false</td>
          </tr>
        </tbody>
      </table>         
  </div>
</template>
<script>
  import Collapse from '../../../src/collapse'
  import CollapseItem from '../../../src/collapse-item'  
  export default {
    components: {
        'g-collapse': Collapse,
        'g-collapse-item': CollapseItem
    },
    data () {
      return {
        selectedTab1:['2'],
        selectedTab2:['1','2'],
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