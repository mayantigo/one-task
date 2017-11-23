// @flow

import type Profile from '../types/profile';

export default function profile(
  state: Profile = {},
  { type, payload }: { type: string, payload: any },
) {
  switch (type) {
    case 'A': {
      return { state, ...payload };
    }
    default: {
      return state;
    }
  }
}
