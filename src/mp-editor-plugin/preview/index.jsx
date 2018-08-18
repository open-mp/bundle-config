import React, { PureComponent } from 'react';
import './preview.pcss'
export default class ConfigPreview extends PureComponent {
  render() {
    const { instance: value } = this.props;

    return (
      <div className={`bundle-config-design-component-config-preview`}>
        <div className={`bundle-config-design-component-config-preview__title`}>
          {value.title}
        </div>
      </div>
    );
  }
}