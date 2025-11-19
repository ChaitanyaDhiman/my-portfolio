import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    const filePath = path.join(process.cwd(), 'public', 'Chaitanya_Resume_2025.pdf');

    try {
        const fileBuffer = fs.readFileSync(filePath);

        return new NextResponse(fileBuffer, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename="Chaitanya_Resume_2025.pdf"',
            },
        });
    } catch (error) {
        console.error('Error reading resume file:', error);
        return new NextResponse('File not found', { status: 404 });
    }
}
