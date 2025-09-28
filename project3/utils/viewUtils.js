// project3/utils/viewUtils.js

/**
 * Format a number as US currency.
 * @param {number} amount
 * @returns {string}
 */
function formatCurrency(amount) {
  if (amount == null || isNaN(amount)) return 'N/A';
  return '$' + Number(amount).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

/**
 * Format a number as US mileage with commas.
 * @param {number} miles
 * @returns {string}
 */
function formatMileage(miles) {
  if (miles == null || isNaN(miles)) return 'N/A';
  return Number(miles).toLocaleString('en-US');
}

/**
 * Capitalize the first letter of a string
 * @param {string} str
 * @returns {string}
 */
function capitalize(str) {
  if (!str || typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Shorten long text to a specified length
 * @param {string} text
 * @param {number} maxLength
 * @returns {string}
 */
function truncateText(text, maxLength = 100) {
  if (!text || typeof text !== 'string') return '';
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

module.exports = {
  formatCurrency,
  formatMileage,
  capitalize,
  truncateText,
};
