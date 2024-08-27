import { Inputs } from '../types/common.types';

export const sendEmail = async (formData: Inputs) => {
  const response = await fetch('/api/form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('Failed to send email');
  }

  return await response.json();
};
