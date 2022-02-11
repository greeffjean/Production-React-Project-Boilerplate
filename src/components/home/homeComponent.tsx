import { Paper } from "@mui/material";
import { connect } from "react-redux";
import * as React from "react"
import { selectHomeState } from "../../redux/home/selectors";
import { TAppState } from "../../types/appState";
import BoilerPlateComponent from "../boilerPlate/boilerPlate.component";

type TProps = {
  home: any
}

const mapStateToProps = (state: TAppState) => ({
  home: selectHomeState(state)
})

const HomeComponent: React.FunctionComponent<TProps> = ({ home }) => {

  return (
      <>
      <Paper elevation={3}>
          <h1>Welcome Home!</h1>
          <BoilerPlateComponent />
      </Paper>
      </>
  )
};

export default connect(mapStateToProps)(HomeComponent)

