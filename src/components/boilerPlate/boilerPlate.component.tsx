import { Paper } from "@mui/material";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { taxCalc } from "../../custom/hooks/taxCalc";
import { requestBoilerPlateData } from "../../redux/boilerPlate/actions";
import {
  selectBoilerPlateData,
  selectBoilerPlateError,
  selectBoilerPlateIsLoading,
} from "../../redux/boilerPlate/selectors";
import { TAppState } from "../../types/appState";
import { TData } from "../../types/commonTypes";

const mapStateToProps = (state: TAppState) => ({
  isLoading: selectBoilerPlateIsLoading(state),
  data: selectBoilerPlateData(state),
  error: selectBoilerPlateError(state),
});

const mapDispatchToProps = { requestBoilerPlateData };

type TBoilerPlateProps = {
  isLoading: boolean;
  data: TData | null;
  error: any;
  requestBoilerPlateData: () => void;
};

const BoilerPlateComponent: React.FunctionComponent<TBoilerPlateProps> = ({
  data,
  error,
  isLoading,
  requestBoilerPlateData,
}) => {
  const [count, setCount] = React.useState<number>(0);
  const { nett, updateIncome } = taxCalc("ZAR", 45000);

  useEffect(() => {
    let isMounted = true;
    isMounted && requestBoilerPlateData()
    return () => {
      isMounted = false;
    };
  }, []);

  const handleUpdateIncome = (income: number) => {
    updateIncome(income);
  };

  return (
    <>
      <Paper elevation={3}>
        <h1>Welcome to BoilerPlate!</h1>
        <span role="access">Public Access!</span>
      </Paper>

      <br />
      <br />

      <Paper elevation={3}>
        <label role="displayCount">Try Me! The count is {count}</label>
        <button role="incrementCount" onClick={() => setCount(count + 1)}>
          Increment Counter
        </button>
      </Paper>

      <br />
      <br />

      <Paper elevation={3}>
        <h1>Here is your data!</h1>
        {data && <p role="dataInfo">{data}</p>}
      </Paper>

      <br />
      <br />

      <Paper elevation={3}>
        <h1>Here is your nett Income!</h1>
        <p role="yourNett">Your income is {nett}</p>
        <button
          role="updateIncome"
          onClick={() => handleUpdateIncome(nett ? nett + 100000 : 10000)}
        >
          {" "}
          See what you would make on R100 000!{" "}
        </button>
      </Paper>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BoilerPlateComponent);
