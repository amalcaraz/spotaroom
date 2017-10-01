import { Actions, WIDTH_CHANGE } from './responsive.actions';
import { ResponsivePrefix } from './responsive.model';


export enum ResponsiveBreakpoints {
  xl = 1200,
  lg = 992,
  md = 768,
  sm = 576,
  xs = 0
}

export interface State {
  viewportWidth: number;
  prefix: ResponsivePrefix;
}

export const initialState: State = {
  viewportWidth: null,
  prefix: null
};

export function reducer(state = initialState, action: Actions): State {

  switch (action.type) {

    case WIDTH_CHANGE: {

      const viewportWidth: number = action.payload;
      const prefix: ResponsivePrefix = Object.keys(ResponsiveBreakpoints)
        .find((key: string) => viewportWidth >= ResponsiveBreakpoints[key]) as ResponsivePrefix;

      return {
        viewportWidth,
        prefix
      };

    }

    default: {
      return state;
    }
  }

}
