import React, { useState, useEffect, useRef } from 'react';
import { Radio } from 'antd';
import '@google/model-viewer/dist/model-viewer';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': any;
    }
  }
}

type MeshViewerProps = {
  className?: string;
  uri?: string;
  url?: string;
  style?: React.CSSProperties;
  onError?: () => void;
};

const ANIMATIONS_NAME = [
  { label: 'Idle', value: 'Idle' },
  { label: 'Walking', value: 'Walking' },
  { label: 'Running', value: 'Running' },
  { label: 'Jump', value: 'Jump' },
];

export function MeshViewer(props: MeshViewerProps) {
  const [animationList, setAnimationList] = useState([]);
  const [animationName, setAnimationName] = useState(null);
  const modelViewer = useRef(null);
  useEffect(() => {
    document.querySelector('model-viewer');
    const modelViewerA: any = document.querySelector('model-viewer');
    modelViewerA?.addEventListener('load', () => {
      const names = modelViewerA.availableAnimations;
      setAnimationList(names);
    });
  });

  const handleClick = (e: any) => {
    setAnimationName(e.target.value);
  };

  return (
    // @ts-ignore
    <>
      <style jsx global>{`
        .animation-radio-group {
          display: flex !important;
          flex-direction: row !important;
          width: 100% !important;
        }

        .animation-radio-group label {
          flex: 1 !important;
          text-align: center !important;
        }

        .ant-radio-button-wrapper {
          background: transparent !important;
          background-color: transparent !important;
        }
      `}</style>
      <div className="modelViewer">
        <model-viewer
          ref={modelViewer}
          src={props.url}
          poster={props.uri}
          ar-status="not-presenting"
          preload
          data-js-focus-visible
          animation-name={animationName}
          autoplay={animationList.length > 0}
          camera-orbit="22.36deg 67.42deg 490.8m"
          camera-controls
        ></model-viewer>
        <Radio.Group
          className="animation-radio-group"
          options={animationList}
          onChange={handleClick}
          value={animationList}
          optionType="button"
        />
      </div>
    </>
  );
}
