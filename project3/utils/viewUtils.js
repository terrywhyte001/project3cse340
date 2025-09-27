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

module.exports = {
  formatCurrency,
  formatMileage,
};
