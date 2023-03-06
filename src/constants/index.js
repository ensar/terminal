export const loginFormInitialValues = {
  filter: '',
  register: '',
  password: '',
  assy: '',
  shift: {
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
    shiftCode: 'B',
  },
};
export const formItems = [
  { name: 'filter', type: 'select', label: 'filterLabel' },
  { name: 'register', type: 'text', label: 'registerLabel' },
  { name: 'password', type: 'password', label: 'passwordLabel' },
  { name: 'assy', type: 'text', label: 'assyLabel' },
];

export const saveDefectFormInitialValues = {
  ExitDepartment: '',
  Explanation: '',
  AppliedOperation: '',
  SubResponsible: '',
  DefectClass: '',
  DefectResponsibles: '',
  Harigami: false,
  nrReason: '',
};
export const columns = [
  { id: 'depCode', label: 'depCode' },
  { id: 'bodyNo', label: 'bodyNo' },
  { id: 'assyNo', label: 'assyNo' },
  { id: 'vinNo', label: 'vinNo' },
  { id: 'colorExtCode', label: 'colorExtCode' },
  { id: 'modelCode', label: 'modelCode' },
  { id: 'localId', label: 'localId' },
  { id: 'partName', label: 'partName' },
  { id: 'spotCode', label: 'spotCode' },
  { id: 'arcnutboltCode', label: 'arcnutboltCode1' },
  { id: 'arcnutboltCode', label: 'arcnutboltCode2' },
  { id: 'arcnutboltCode', label: 'arcnutboltCode3' },
  { id: 'defectName', label: 'defectName' },
  { id: 'defRankCode', label: 'defRankCode' },
  { id: 'formattedDefectHour', label: 'formattedDefectHour' },
  { id: 'defectType', label: 'defectType' },
  { id: 'defrespName', label: 'defrespName' },
  { id: 'arcnutboltCode', label: 'arcnutboltCode4' },
];
