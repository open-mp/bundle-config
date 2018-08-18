/* eslint-disable no-script-url */

import React, {PureComponent} from 'react';
import {Button, Input, ColorPicker} from 'zent';
import ControlGroup from './ControlGroup';

const DEFAULT_BACKGROUND = '#f9f9f9';
export default class ConfigEditor extends PureComponent {
  render() {
    const { instance: value, settings, showError, validation } = this.props;

    return (
      <div className={`bundle-config-design-component-config-editor`}>
        <ControlGroup
          showError={showError }
          error={validation.title}
          required
          label="页面名称:"
        >
          <Input
            value={value.title}
            onChange={this.onInputChange}
            onBlur={this.onInputBlur}
            name="title"
          />
        </ControlGroup>

        <ControlGroup
          showError={
            showError 
          }
          error={validation.description}
          label="页面描述:"
        >
          <Input
            value={value.description}
            onChange={this.onInputChange}
            onBlur={this.onInputBlur}
            name="description"
            placeholder="用户通过微信分享给朋友时，会自动显示页面描述"
          />
        </ControlGroup>

        <ControlGroup
          label="背景颜色:"
          labelAlign="top"
          className={`bundle-config-design-component-config-editor__background`}
          focusOnLabelClick={false}
        >
          <div
            className={`bundle-config-design-component-config-editor__background-control`}
          >
            <ColorPicker
              color={getBackground(value, settings)}
              onChange={this.onBackgroundChange}
            />
            <Button onClick={this.resetBackground}>重置</Button>
          </div>
          <div
            className={`bundle-config-design-component-config-editor__background-hint`}
          >
            背景颜色只在手机端显示
          </div>
        </ControlGroup>
      </div>
    );
  }

  onBackgroundChange = color => {
    let {design, instance} = this.props;
    // 修改 Config 组件的值
    design.modifyInstance(instance, {color: color});
    // 修改 settings
    design.setSettings({
        previewBackground: color
    });
  };

  onInputChange = (evt) => {
    const {target} = evt;
    let {name, type, value} = target;

    if (type === 'checkbox') {
        value = target.checked;
    }
    const {design, instance} = this.props;
    design.modifyInstance(instance, {[name]: value});
  }

  resetBackground = () => {
    this.onBackgroundChange(DEFAULT_BACKGROUND);
  };

  filterTag = (item, keyword) => item.text.indexOf(keyword) > -1;
}

function getBackground(value, settings) {
  return (
    (value && value.color) || settings.previewBackground || DEFAULT_BACKGROUND
  );
}
