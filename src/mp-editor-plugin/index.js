import EditorForm from './editform/index'
import Preview from './preview/index'

export default {
    // 所属bundle
    bundleId: {
        groupId: '',
        artifactId: '',
        version: '',
        classifier: '',
    },
    name: '',
    description: '',
    preview: Preview, // 预览组件
    previewType: 'react',
    editForm: EditorForm, // 数据编辑表单
    editFormType: 'react',
    editable: true, // 组件数据是否可编辑
    canDelete: false, // 组件数据是否可编辑
    dragable: false, // 是否可以拖拽
    highlightWhenSelect: true, // 选择后是否高亮
    limitPerPage: 1,
    // 获取初始值
    getInitialValue() {
        return {
            title: '微页面标题',
            color: '',
            description: '',
          };
    },
    // 验证示例数据
    validate(instance) {
        // return new Promise(resolve => {
        //     const errors = {};
        //     const { title } = value;
        //     if (!title || !title.trim()) {
        //       errors.title = '请填写页面名称';
        //     } else if (title.length > 50) {
        //       errors.title = '页面名称长度不能多于 50 个字';
        //     }
      
        //     resolve(errors);
        //   });
    }
}
