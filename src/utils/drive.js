// src/utils/drive.js
// Converts a Google Drive file ID to a direct-embeddable image URL.
 
/**
 * @param {string|null} fileId  — the file ID from your Google Drive share link
 * @returns {string|null}       — direct image src, or null if no ID provided
 *
 * Usage:
 *   const src = getDriveImageUrl("1AbCdEfGhIjKlMnOpQrStUvWxYz")
 *   <img src={src} alt="..." />
 */
export function getDriveImageUrl(fileId) {
  if (!fileId) return null
  return `https://drive.google.com/uc?export=view&id=${fileId}`
}
