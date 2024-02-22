/* eslint import/prefer-default-export: off */
import { URL } from 'url';
import path from 'path';

export function resolveHtmlPath(htmlFileName: string) {
  if (process.env.NODE_ENV === 'development') {
    const port = process.env.PORT || 1212;
    const url = new URL(`http://localhost:${port}`);
    url.pathname = htmlFileName;
    return url.href;
  }
  return `file://${path.resolve(__dirname, '../renderer/', htmlFileName)}`;
}

/**
 * 
 * @param loadCode The raw TEVE load code saved in wc3 documents.
 * @param chunkSize The max size of an ingame chat message in wc3.
 * @returns An array of strings, each containing a chunk of the load code. Each chunk 
 */
export function splitIntoChunks(loadCode: string): string[] {
  const result: string[] = [];
  const chunkSize = 120;
    
  for (let i = 0; i < loadCode.length; i += chunkSize) {
      result.push(loadCode.slice(i, i + chunkSize));
  }
  
  return result;
}