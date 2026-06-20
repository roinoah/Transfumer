import { NextRequest, NextResponse } from 'next/server';
import { PDFParse } from 'pdf-parse';

export async function POST(req: NextRequest) {
  let parser: PDFParse | null = null;
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json(
        { isSuccessful: false, message: 'No file provided' },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Parse the PDF text using PDFParse
    parser = new PDFParse({ data: buffer });
    const data = await parser.getText();

    return NextResponse.json({
      isSuccessful: true,
      text: data.text,
    });
  } catch (error: unknown) {
    console.error('Error parsing PDF:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to extract text from PDF';
    return NextResponse.json(
      { isSuccessful: false, message: errorMessage },
      { status: 500 }
    );
  } finally {
    if (parser) {
      try {
        await parser.destroy();
      } catch (e) {
        console.error('Error destroying parser:', e);
      }
    }
  }
}
