'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('reverseForm');
  const textInput = document.getElementById('textInput');
  const reverseButton = document.getElementById('reverseButton');
  const resultOutput = document.getElementById('resultOutput');
  const copyButton = document.getElementById('copyButton');
  const toast = document.getElementById('toast');

  const MIN_LENGTH = 2;
  const MAX_LENGTH = 100;

  const ALLOWED_RE = /^[0-9A-Za-zÁÉÍÓÚÜáéíóúüÑñ\s.,;:¡!¿?"'()\-–—_]+$/u;
  const STRIP_RE = /[^0-9A-Za-zÁÉÍÓÚÜáéíóúüÑñ\s.,;:¡!¿?"'()\-–—_]/gu;

  const setToast = (msg) => { toast.textContent = msg || ''; };

  const sanitize = (value) => value.replace(STRIP_RE, '');

  const updateUI = () => {
    const value = textInput.value;
    const canReverse = value.length >= MIN_LENGTH;

    reverseButton.disabled = !canReverse;
    textInput.placeholder = canReverse ? '' : 'Introduce dos o más caracteres';
    copyButton.disabled = resultOutput.value.length === 0;
  };

  const reverseString = (value) => value.split('').reverse().join('');

  textInput.addEventListener('beforeinput', (e) => {
    if (e.data && !ALLOWED_RE.test(e.data)) {
      if ([...e.data].some((ch) => !ALLOWED_RE.test(ch))) {
        e.preventDefault();
      }
    }
  });

  textInput.addEventListener('paste', (e) => {
    // Evita pegados con caracteres no permitidos (control/emojis, etc.)
    const pasted = (e.clipboardData || window.clipboardData)?.getData('text') ?? '';
    const cleaned = sanitize(pasted);
    if (pasted !== cleaned) {
      e.preventDefault();
      const start = textInput.selectionStart ?? textInput.value.length;
      const end = textInput.selectionEnd ?? textInput.value.length;
      const next = (textInput.value.slice(0, start) + cleaned + textInput.value.slice(end)).slice(0, MAX_LENGTH);
      textInput.value = next;
      textInput.setSelectionRange?.(start + cleaned.length, start + cleaned.length);
      setToast('');
      resultOutput.value = '';
      updateUI();
    }
  });

  textInput.addEventListener('input', () => {
    let value = textInput.value;

    if (value && !ALLOWED_RE.test(value)) {
      value = sanitize(value);
      textInput.value = value;
    }

    if (value.length > MAX_LENGTH) {
      textInput.value = value.slice(0, MAX_LENGTH);
      value = textInput.value;
    }

    setToast('');
    resultOutput.value = '';
    updateUI();
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let value = textInput.value;

    if (value.length < MIN_LENGTH) {
      updateUI();
      return;
    }

    if (value && !ALLOWED_RE.test(value)) {
      value = sanitize(value).slice(0, MAX_LENGTH);
      textInput.value = value;
    }

    resultOutput.value = reverseString(value);
    setToast('');
    updateUI();
  });

  copyButton.addEventListener('click', async () => {
    const text = resultOutput.value;
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      setToast('Copiado al portapapeles ✔');
    } catch {
      resultOutput.focus();
      resultOutput.select();
      const ok = document.execCommand('copy');
      setToast(ok ? 'Copiado al portapapeles ✔' : 'No se pudo copiar. Copia manualmente.');
      window.getSelection?.().removeAllRanges?.();
    }
  });

  updateUI();
});
