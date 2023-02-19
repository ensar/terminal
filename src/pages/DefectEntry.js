import { Grid } from '@mui/material';
import { DefectEntryProvider } from 'contexts/DefectEntryContext';
import Navbar from 'components/DefectEntry/Navbar';
import Screen from 'components/DefectEntry/Screen';
import Sidebar from 'components/DefectEntry/Sidebar';
import Footer from 'components/DefectEntry/Footer';

const DefectEntry = () => {
  return (
    <DefectEntryProvider>
      <Grid
        container
        xs={9}
        sx={{
          marginInline: 'auto',
          border: '2px solid',
          borderColor: 'main.darkGreen',
          borderRadius: '8px',
        }}
      >
        <Navbar />
        <Screen />
        <Sidebar />
        <Footer />
      </Grid>
    </DefectEntryProvider>
  );
};

export default DefectEntry;
