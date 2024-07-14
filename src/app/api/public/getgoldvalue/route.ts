import { NextRequest, NextResponse } from 'next/server';
import axios, { AxiosResponse } from 'axios';

// Interface para os dados do GoldLog
interface GoldLogEntry {
  LogTime: string;
  TotalGold: string;
}

// Interface para a resposta da API do backend
interface GoldLogResponse {
  data: GoldLogEntry[];
}

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
    const response: AxiosResponse<GoldLogResponse> = await axios.get('http://localhost:7705/api/getGoldLog');
    if (response.status === 200) {
      return NextResponse.json(response.data);
    } else {
      return NextResponse.json({ error: 'Erro ao buscar os dados do GoldLog' }, { status: response.status });
    }
  } catch (error) {
    console.error('Erro na API getGoldLog:', error);
    return NextResponse.json({ error: 'Erro interno no servidor' }, { status: 500 });
  }
}
