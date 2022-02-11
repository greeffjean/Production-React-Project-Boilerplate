import { Paper } from '@mui/material';
import * as React from 'react'

const DashboardTwoComponent: React.FunctionComponent = () => {
  return (
      <>
      <Paper elevation={3}>
          <h1>Welcome to Dashboard Two!</h1>
          <span role="access">Private Access!</span>
      </Paper>
      </>
  )
};

export default DashboardTwoComponent

