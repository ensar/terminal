import { Table, TableContainer } from '@mui/material';
import Header from './Table/Header';
import Body from './Table/Body';
import Footer from './Table/Footer';
import { useDefectsContext } from 'contexts/DefectsContext';

const Defects = () => {
  const { defects, setDefects } = useDefectsContext();

  const columns = [
    { id: 'depCode', label: 'Bildiren' },
    { id: 'bodyNo', label: 'Body' },
    { id: 'assyNo', label: 'Assy' },
    { id: 'vinNo', label: 'Vin No' },
    { id: 'colorExtCode', label: 'Renk' },
    { id: 'modelCode', label: 'Mdl' },
    { id: 'localId', label: 'Sicil' },
    { id: 'partName', label: 'Parça' },
    { id: 'spotCode', label: 'Spot' },
    { id: 'arcnutboltCode', label: 'Gun' },
    { id: 'arcnutboltCode', label: 'Arc' },
    { id: 'arcnutboltCode', label: 'ArcGun' },
    { id: 'defectName', label: 'Hata' },
    { id: 'defRankCode', label: 'Rank' },
    { id: 'formattedDefectHour', label: 'Saat' },
    { id: 'defectType', label: 'Hata Türü' },
    { id: 'defrespName', label: 'Hata Sor' },
    { id: 'arcnutboltCode', label: 'Alt sorumlu' },
  ];

  const extraColumns = ['NR REASON', 'Kaydet', 'İşlem'];

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
