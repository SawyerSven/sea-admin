<template>
  <div class="list">
    <div class="list-item">
      <div v-if="type === 'selection'" class="list-item__checkbox">
        <el-checkbox @change="changeSelect" v-model="isSelect"></el-checkbox>
      </div>
      <div class="list-item__head">
        <slot name="head">
          <el-icon class="el-icon-message"></el-icon>
        </slot>
      </div>
      <div class="list-item__body">
        <slot name="main">{{content}}</slot>
      </div>
      <div class="list-item__footer">
        <slot name="footer">{{footer}}</slot>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import Emitter from '../../utils/mixins/emitter';
import {
  Component,
  Vue,
  Emit,
  Model,
  PropSync,
  Inject,
  Watch
} from 'vue-property-decorator';
@Component({
  name: 'List',
  props: {
    id: {
      type: [String, Number]
    },
    content: {
      type: String,
      default: ''
    },
    footer: {
      type: [String, Number, Boolean],
      default: ''
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'normal'
    }
  },
  mixins: [Emitter]
})
export default class extends Vue {
  public isSelect: boolean = false;
  public changeSelect(e: boolean) {
    (this as any).dispatchListGroup('ListGroup', 'selfChange');
  }
}
</script>
<style lang="less" scoped>
.list {
  width: 100%;
  min-width: 500px;
  &-item {
    padding: 20px 20px;
    #flex(space-between, center);
    border-bottom: 1px solid #eee;
    &__checkbox {
      margin-right: 20px;
    }
    &__body {
      flex: 1;
      margin: 0 20px;
    }
  }
}
</style>
