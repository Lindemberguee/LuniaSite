import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import axios from 'axios';

// Função para verificar a API Key
function verifyApiKey(request: NextRequest): boolean {
  const apiKey = request.headers.get('x-api-key');
  return apiKey === process.env.NEXT_PUBLIC_API_KEY;
}

export async function GET(request: NextRequest) {
  // Verificar a API Key
  if (!verifyApiKey(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const response = await axios.get('http://localhost:7705/api/tower1Ranking');
    if (response.status === 200) {
      return NextResponse.json(response.data, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Erro ao buscar os dados da torre.' }, { status: response.status });
    }
  } catch (error) {
    console.error('Erro na API tower1Ranking:', error);
    return NextResponse.json({ error: 'Erro interno no servidor' }, { status: 500 });
  }
}
