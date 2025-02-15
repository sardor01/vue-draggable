const MESSAGE_PREFIX = '[@sarast/vue-draggable]: ';

/**
 * Logs a warning message.
 * @param {string} msg
 */
export function warn(msg: string) {
  console.warn(MESSAGE_PREFIX + msg);
}

/**
 * Logs an error message.
 * @param {string} msg
 */
export function error(msg: string) {
  console.error(MESSAGE_PREFIX + msg);
}
