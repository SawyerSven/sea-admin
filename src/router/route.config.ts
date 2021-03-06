import Wrap from '@/views/Wrap/Wrap.vue';

export const subRoutes = [
  {
    path: '/project',
    name: 'project',
    meta: {
      title: '项目详情',
      icon: 'el-icon-s-order'
    },
    components: {
      main: () => import('@/views/Project/Project.vue')
    }
  },
  {
    path: '/diary',
    name: 'diary',
    meta: {
      title: 'Table组件',
      icon: 'el-icon-notebook-1'
    },
    components: {
      main: () => import('@/views/Diary/Diary.vue')
    }
  },
  {
    path: '/record',
    name: 'record',
    meta: {
      title: '上工记录',
      icon: 'el-icon-notebook-2'
    },
    components: {
      main: () => import('@/views/Record/Record.vue')
    }
  },
  {
    path: '/sea-form',
    name: 'SeaForm',
    meta: {
      title: '数据表单',
      icon: 'el-icon-tickets'
    },
    components: {
      main: () => import('@/views/Form/FormPage.vue')
    }
  },
  {
    path: '/sea-upload',
    name: 'SeaUpload',
    meta: {
      title: '文件上传',
      icon: 'el-icon-upload'
    },
    components: {
      main: () => import('@/views/Upload/index.vue')
    }
  },
  {
    path: '/sea-list',
    name: 'SeaList',
    meta: {
      title: '数据列表',
      icon: 'el-icon-s-order'
    },
    components: {
      main: () => import('@/views/List/index.vue')
    }
  }
];

const routes = [
  {
    path: '/',
    name: 'home',
    component: Wrap,
    children: subRoutes
  }
];

export default routes;
