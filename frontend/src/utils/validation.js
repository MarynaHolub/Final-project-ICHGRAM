export const validateUsername = (value) => {
  if (!value.trim()) {
    return 'Please enter your name';
  }

  if (value.trim().length < 5) {
    return 'Name must be at least 5 characters';
  }

  return true;
};

export const validateEmail = (value) => {
  if (!value.trim()) {
    return 'Please enter your email';
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return 'Please enter a valid email address';
  }

  return true;
};

export const validateLogin = (value) => {
  if (!value.trim()) {
    return 'Please enter your email or username';
  }

  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  if (isEmail) {
    return true;
  }

  if (value.length < 5) {
    return 'Username must be at least 5 characters';
  }

  return true;
};

export const validatePassword = (value) => {
  if (!value) {
    return 'Please enter your password';
  }

  if (value.length < 8) {
    return 'Password must be at least 8 characters';
  }

  if (!/[a-z]/.test(value)) {
    return 'Password must contain a lowercase letter';
  }

  if (!/[A-Z]/.test(value)) {
    return 'Password must contain an uppercase letter';
  }

  if (!/[0-9]/.test(value)) {
    return 'Password must contain a number';
  }

  if (!/[!@#$%^&*(),.?":{}|<>_\-+=/\\[\]~`;'']/.test(value)) {
    return 'Password must contain a special character';
  }

  return true;
};