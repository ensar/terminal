import { Table, TableContainer } from '@mui/material';
import Header from './Table/Header';
import Body from './Table/Body';
import Footer from './Table/Footer';
import { useDefectsContext } from 'contexts/DefectsContext';
import { useTranslation } from 'react-i18next';

const Defects = () => {
  const { defects, setDefects } = useDefectsContext();
  const { t } = useTranslation();

  const columns = [
    { id: 'depCode', label: t('table.depCode') },
    { id: 'bodyNo', label: t('table.bodyNo') },
    { id: 'assyNo', label: t('table.assyNo') },
    { id: 'vinNo', label: t('table.vinNo') },
    { id: 'colorExtCode', label: t('table.colorExtCode') },
    { id: 'modelCode', label: t('table.modelCode') },
    { id: 'localId', label: t('table.localId') },
    { id: 'partName', label: t('table.partName') },
    { id: 'spotCode', label: t('table.spotCode') },
    { id: 'arcnutboltCode', label: t('table.arcnutboltCode1') },
    { id: 'arcnutboltCode', label: t('table.arcnutboltCode2') },
    { id: 'arcnutboltCode', label: t('table.arcnutboltCode3') },
    { id: 'defectName', label: t('table.defectName') },
    { id: 'defRankCode', label: t('table.defRankCode') },
    { id: 'formattedDefectHour', label: t('table.formattedDefectHour') },
    { id: 'defectType', label: t('table.defectType') },
    { id: 'defrespName', label: t('table.defrespName') },
    { id: 'arcnutboltCode', label: t('table.arcnutboltCode4') },
  ];

  const extraColumns = ['NR REASON', t('table.save'), t('table.operation')];

  return (
    <TableContainer sx={{ height: '100vh', overflow: 'auto' }}>
      <Table stickyHeader size='small' sx={{ width: '124vw' }}>
        <Header columns={columns} extraColumns={extraColumns} />
        <Body data={defects} columns={columns} setData={setDefects} />
        <Footer data={defects[0]?.defectList} />
      </Table>
    </TableContainer>
  );
};

export default Defects;
