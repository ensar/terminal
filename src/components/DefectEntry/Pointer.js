import { useEffect } from 'react';

const Pointer = ({ cor, setCor }) => {
  useEffect(() => {
    const setCordinates = (e) => {
      const canvas = document.querySelector('canvas');
      if (e.target !== canvas) {
        return;
      }
      setCor({ x: e.offsetX, y: e.offsetY });
    };
    document.addEventListener('click', setCordinates);
    return () => window.removeEventListener('click', setCordinates);
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: cor?.y,
        left: cor?.x,
        width: '30px',
        height: '30px',
        background: 'red linear-gradient(red, blue)',
        clipPath: 'polygon(10% 100%, 0% 0%, 90% 60%)',
      }}
    ></div>
  );
};

export default Pointer;
