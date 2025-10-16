export function validateForm(form) {
  let valid = true;

  form.querySelectorAll('input[required], textarea[required]').forEach(field => {
    if (!field.value.trim()) {
      field.classList.add('error');
      valid = false;
    } else {
      field.classList.remove('error');
    }

    if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
      field.classList.add('error');
      valid = false;
    }
  });

  if (!valid) {
    alert('Por favor, verifique os campos em vermelho.');
  }

  return valid;
}