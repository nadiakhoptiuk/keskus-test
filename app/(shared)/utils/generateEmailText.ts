import { Inputs } from '../types/common.types';

export const generateEmailText = (data: Inputs) => {
  return Object.entries(data).reduce((string_, [key, value]) => {
    return key === 'terms' ? string_ : (string_ += `${value} \n \n`);
  }, '');
};
