import React from 'react';

interface Props {
  name: string;
  module?: string;
}

const CodeExample = ({ name, module }: Props) => {
  const moduleParam = module ? `module=${module}` : '';
  return (
    <iframe
      src={`https://codesandbox.io/embed/${name}?fontsize=14&hidenavigation=1&theme=dark&codemirror=1&${moduleParam}`}
      style={{
        width: '100%',
        height: '500px',
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
