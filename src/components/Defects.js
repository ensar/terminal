import { Table, TableContainer } from '@mui/material';
import Header from './Table/Header';
import Body from './Table/Body';
import Footer from './Table/Footer';
import { useDefectsContext } from 'contexts/DefectsContext';
import { useTranslation } from 'react-i18next';
import DefectListLoading from './Skeletons/DefectListLoading';
import { columns } from 'constants';

const Defects = () => {
  const { defects, setDefects } = useDefectsContext();
  const { t } = useTranslation();

  const extraColumns = ['NR REASON', t('table.save'), t('table.operation')];

  return (
    <TableContainer sx={{ height: '100vh', overflow: 'auto' }}>
      <Table stickyHeader size='small' sx={{ width: '124vw' }}>
        <Header columns={columns} extraColumns={extraColumns} />
        <Body data={defects} columns={columns} setData={setDefects} />
        <Footer data={defects[0]?.defectList} />
      </Table>
      {defects.length < 1 && <DefectListLoading />}
    </TableContainer>
  );
};

export default Defects;
