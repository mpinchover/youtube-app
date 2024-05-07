import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil'

export const interestedInState = atom({
  key: 'interestedInState',
  default: 'women',
})
export const ageMinState = atom({
  key: 'ageMinState',
  default: 18,
})

export const ageMaxState = atom({
  key: 'ageMaxState',
  default: 100,
})

export const mobileState = atom({
  key: 'mobileState',
  default: '',
})

export const profileSettingsTabState = atom({
  key:"profileSettingsTabState",
  default:0,
})
// export const setInterestedIn = selector({
//   key: 'matchingCandidatesState',
//   get: ({ get }) => {
//     return get(candidates)
//   },
//   set: ({ get, set }) => {},
// })
