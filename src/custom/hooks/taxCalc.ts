import React, { useEffect } from 'react';

type TRegionDict = {
    [key: string]: number
}

type TReturnProps = {
    nett: number,
    setIncome: () => void
};

const taxRegionsMap: TRegionDict = {
'ZAR': 17
}

export const taxCalc = (region: string, value: number) => {
const [nett, setNett] = React.useState<number | null>(null)
const taxRate = taxRegionsMap[region];

useEffect(() => {
    setNett(value - ((value / 100) * taxRate));
}, [])

const updateIncome: any = (income: number) => {
    const v = income - ((income / 100) * taxRate);
    setNett(v);
}

return { nett, updateIncome };
};