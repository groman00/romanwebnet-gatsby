import React from 'react';

interface Props {
  name: string;
  height?: number;
  module?: string;
  view?: string;
}

const toParamString = (params: Record<string, string | undefined>) => {
  let paramArray: string[] = [];
  for (const param in params) {
    if (params[param]) {
      paramArray = [...paramArray, `${param}=${params[param]}`];
    }
  }
  return paramArray.join('&');
};

const CodeExample = ({ name, height = 500, module, view }: Props) => {
  let paramString = toParamString({ module, view });

  return (
    <iframe
      src={`https://codesandbox.io/embed/${name}?fontsize=14&hidenavigation=1&theme=dark&codemirror=1&${paramString}`}
      style={{
        width: '100%',
        height: `${height}px`,
        border: 0,
        borderRadius: '4px',
        overflow: 'hidden',
      }}
      title="React"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  );
};

export default CodeExample;
