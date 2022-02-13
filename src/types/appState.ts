import { TBoilerPlateState } from '../redux/boilerPlate/reducer';
import { THomeState } from '../redux/home/reducer';
import { TUserState } from '../redux/user/reducer';

export type TAppState = {
    home: THomeState,
    user: TUserState,
    boilerPlate: TBoilerPlateState
}