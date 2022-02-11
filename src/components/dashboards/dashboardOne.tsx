import { Paper } from '@mui/material';
import * as React from 'react'

const DashboardOneComponent: React.FunctionComponent = () => {
  return (
      <>
      <Paper elevation={3}>
          <h1>Welcome to Dashboard One!</h1>
          <span role="access">Public Access!</span>
      </Paper>
      </>
  )
};

export default DashboardOneComponent

