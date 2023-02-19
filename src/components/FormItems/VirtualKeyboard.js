import { useEffect, useState } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import { useKeyboardLayout } from 'hooks/useKeyboardLayout';

const VirtualKeyboard = ({ formik }) => {
  const layout = useKeyboardLayout();
  const [name, setName] = useState();
  const [layoutName, setLayoutName] = useState('default');

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (e.target.type === 'text' || e.target.type === 'password') {
        setName(e.target.name);
      }
    });
  }, []);

  const onChange = (input) => {
    const fullValue = formik.values[name] + input.slice(-1);
    formik.setFieldValue(name, fullValue);
  };

  const onKeyPress = (btn) => {
    if (btn === '{bksp}') {
      formik.setFieldValue(name, formik.values[name]?.slice(0, -1));
    }
    if (btn === '{lock}' || btn === '{shift}') {
      layoutName === 'default'
        ? setLayoutName('shift')
        : setLayoutName('default');
    }
  };

  return (
    <Keyboard
      onChange={onChange}
      onKeyPress={onKeyPress}
      inputName={name}
      layout={layout.layout}
      layoutName={layoutName}
    />
  );
};

export default VirtualKeyboard;
