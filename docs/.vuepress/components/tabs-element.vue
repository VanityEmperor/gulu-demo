<template>
    <div>
		<g-tabs :selected.sync="selectedTab">
            <g-tabs-head>
              <g-tabs-item name="woman">
                动漫
              </g-tabs-item>
              <g-tabs-item name="finance">
                武侠
              </g-tabs-item>
              <g-tabs-item name="sports">
                盗墓
              </g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
              <g-tabs-pane name="woman">
                火影忍者
              </g-tabs-pane>
              <g-tabs-pane name="finance">
                多情剑客无情剑
              </g-tabs-pane>
              <g-tabs-pane name="sports">
                盗墓笔记
              </g-tabs-pane>
            </g-tabs-body>
		</g-tabs>  
    <h2>代码</h2>
    <pre><code>{{content1}}</code></pre>   
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
          <td>selected</td>
          <td>默认选项name</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
      </tbody>
    </table>       
    </div>
</template>
<script>
import Tabs from '../../../src/tabs'
import TabsHead from '../../../src/tabs-head'
import TabsBody from './../../../src/tabs-body'
import TabsItem from '../../../src/tabs-item'
import TabsPane from '../../../src/tabs-pane'
  export default {
    components: {
        'g-tabs': Tabs,
        'g-tabs-head': TabsHead,
        'g-tabs-item': TabsItem,
        'g-tabs-body': TabsBody,
        'g-tabs-pane': TabsPane,                
    },
    data () {
      return {
        selected:'1',
        selectedTab: 'sports',
        content1: `
<g-tabs :selected.sync="selectedTab">
        <g-tabs-head>
          <g-tabs-item name="woman">
            动漫
          </g-tabs-item>
          <g-tabs-item name="finance">
            武侠
          </g-tabs-item>
          <g-tabs-item name="sports">
            盗墓
          </g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="woman">
            火影忍者
          </g-tabs-pane>
          <g-tabs-pane name="finance">
            多情剑客无情剑
          </g-tabs-pane>
          <g-tabs-pane name="sports">
            盗墓笔记
          </g-tabs-pane>
        </g-tabs-body>
</g-tabs>  

data () {
  return {
      selectedTab: 'sports'
  }
} 

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
<style lang="scss" scoped>
		// * {
		// 	margin: 0;
		// 	padding: 0;
		// 	box-sizing: border-box;
		// }
</style>