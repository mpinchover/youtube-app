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

// export const setInterestedIn = selector({
//   key: 'matchingCandidatesState',
//   get: ({ get }) => {
//     return get(candidates)
//   },
//   set: ({ get, set }) => {},
// })
