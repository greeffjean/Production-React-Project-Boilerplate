import { Paper } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { taxCalc } from "../../custom/hooks/taxCalc";

const BoilerPlateComponent: React.FunctionComponent = () => {
  const [count, setCount] = React.useState<number>(0);
  const [data, setData] = React.useState<any>(null);
  const { nett, updateIncome } = taxCalc("ZAR", 45000);

  useEffect(() => {
    let isMounted = true;
    axios.get(
      "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15"
    ).then((resp) => {
      resp.status === 200 && isMounted && setData(resp.data.toString())
    }).catch((err) => console.error(err))

    return(() => { isMounted = false })
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

export default BoilerPlateComponent;
