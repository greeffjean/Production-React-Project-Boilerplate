
import { renderHook, act } from "@testing-library/react-hooks"
import { taxCalc } from '../hooks/taxCalc';

test('Get correct value from hook', () => {
    const { result } = renderHook(() => taxCalc('ZAR', 45000))

    act(() => {
        result.current.updateIncome(100000)
    })

    expect(result.current.nett).toEqual(83000)
})