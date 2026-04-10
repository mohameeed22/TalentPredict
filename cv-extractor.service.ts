import { Injectable } from '@angular/core';

/**
 * CvExtractorService - Extract text from PDF and TXT files locally in the browser
 * Uses pdfjs-dist library for PDF parsing (no server-side dependency needed)
 * 
 * Benefits:
 * - Client-side extraction (no network latency)
 * - Privacy (PDF never sent to server)
 * - Supports both PDF and TXT formats
 * - Instant feedback to user
 */
@Injectable({
  providedIn: 'root'
})
export class CvExtractorService {

  constructor() {
    // Configure pdfjs worker URL
    this.initializePdfJs();
  }

  /**
   * Initialize pdfjs with worker URL from CDN
   */
  private initializePdfJs(): void {
    const pdfjsLib = require('pdfjs-dist');
    pdfjsLib.GlobalWorkerOptions.workerSrc = 
      'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
  }

  /**
   * Extract text from either PDF or TXT file
   * @param file The File object (PDF or TXT)
   * @returns Promise with extracted text and metadata
   */
  async extractFromFile(file: File): Promise<{
    text: string;
    fileName: string;
    fileType: string;
    fileSize: number;
    pages?: number;
  }> {
    if (!file) {
      throw new Error('No file provided');
    }

    // Route based on file type
    if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
      return this.extractFromPdf(file);
    } else if (file.type === 'text/plain' || file.name.endsWith('.txt')) {
      return this.extractFromText(file);
    } else {
      throw new Error(`Unsupported file type: ${file.type}. Only PDF and TXT are supported.`);
    }
  }

  /**
   * Extract text from PDF file using pdfjs-dist
   * @param file PDF File object
   * @returns Promise with extracted text and metadata
   */
  private async extractFromPdf(file: File): Promise<{
    text: string;
    fileName: string;
    fileType: string;
    fileSize: number;
    pages: number;
  }> {
    const pdfjsLib = require('pdfjs-dist');

    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

      let allText = '';
      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        try {
          const page = await pdf.getPage(pageNum);
          const textContent = await page.getTextContent();
          const pageText = textContent.items
            .map((item: any) => item.str)
            .join(' ');
          allText += pageText + '\n';
        } catch (pageError) {
          console.warn(`Error extracting page ${pageNum}:`, pageError);
        }
      }

      return {
        text: allText.trim(),
        fileName: file.name,
        fileType: 'PDF',
        fileSize: file.size,
        pages: pdf.numPages
      };
    } catch (error) {
      throw new Error(`Failed to extract PDF: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Extract text from TXT file using FileReader API
   * @param file TXT File object
   * @returns Promise with extracted text and metadata
   */
  private async extractFromText(file: File): Promise<{
    text: string;
    fileName: string;
    fileType: string;
    fileSize: number;
  }> {
    try {
      const text = await file.text();
      return {
        text: text.trim(),
        fileName: file.name,
        fileType: 'TXT',
        fileSize: file.size
      };
    } catch (error) {
      throw new Error(`Failed to read TXT file: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Format file size for display
   * @param bytes File size in bytes
   * @returns Formatted size string (e.g., "245 KB")
   */
  private formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  }

  /**
   * Get human-readable label for file type
   * @param type MIME type
   * @returns Label string
   */
  private getFileTypeLabel(type: string): string {
    if (type === 'application/pdf') return 'PDF Document';
    if (type === 'text/plain') return 'Text File';
    return 'Unknown File';
  }
}
