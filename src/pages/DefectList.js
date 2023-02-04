import { DefectsProvider } from 'contexts/DefectsContext';
import Defects from 'components/Defects';

const DefectList = () => {
  return (
    <DefectsProvider>
      <Defects />
    </DefectsProvider>
  );
};

export default DefectList;
